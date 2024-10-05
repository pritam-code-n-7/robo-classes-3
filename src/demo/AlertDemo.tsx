import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertDemo({ title, desc }: alertTypes) {
  return (
    <Alert className="text-center bg-[#F0F0F0] text-[#512929] dark:bg-slate-800/20 hover:bg-zinc-300 transition-all ease-in-out duration-300 dark:border-none">
      <AlertTitle className="text-2xl font-extrabold">{title}</AlertTitle>
      <AlertDescription className="text-xs font-semibold" style={{ letterSpacing: "0.09em" }}>
        {desc}
      </AlertDescription>
    </Alert>
  );
}
