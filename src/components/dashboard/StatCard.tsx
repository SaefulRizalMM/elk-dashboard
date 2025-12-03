import { cn } from "@/lib/utils";

interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
  success?: boolean;
}

interface StatCardProps {
  title: string;
  stats: StatItem[];
  variant?: "default" | "success" | "warning" | "danger";
  className?: string;
}

export function StatCard({ title, stats, variant = "default", className }: StatCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return { bg: "bg-primary/10", dot: "bg-primary" };
      case "warning":
        return { bg: "bg-warning/10", dot: "bg-warning" };
      case "danger":
        return { bg: "bg-destructive/10", dot: "bg-destructive" };
      default:
        return { bg: "bg-primary/10", dot: "bg-primary" };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={cn(
      "bg-card rounded-xl p-5 card-shadow animate-fade-in h-full",
      className
    )}>
      <h3 className="text-sm font-semibold text-foreground mb-4 truncate">{title}</h3>
      
      <div className={cn(
        "grid gap-3",
        stats.length === 1 ? "grid-cols-1" : "grid-cols-2"
      )}>
        {stats.map((stat, index) => (
          <div key={index} className="bg-muted/50 rounded-lg p-3 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <div className={cn("w-3 h-3 rounded-full flex-shrink-0", styles.dot)} />
              <p className="text-base sm:text-lg font-bold text-foreground truncate">{stat.value}</p>
            </div>
            <p className="text-[10px] sm:text-xs text-muted-foreground break-words">{stat.label}</p>
            {stat.sublabel && (
              <p className={cn(
                "text-[10px] sm:text-xs mt-0.5 break-words",
                stat.success ? "text-success" : "text-destructive"
              )}>
                {stat.sublabel}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
