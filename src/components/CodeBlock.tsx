import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
}

export default function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const langColors: Record<string, string> = {
    html: "#e34c26",
    css: "#264de4",
    javascript: "#f7df1e",
    php: "#777bb4",
    sql: "#e48e00",
    bash: "#4eaa25",
  };

  return (
    <div className="code-block my-4 rounded-xl overflow-hidden shadow-lg">
      {filename && (
        <div
          className="flex items-center justify-between px-4 py-2 text-sm text-white"
          style={{ backgroundColor: "#1a1a2e" }}
        >
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: langColors[language] || "#888" }}
            />
            <span className="font-mono">{filename}</span>
          </div>
          <span className="text-xs opacity-60 uppercase">{language}</span>
        </div>
      )}
      <div className="relative">
        <button
          onClick={handleCopy}
          className="copy-btn absolute top-2 right-2 z-10 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
          title="Copier le code"
        >
          {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
        </button>
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            margin: 0,
            borderRadius: filename ? "0 0 0.75rem 0.75rem" : "0.75rem",
            padding: "1.25rem",
            fontSize: "0.875rem",
            lineHeight: "1.7",
          }}
          showLineNumbers
          wrapLines
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
