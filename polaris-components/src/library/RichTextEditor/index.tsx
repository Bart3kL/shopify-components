import * as React from "react";
import { EditorContent, EditorContext, useEditor } from "@tiptap/react";

//styles
import "./styles/_keyframe-animations.scss";
import "./styles/_variables.scss";

// --- Tiptap Core Extensions ---
import { StarterKit } from "@tiptap/starter-kit";
import { Image } from "@tiptap/extension-image";
import { TaskItem } from "@tiptap/extension-task-item";
import { TaskList } from "@tiptap/extension-task-list";
import { TextAlign } from "@tiptap/extension-text-align";
import { Typography } from "@tiptap/extension-typography";
import { Highlight } from "@tiptap/extension-highlight";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { Underline } from "@tiptap/extension-underline";

// --- Custom Extensions ---
import { Link } from "./Extension/link-extension";
import { Selection } from "./Extension/selection-extension";
import { TrailingNode } from "./Extension/trailing-node-extension";

// --- UI Primitives ---
import { Button } from "./Primitive/Button";

import { Toolbar, ToolbarGroup, ToolbarSeparator } from "./Primitive/Toolbar";

// --- Tiptap Node ---
import { ImageUploadNode } from "./Node/ImageUpload";
import "./Node/CodeBlock/code-block-node.scss";
import "./Node/List/list-node.scss";
import "./Node/Image/image-node.scss";
import "./Node/Paragraph/paragraph-node.scss";

// --- Tiptap UI ---
import { HeadingDropdownMenu } from "./Ui/HeadingDropdownMenu";
import { ImageUploadButton } from "./Ui/ImageUploadButton";
import { ListDropdownMenu } from "./Ui/ListDropdownMenu";
import { NodeButton } from "./Ui/NodeButton";
import {
  HighlightPopover,
  HighlightContent,
  HighlighterButton,
} from "./Ui/HighlightPopover";
import { LinkPopover, LinkContent, LinkButton } from "./Ui/LinkPopover";
import { MarkButton } from "./Ui/MarkButton";
import { TextAlignButton } from "./Ui/TextAlignButton";

// --- Icons ---
import { ArrowLeftIcon } from "./tiptap-icons/arrow-left-icon";
import { ColorIcon, LinkIcon } from "@shopify/polaris-icons";

// --- Hooks ---
import { useMobile } from "./hooks/use-mobile";
import { useWindowSize } from "./hooks/use-window-size";
import { useCursorVisibility } from "./hooks/use-cursor-visibility";

// --- Components ---

// --- Lib ---
import { handleImageUpload, MAX_FILE_SIZE } from "./lib/tiptap-utils";

// --- Styles ---
import "./simple-editor.scss";

import { Card } from "@shopify/polaris";

const MainToolbarContent = ({
  onHighlighterClick,
  onLinkClick,
  isMobile,
}: {
  onHighlighterClick: () => void;
  onLinkClick: () => void;
  isMobile: boolean;
}) => {
  return (
    <>
      <ToolbarSeparator />

      <ToolbarGroup>
        <HeadingDropdownMenu levels={[1, 2, 3, 4, 5, 6]} />
      </ToolbarGroup>

      <ToolbarGroup>
        <MarkButton type="bold" />
        <MarkButton type="italic" />

        <MarkButton type="code" />
        <MarkButton type="underline" />
        {!isMobile ? (
          <HighlightPopover />
        ) : (
          <HighlighterButton onClick={onHighlighterClick} />
        )}
        {!isMobile ? <LinkPopover /> : <LinkButton onClick={onLinkClick} />}
      </ToolbarGroup>
      <ToolbarSeparator />

      <ToolbarSeparator />

      <ToolbarGroup>
        <ListDropdownMenu types={["bulletList", "orderedList", "taskList"]} />
        <NodeButton type="codeBlock" />
        <NodeButton type="blockquote" />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <TextAlignButton align="left" />
        <TextAlignButton align="center" />
        <TextAlignButton align="right" />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <ImageUploadButton text="Add" />
      </ToolbarGroup>

      {isMobile && <ToolbarSeparator />}
    </>
  );
};

const MobileToolbarContent = ({
  type,
  onBack,
}: {
  type: "highlighter" | "link";
  onBack: () => void;
}) => (
  <>
    <ToolbarGroup>
      <Button data-style="ghost" onClick={onBack}>
        <ArrowLeftIcon className="tiptap-button-icon" />
        {type === "highlighter" ? (
          <ColorIcon className="tiptap-button-icon  fill-[#4a4a4a]" />
        ) : (
          <LinkIcon className="tiptap-button-icon fill-[#4a4a4a]" />
        )}
      </Button>
    </ToolbarGroup>

    <ToolbarSeparator />

    {type === "highlighter" ? <HighlightContent /> : <LinkContent />}
  </>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function RichTextEditor({ content }: { content: any }) {
  const isMobile = useMobile();
  const windowSize = useWindowSize();
  const [mobileView, setMobileView] = React.useState<
    "main" | "highlighter" | "link"
  >("main");
  const toolbarRef = React.useRef<HTMLDivElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    editorProps: {
      attributes: {
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        "aria-label": "Main content area, start typing to enter text.",
      },
    },
    extensions: [
      StarterKit,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Underline,
      TaskList,
      TaskItem.configure({ nested: true }),
      Highlight.configure({ multicolor: true }),
      Image,
      Typography,
      Superscript,
      Subscript,

      Selection,
      ImageUploadNode.configure({
        accept: "image/*",
        maxSize: MAX_FILE_SIZE,
        limit: 3,
        upload: handleImageUpload,
        onError: (error) => console.error("Upload failed:", error),
      }),
      TrailingNode,
      Link.configure({ openOnClick: false }),
    ],
    content: content,
  });

  const bodyRect = useCursorVisibility({
    editor,
    overlayHeight: toolbarRef.current?.getBoundingClientRect().height ?? 0,
  });

  React.useEffect(() => {
    if (!isMobile && mobileView !== "main") {
      setMobileView("main");
    }
  }, [isMobile, mobileView]);

  return (
    <Card padding={"0"}>
      <div className="max-h-[500px] ">
        <EditorContext.Provider value={{ editor }}>
          <Toolbar
            ref={toolbarRef}
            style={
              isMobile
                ? {
                    bottom: `calc(100% - ${windowSize.height - bodyRect.y}px)`,
                  }
                : {}
            }
          >
            {mobileView === "main" ? (
              <MainToolbarContent
                onHighlighterClick={() => setMobileView("highlighter")}
                onLinkClick={() => setMobileView("link")}
                isMobile={isMobile}
              />
            ) : (
              <MobileToolbarContent
                type={mobileView === "highlighter" ? "highlighter" : "link"}
                onBack={() => setMobileView("main")}
              />
            )}
          </Toolbar>

          <div className="content-wrapper overflow-auto max-h-[400px] bg-[#fdfdfd]">
            <EditorContent
              editor={editor}
              role="presentation"
              className="simple-editor-content"
            />
          </div>
        </EditorContext.Provider>
      </div>
    </Card>
  );
}
