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
        "grid gap-4",
        stats.length === 1 ? "grid-cols-1" : "grid-cols-2"
      )}>
        {stats.map((stat, index) => (
          <div key={index} className="flex items-start gap-2.5 min-w-0">
            <div className={cn(
              "w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center",
              styles.bg
            )}>
              <div className={cn("w-4 h-4 rounded-full", styles.dot)} />
            </div>
            
            <div className="min-w-0 flex-1">
              <p className="text-lg font-bold text-foreground truncate">{stat.value}</p>
              <p className="text-xs text-muted-foreground truncate">{stat.label}</p>
              {stat.sublabel && (
                <p className={cn(
                  "text-xs mt-0.5 truncate",
                  stat.success ? "text-success" : "text-destructive"
                )}>
                  {stat.sublabel}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
