import { AlertCircle, CheckCircle2 } from "lucide-react";

type StatusOverlayProps = {
  type: "success" | "error";
  title: string;
  message: string;
};

export function StatusOverlay({ type, title, message }: StatusOverlayProps) {
  const isSuccess = type === "success";
  const Icon = isSuccess ? CheckCircle2 : AlertCircle;
  const iconColor = isSuccess ? "text-green-500" : "text-red-500";

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center rounded-lg bg-white/95 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="text-center animate-in zoom-in duration-500">
        <Icon className={`mx-auto h-16 w-16 mb-4 ${iconColor}`} />
        <h3 className="text-2xl font-bold text-slate-950 mb-2">{title}</h3>
        <p className="text-slate-600">{message}</p>
      </div>
    </div>
  );
}
