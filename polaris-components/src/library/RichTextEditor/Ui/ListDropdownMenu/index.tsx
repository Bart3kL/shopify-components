import * as React from "react";
import { isNodeSelection, type Editor } from "@tiptap/react";

// --- Hooks ---
import { useTiptapEditor } from "../../hooks/use-tiptap-editor";

// --- Icons ---
import { ListBulletedIcon } from "@shopify/polaris-icons";

// --- Lib ---
import { isNodeInSchema } from "../../lib/tiptap-utils";

// --- Tiptap UI ---
import {
  ListButton,
  canToggleList,
  isListActive,
  listOptions,
  type ListType,
} from "../ListButton";

// --- UI Primitives ---
import type { ButtonProps } from "../../Primitive/Button";

export interface ListDropdownMenuProps extends Omit<ButtonProps, "type"> {
  /**
   * The TipTap editor instance.
   */
  editor?: Editor;
  /**
   * The list types to display in the dropdown.
   */
  types?: ListType[];
  /**
   * Whether the dropdown should be hidden when no list types are available
   * @default false
   */
  hideWhenUnavailable?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

export function canToggleAnyList(
  editor: Editor | null,
  listTypes: ListType[]
): boolean {
  if (!editor) return false;
  return listTypes.some((type) => canToggleList(editor, type));
}

export function isAnyListActive(
  editor: Editor | null,
  listTypes: ListType[]
): boolean {
  if (!editor) return false;
  return listTypes.some((type) => isListActive(editor, type));
}

export function getFilteredListOptions(
  availableTypes: ListType[]
): typeof listOptions {
  return listOptions.filter(
    (option) => !option.type || availableTypes.includes(option.type)
  );
}

export function shouldShowListDropdown(params: {
  editor: Editor | null;
  listTypes: ListType[];
  hideWhenUnavailable: boolean;
  listInSchema: boolean;
  canToggleAny: boolean;
}): boolean {
  const { editor, hideWhenUnavailable, listInSchema, canToggleAny } = params;

  if (!listInSchema || !editor) {
    return false;
  }

  if (hideWhenUnavailable) {
    if (isNodeSelection(editor.state.selection) || !canToggleAny) {
      return false;
    }
  }

  return true;
}

export function useListDropdownState(
  editor: Editor | null,
  availableTypes: ListType[]
) {
  const [isOpen, setIsOpen] = React.useState(false);

  const listInSchema = availableTypes.some((type) =>
    isNodeInSchema(type, editor)
  );

  const filteredLists = React.useMemo(
    () => getFilteredListOptions(availableTypes),
    [availableTypes]
  );

  const canToggleAny = canToggleAnyList(editor, availableTypes);
  const isAnyActive = isAnyListActive(editor, availableTypes);

  const handleOpenChange = React.useCallback(
    (open: boolean, callback?: (isOpen: boolean) => void) => {
      setIsOpen(open);
      callback?.(open);
    },
    []
  );

  return {
    isOpen,
    setIsOpen,
    listInSchema,
    filteredLists,
    canToggleAny,
    isAnyActive,
    handleOpenChange,
  };
}

export function useActiveListIcon(
  editor: Editor | null,
  filteredLists: typeof listOptions
) {
  return React.useCallback(() => {
    const activeOption = filteredLists.find((option) =>
      isListActive(editor, option.type)
    );

    return activeOption ? (
      <activeOption.icon className="tiptap-button-icon" />
    ) : (
      <ListBulletedIcon className="tiptap-button-icon fill-[#4a4a4a]" />
    );
  }, [editor, filteredLists]);
}

export function ListDropdownMenu({
  editor: providedEditor,
  types = ["bulletList", "orderedList", "taskList"],
  hideWhenUnavailable = false,
}: ListDropdownMenuProps) {
  const editor = useTiptapEditor(providedEditor);

  const { listInSchema, filteredLists, canToggleAny } = useListDropdownState(
    editor,
    types
  );

  const show = React.useMemo(() => {
    return shouldShowListDropdown({
      editor,
      listTypes: types,
      hideWhenUnavailable,
      listInSchema,
      canToggleAny,
    });
  }, [editor, types, hideWhenUnavailable, listInSchema, canToggleAny]);

  if (!show || !editor || !editor.isEditable) {
    return null;
  }

  return (
    <>
      {" "}
      {filteredLists.map((option) => (
        <ListButton
          key={option.type}
          editor={editor}
          type={option.type}
          text={option.label}
          hideWhenUnavailable={hideWhenUnavailable}
          tooltip={""}
        />
      ))}
    </>
  );
}

export default ListDropdownMenu;
