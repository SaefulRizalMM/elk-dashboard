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
        
        {/* Row 1 - Total Hits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
          <StatCard
            title="Total Getschedule Hits"
            stats={[
              { value: "1,032,578", label: "Access By KAI" },
              { value: "7,257", label: "Ibook" },
            ]}
            variant="info"
          />
          <StatCard
            title="Total Booking Hits"
            stats={[
              { value: "441,431", label: "Access By KAI" },
              { value: "518", label: "Ibook" },
            ]}
            variant="default"
          />
          <StatCard
            title="Total Payment Hits"
            stats={[
              { value: "44,550", label: "Total Payment Request" },
            ]}
            variant="success"
          />
        </div>

        {/* Row 2 - Success */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
          <StatCard
            title="Success Getschedule"
            stats={[
              { value: "69.72%", label: "Access By KAI", countLabel: "Success count", countValue: "719,961", success: true },
              { value: "61.17%", label: "Ibook", countLabel: "Success count", countValue: "4,439", success: true },
            ]}
            variant="info"
          />
          <StatCard
            title="Success Booking"
            stats={[
              { value: "13.98%", label: "Access By KAI", countLabel: "Success count", countValue: "61,727", success: true },
              { value: "26.83%", label: "Ibook", countLabel: "Success count", countValue: "139", success: true },
            ]}
            variant="default"
          />
          <StatCard
            title="Success Payment"
            stats={[
              { value: "99.58%", label: "rate", countLabel: "Success count", countValue: "44,362", success: true },
            ]}
            variant="success"
          />
        </div>

        {/* Row 3 - No Schedule / Rejected */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
          <StatCard
            title="No Schedule"
            stats={[
              { value: "9.33%", label: "Access By KAI", countLabel: "No Schedule", countValue: "96,301", success: false },
              { value: "52.14%", label: "Ibook", countLabel: "No Schedule", countValue: "3,784", success: false },
            ]}
            variant="info"
          />
          <StatCard
            title="Bussiness Logic Rejected Booking"
            stats={[
              { value: "85.57%", label: "Access By KAI", countLabel: "reject count", countValue: "377,754", success: false },
              { value: "73.17%", label: "Ibook", countLabel: "reject count", countValue: "379", success: false },
            ]}
            variant="default"
          />
          <StatCard
            title="Bussiness Logic Rejected Payment"
            stats={[
              { value: "0.07%", label: "Business Logic Rejected", countLabel: "reject count", countValue: "33", success: false },
            ]}
            variant="success"
          />
        </div>

        {/* Row 4 - Failure Rate */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
          <StatCard
            title="Failure Rate Getschedule"
            stats={[
              { value: "0.001%", label: "Access By KAI", countLabel: "fail count", countValue: "15", success: false },
              { value: "0.000%", label: "Ibook", countLabel: "fail count", countValue: "-", success: false },
            ]}
            variant="info"
          />
          <StatCard
            title="Failure Rate Booking"
            stats={[
              { value: "0.002%", label: "Access By KAI", countLabel: "fail count", countValue: "7", success: false },
              { value: "0.193%", label: "Ibook", countLabel: "fail count", countValue: "1", success: false },
            ]}
            variant="default"
          />
          <StatCard
            title="Failure Rate Getschedule"
            stats={[
              { value: "0.11%", label: "Failure rate Payment", countLabel: "fail count", countValue: "50", success: false },
            ]}
            variant="success"
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
