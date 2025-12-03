import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SummaryCard {
  label: string;
  value: string;
  type: "success" | "danger";
}

const summaryData: SummaryCard[] = [
  { label: "Transaksi Berhasil", value: "10.003", type: "success" },
  { label: "Transaksi Gagal", value: "90.000", type: "danger" },
];

export function TransactionSummary() {
  return (
    <div className="space-y-4">
      {summaryData.map((item, index) => (
        <div 
          key={index}
          className="bg-card rounded-xl p-5 card-shadow animate-fade-in flex items-center gap-4"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center",
            item.type === "success" ? "bg-primary/10" : "bg-destructive/10"
          )}>
            {item.type === "success" ? (
              <TrendingUp className="w-6 h-6 text-primary" />
            ) : (
              <TrendingDown className="w-6 h-6 text-destructive" />
            )}
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground">{item.label}</p>
            <p className={cn(
              "text-2xl font-bold",
              item.type === "success" ? "text-foreground" : "text-foreground"
            )}>
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
