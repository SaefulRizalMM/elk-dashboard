import { ArrowDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ChannelData {
  metrics: string;
  currentMonth: string;
  date: string;
  previousMonth: string;
  action: string;
}

const channelData: ChannelData[] = [
  { metrics: "B2b", currentMonth: "420.842", date: "14 Apr 2022", previousMonth: "420.842", action: "-100.000" },
  { metrics: "POS", currentMonth: "100.000", date: "05 Apr 2022", previousMonth: "420.842", action: "-100.000" },
  { metrics: "Mobile Apps", currentMonth: "244.202", date: "02 Apr 2022", previousMonth: "420.842", action: "-100.000" },
];

export function ChannelTable() {
  return (
    <div className="bg-card rounded-xl p-6 card-shadow animate-fade-in flex-1">
      <h3 className="text-lg font-semibold text-foreground mb-4">Channel</h3>
      
      <Table>
        <TableHeader>
          <TableRow className="border-border hover:bg-transparent">
            <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Metrics</TableHead>
            <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Current Month</TableHead>
            <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Date</TableHead>
            <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Previous Month</TableHead>
            <TableHead className="text-xs font-medium text-muted-foreground uppercase tracking-wider text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {channelData.map((row, index) => (
            <TableRow 
              key={index} 
              className="border-border hover:bg-muted/50 transition-colors"
            >
              <TableCell className="font-medium text-foreground">{row.metrics}</TableCell>
              <TableCell className="text-foreground">{row.currentMonth}</TableCell>
              <TableCell className="text-muted-foreground">{row.date}</TableCell>
              <TableCell className="text-foreground">{row.previousMonth}</TableCell>
              <TableCell className="text-right">
                <span className="inline-flex items-center gap-1 text-destructive font-medium">
                  {row.action}
                  <ArrowDown className="w-3 h-3" />
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
