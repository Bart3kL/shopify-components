import * as React from "react";
import { isNodeSelection, type Editor } from "@tiptap/react";

// --- Hooks ---
import { useTiptapEditor } from "../../hooks/use-tiptap-editor";

// --- Icons ---
import { ChevronDownIcon } from "../../tiptap-icons/chevron-down-icon";
import { HeadingIcon } from "../../tiptap-icons/heading-icon";

// --- Lib ---
import { isNodeInSchema } from "../../lib/tiptap-utils";

// --- Tiptap UI ---
import {
  headingIcons,
  type Level,
  getFormattedHeadingName,
} from "../HeadingButton";

// --- Shopify Polaris ---
import { Popover, ActionList } from "@shopify/polaris";

// --- UI Primitives ---
import type { ButtonProps } from "../../Primitive/Button";
import { Button } from "../../Primitive/Button";

export interface HeadingDropdownMenuProps extends Omit<ButtonProps, "type"> {
  editor?: Editor | null;
  levels?: Level[];
  hideWhenUnavailable?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

export function HeadingDropdownMenu({
  editor: providedEditor,
  levels = [1, 2, 3, 4, 5, 6],
  hideWhenUnavailable = false,
  onOpenChange,
  ...props
}: HeadingDropdownMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const editor = useTiptapEditor(providedEditor);

  const headingInSchema = isNodeInSchema("heading", editor);

  const handleOnOpenChange = React.useCallback(
    (open: boolean) => {
      setIsOpen(open);
      onOpenChange?.(open);
    },
    [onOpenChange]
  );

  const getActiveIcon = React.useCallback(() => {
    if (!editor) return <HeadingIcon className="tiptap-button-icon" />;

    const activeLevel = levels.find((level) =>
      editor.isActive("heading", { level })
    ) as Level | undefined;

    if (!activeLevel) return <HeadingIcon className="tiptap-button-icon" />;

    const ActiveIcon = headingIcons[activeLevel];
    return <ActiveIcon className="tiptap-button-icon" />;
  }, [editor, levels]);

  const canToggleAnyHeading = React.useCallback((): boolean => {
    if (!editor) return false;
    return levels.some((level) =>
      editor.can().toggleNode("heading", "paragraph", { level })
    );
  }, [editor, levels]);

  const isDisabled = !canToggleAnyHeading();
  const isAnyHeadingActive = editor?.isActive("heading") ?? false;

  const show = React.useMemo(() => {
    if (!headingInSchema || !editor) {
      return false;
    }

    if (hideWhenUnavailable) {
      if (isNodeSelection(editor.state.selection) || !canToggleAnyHeading()) {
        return false;
      }
    }

    return true;
  }, [headingInSchema, editor, hideWhenUnavailable, canToggleAnyHeading]);

  if (!show || !editor || !editor.isEditable) {
    return null;
  }

  const items = levels.map((level) => ({
    content: getFormattedHeadingName(level),
    onAction: () => {
      editor.chain().focus().toggleHeading({ level }).run();
      setIsOpen(false);
    },
  }));

  return (
    <Popover
      active={isOpen}
      activator={
        <Button
          type="button"
          onClick={() => handleOnOpenChange(!isOpen)}
          disabled={isDisabled}
          data-style="ghost"
          data-active-state={isAnyHeadingActive ? "on" : "off"}
          data-disabled={isDisabled}
          role="button"
          tabIndex={-1}
          aria-label="Format text as heading"
          aria-pressed={isAnyHeadingActive}
          tooltip="Heading"
          {...props}
        >
          {getActiveIcon()}
          <ChevronDownIcon className="tiptap-button-dropdown-small" />
        </Button>
      }
      autofocusTarget="first-node"
      onClose={() => handleOnOpenChange(false)}
    >
      <Popover.Pane>
        <ActionList items={items} />
      </Popover.Pane>
    </Popover>
  );
}

export default HeadingDropdownMenu;
