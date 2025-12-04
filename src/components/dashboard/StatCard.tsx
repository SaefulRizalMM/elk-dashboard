import { cn } from "@/lib/utils";

interface StatItem {
  value: string;
  label: string;
  countLabel?: string;
  countValue?: string;
  success?: boolean;
}

interface StatCardProps {
  title: string;
  stats: StatItem[];
  variant?: "default" | "success" | "warning" | "danger" | "info";
  className?: string;
}

export function StatCard({ title, stats, variant = "default", className }: StatCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return { 
          header: "bg-emerald-500", 
          dot: "bg-emerald-500",
          bg: "bg-emerald-50 dark:bg-emerald-950/30"
        };
      case "warning":
        return { 
          header: "bg-amber-500", 
          dot: "bg-amber-500",
          bg: "bg-amber-50 dark:bg-amber-950/30"
        };
      case "danger":
        return { 
          header: "bg-rose-500", 
          dot: "bg-rose-500",
          bg: "bg-rose-50 dark:bg-rose-950/30"
        };
      case "info":
        return { 
          header: "bg-teal-500", 
          dot: "bg-teal-500",
          bg: "bg-teal-50 dark:bg-teal-950/30"
        };
      default:
        return { 
          header: "bg-violet-500", 
          dot: "bg-violet-500",
          bg: "bg-violet-50 dark:bg-violet-950/30"
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={cn(
      "bg-card rounded-xl overflow-hidden card-shadow animate-fade-in h-full flex flex-col",
      className
    )}>
      {/* Colored Header Bar */}
      <div className={cn("h-2", styles.header)} />
      
      {/* Title */}
      <div className="px-4 pt-3 pb-2">
        <h3 className="text-sm font-semibold text-foreground truncate">{title}</h3>
      </div>
      
      {/* Stats Grid */}
      <div className={cn(
        "px-4 pb-4 flex-1 grid gap-3",
        stats.length === 1 ? "grid-cols-1" : "grid-cols-2"
      )}>
        {stats.map((stat, index) => (
          <div key={index} className={cn("rounded-lg p-3 min-w-0 relative overflow-hidden", styles.bg)}>
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path
                  d="M0,30 Q25,10 50,25 T100,20 V40 H0 Z"
                  fill="currentColor"
                  className={cn(
                    stat.success === false ? "text-rose-400" : 
                    stat.success === true ? "text-emerald-400" : "text-current"
                  )}
                />
              </svg>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Label with dot */}
              <div className="flex items-center gap-1.5 mb-1">
                <div className={cn("w-2.5 h-2.5 rounded-full flex-shrink-0", styles.dot)} />
                <p className="text-[10px] sm:text-xs font-medium text-foreground/80 truncate">{stat.label}</p>
              </div>
              
              {/* Count info */}
              {stat.countLabel && (
                <p className="text-[9px] sm:text-[10px] text-muted-foreground mb-1">
                  {stat.countLabel} <span className="font-semibold text-foreground/70">{stat.countValue}</span>
                </p>
              )}
              
              {/* Large value */}
              <p className={cn(
                "text-xl sm:text-2xl font-bold",
                stat.success === false ? "text-foreground" : "text-foreground"
              )}>
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
