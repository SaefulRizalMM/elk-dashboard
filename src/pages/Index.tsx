import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { ConversionFunnel } from "@/components/dashboard/ConversionFunnel";
import { TransactionChart } from "@/components/dashboard/TransactionChart";
import { TransactionSummary } from "@/components/dashboard/TransactionSummary";
import { ChannelTable } from "@/components/dashboard/ChannelTable";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      
      <main className="flex-1 p-8 overflow-auto">
        <DashboardHeader />
        
        {/* Top Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard
            title="Total Get Schadule Hits"
            stats={[
              { value: "1,032,578", label: "Access By KAI", sublabel: "Success : 83.92%", success: true },
              { value: "7,257", label: "Ibook", sublabel: "Success : 83.92%", success: true },
            ]}
            variant="success"
          />
          <StatCard
            title="Total Get Schadule Hits"
            stats={[
              { value: "1,032,578", label: "Access By KAI", sublabel: "Success : 83.92%", success: true },
              { value: "7257", label: "Ibook", sublabel: "Success : 83.92%", success: true },
            ]}
            variant="success"
          />
          <StatCard
            title="Total Payment Hits"
            stats={[
              { value: "1,032,578", label: "Total Payment Hits", sublabel: "Success : 99.58%", success: true },
            ]}
            variant="success"
          />
          <StatCard
            title="Bussiness Logic Payment"
            stats={[
              { value: "0.07%", label: "Bussines Logic rejected", sublabel: "Reject Count: 33", success: false },
            ]}
            variant="danger"
          />
        </div>

        {/* Second Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard
            title="No Schadule"
            stats={[
              { value: "1,032,578", label: "Access By KAI", sublabel: "Success : 83.92%", success: true },
              { value: "7,257", label: "Ibook", sublabel: "Success : 83.92%", success: true },
            ]}
            variant="success"
          />
          <StatCard
            title="Bussiness Logic Rejected Booking"
            stats={[
              { value: "85.57%", label: "Access By KAI", sublabel: "Reject Count: 378", success: false },
              { value: "73.17%", label: "Ibook", sublabel: "Reject Count: 378", success: false },
            ]}
            variant="warning"
          />
          <StatCard
            title="Failure Rate Get Schadule"
            stats={[
              { value: "0.11%", label: "Total Payment Hits", sublabel: "Fail Count: 60", success: false },
            ]}
            variant="warning"
          />
          <StatCard
            title="Bussiness Logic Payment"
            stats={[
              { value: "0.07%", label: "Bussines Logic rejected", sublabel: "Reject Count: 33", success: false },
            ]}
            variant="danger"
          />
        </div>

        {/* Conversion Funnel */}
        <div className="mb-6">
          <ConversionFunnel />
        </div>

        {/* Transaction Chart */}
        <div className="mb-6">
          <TransactionChart />
        </div>

        {/* Bottom Section */}
        <div className="flex gap-6">
          <TransactionSummary />
          <ChannelTable />
        </div>
      </main>
    </div>
  );
};

export default Index;
