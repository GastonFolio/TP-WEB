import { Info, AlertTriangle, Lightbulb, AlertCircle } from "lucide-react";

interface InfoBoxProps {
  type: "info" | "warning" | "tip" | "error";
  title?: string;
  children: React.ReactNode;
}

export default function InfoBox({ type, title, children }: InfoBoxProps) {
  const configs = {
    info: { className: "info-box", icon: <Info size={20} />, defaultTitle: "ℹ️ Information" },
    warning: { className: "warning-box", icon: <AlertTriangle size={20} />, defaultTitle: "⚠️ Attention" },
    tip: { className: "tip-box", icon: <Lightbulb size={20} />, defaultTitle: "💡 Astuce" },
    error: { className: "error-box", icon: <AlertCircle size={20} />, defaultTitle: "❌ Erreur fréquente" },
  };

  const config = configs[type];

  return (
    <div className={config.className}>
      <div className="flex items-center gap-2 font-bold mb-1">
        {config.icon}
        {title || config.defaultTitle}
      </div>
      <div style={{ color: "var(--text-secondary)" }}>{children}</div>
    </div>
  );
}
