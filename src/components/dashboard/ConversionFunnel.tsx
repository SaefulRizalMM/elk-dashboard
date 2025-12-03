interface FunnelStep {
  value: number;
  percentage: string;
  color: string;
}

const funnelData: FunnelStep[] = [
  { value: 804, percentage: "100%", color: "#f97316" },
  { value: 676, percentage: "84.1%", color: "#eab308" },
  { value: 456, percentage: "30.9%", color: "#14b8a6" },
  { value: 420, percentage: "70.3%", color: "#06b6d4" },
  { value: 408, percentage: "25.9%", color: "#6366f1" },
];

export function ConversionFunnel() {
  const maxValue = Math.max(...funnelData.map(d => d.value));
  
  return (
    <div className="bg-card rounded-xl p-6 card-shadow animate-fade-in">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Konversi</h3>
        <p className="text-sm text-muted-foreground">Getschedule ke payment</p>
      </div>
      
      <div className="relative h-52">
        <div className="absolute inset-0 flex items-end gap-2">
          {funnelData.map((step, index) => {
            const heightPercent = (step.value / maxValue) * 100;
            return (
              <div 
                key={index} 
                className="flex-1 flex flex-col h-full justify-end"
              >
                <div 
                  className="w-full rounded-t-lg transition-all duration-700 ease-out"
                  style={{ 
                    height: `${heightPercent}%`,
                    backgroundColor: step.color,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="flex gap-2 mt-4 pt-3 border-t border-border">
        {funnelData.map((step, index) => (
          <div key={index} className="flex-1 text-center">
            <p className="text-sm font-semibold text-foreground">{step.value}</p>
            <p className="text-xs text-muted-foreground">({step.percentage})</p>
          </div>
        ))}
      </div>
    </div>
  );
}
