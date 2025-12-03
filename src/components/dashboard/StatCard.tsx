import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

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
  return (
    <div className={cn(
      "bg-card rounded-xl p-5 card-shadow animate-fade-in",
      className
    )}>
      <h3 className="text-sm font-semibold text-foreground mb-4">{title}</h3>
      
      <div className="flex gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center",
              variant === "success" && "bg-primary/10",
              variant === "warning" && "bg-warning/10",
              variant === "danger" && "bg-destructive/10",
              variant === "default" && "bg-primary/10"
            )}>
              <div className={cn(
                "w-5 h-5 rounded-full",
                variant === "success" && "bg-primary",
                variant === "warning" && "bg-warning",
                variant === "danger" && "bg-destructive",
                variant === "default" && "bg-primary"
              )} />
            </div>
            
            <div>
              <p className="text-xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              {stat.sublabel && (
                <p className={cn(
                  "text-xs mt-0.5",
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
