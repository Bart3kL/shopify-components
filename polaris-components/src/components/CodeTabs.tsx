import { useState, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import JSZip from "jszip";

import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";
import { Copy, Check, Download } from "lucide-react";

type FileData = { filename: string; content: string };

export default function CodeTabs({
  files,
  componentId,
}: {
  files: FileData[];
  componentId: string;
}) {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const timer = useRef<NodeJS.Timeout>(null);

  if (!files?.length) return <div>Brak plików do pokazania</div>;

  const doCopy = async (text: string) => {
    if (timer.current) clearTimeout(timer.current);
    await navigator.clipboard.writeText(text);
    setCopied(true);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async () => {
    setDownloading(true);
    const zip = new JSZip();
    for (const file of files) {
      zip.file(file.filename, file.content);
    }
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `component-${componentId}.zip`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
      setDownloading(false);
    }, 200);
  };

  return (
    <div className="border rounded-xl shadow-sm bg-white mt-8 font-mono">
      <div className="flex items-center border-b px-2 py-1 gap-2 bg-[#F7F7F7] rounded-t-xl overflow-auto">
        <div className="flex gap-1">
          {files.map((file, idx) => (
            <button
              key={file.filename}
              onClick={() => setActive(idx)}
              className={`px-3 py-1 rounded-t text-xs font-mono  cursor-pointer min-w-fit ${
                idx === active
                  ? "  text-blue-600 font-bold "
                  : "border-transparent bg-transparent text-neutral-600 hover:bg-neutral-100"
              } transition-all`}
              style={{
                borderBottom:
                  idx === active
                    ? "2px solid #3b82f6"
                    : "2px solid transparent",
              }}
            >
              {file.filename}
            </button>
          ))}
        </div>
        <div className="flex-1" />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded ml-1  cursor-pointer"
              onClick={handleDownload}
              disabled={downloading}
            >
              <Download className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" align="center">
            Download
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded ml-1 mr-2 cursor-pointer"
              onClick={() => doCopy(files[active].content)}
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" align="center">
            {copied ? "Copied!" : "Copy to clipboard"}
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="flex justify-end pr-6 pt-2 text-xs select-none">
        <Badge
          variant="outline"
          className="border bg-neutral-100 text-neutral-400 rounded"
        >
          {getLanguage(files[active].filename).toUpperCase()}
        </Badge>
      </div>

      <div style={{ background: "white", maxHeight: 480, overflow: "auto" }}>
        <SyntaxHighlighter
          language={getLanguage(files[active].filename)}
          className="text-xs"
          customStyle={{
            background: "transparent",
            fontSize: 13,
            minHeight: 300,
            padding: "1em 1.5em 1.5em 1.5em",
            margin: 0,
          }}
          showLineNumbers
        >
          {files[active].content.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

function getLanguage(filename: string): string {
  const ext = filename.split(".").pop();
  if (ext === "tsx") return "tsx";
  if (ext === "ts") return "typescript";
  if (ext === "jsx") return "jsx";
  if (ext === "js") return "javascript";
  if (ext === "css") return "css";
  if (ext === "json") return "json";
  return "typescript";
}
