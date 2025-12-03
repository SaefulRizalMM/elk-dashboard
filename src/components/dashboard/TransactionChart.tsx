import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const data = [
  { month: "Jan", value: 25000 },
  { month: "Feb", value: 32000 },
  { month: "Mar", value: 28000 },
  { month: "Apr", value: 45000 },
  { month: "May", value: 38000 },
  { month: "Jun", value: 52000 },
  { month: "Jul", value: 48000 },
  { month: "Aug", value: 42000 },
  { month: "Sep", value: 38000 },
  { month: "Oct", value: 35000 },
  { month: "Nov", value: 32000 },
  { month: "Dec", value: 30000 },
];

const filters = ["All", "Today", "Yesterday"];

export function TransactionChart() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  return (
    <div className="bg-card rounded-xl p-6 card-shadow animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Dashboard Transaksi</h3>
        
        <div className="flex items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              {filter}
            </button>
          ))}
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-muted-foreground rounded-md border border-border hover:bg-muted transition-colors">
            <Calendar className="w-3.5 h-3.5" />
            <span>2025-09-09 to 2026-01-01</span>
          </button>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" vertical={false} />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000}K`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(0, 0%, 100%)',
                border: '1px solid hsl(220, 13%, 91%)',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              }}
              formatter={(value: number) => [value.toLocaleString(), 'Transactions']}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="hsl(199, 89%, 48%)"
              strokeWidth={2}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
