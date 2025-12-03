import { Bell, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Hai, Welcome Admin
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Monitor your enterprise transactions in real-time
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-muted transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
        </button>
        <button className="p-2 rounded-lg hover:bg-muted transition-colors">
          <Settings className="w-5 h-5 text-muted-foreground" />
        </button>
        <Avatar className="w-10 h-10 border-2 border-primary/20">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" />
          <AvatarFallback className="bg-primary text-primary-foreground">AD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
