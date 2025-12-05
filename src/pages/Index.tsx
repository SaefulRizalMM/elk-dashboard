import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { ConversionFunnel } from "@/components/dashboard/ConversionFunnel";
import { TransactionChart } from "@/components/dashboard/TransactionChart";
import { TransactionSummary } from "@/components/dashboard/TransactionSummary";
import { ChannelTable } from "@/components/dashboard/ChannelTable";
import { useLocation } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Index = () => {
  const location = useLocation();
  const showIbook = location.pathname === "/access-by-kai";

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <DashboardSidebar />
        
        <main className="flex-1 p-8 overflow-auto">
          <div className="flex items-center gap-4 mb-4">
            <SidebarTrigger className="h-8 w-8" />
          </div>
        <DashboardHeader />
        
        {/* Row 1 - Total Hits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
          <StatCard
            title="Total Getschedule Hits"
            stats={showIbook ? [
              { value: "1,032,578", label: "Access By KAI" },
              { value: "7,257", label: "Ibook" },
            ] : [
              { value: "1,032,578" },
            ]}
            variant="info"
          />
          <StatCard
            title="Total Booking Hits"
            stats={showIbook ? [
              { value: "441,431", label: "Access By KAI" },
              { value: "518", label: "Ibook" },
            ] : [
              { value: "441,431" },
            ]}
            variant="default"
          />
          <StatCard
            title="Total Payment Hits"
            stats={[
              { value: "44,550", label: showIbook ? "Total Payment Request" : undefined },
            ]}
            variant="success"
          />
        </div>

        {/* Row 2 - Success */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
          <StatCard
            title="Success Getschedule"
            stats={showIbook ? [
              { value: "69.72%", label: "Access By KAI", countLabel: "Success count", countValue: "719,961", success: true },
              { value: "61.17%", label: "Ibook", countLabel: "Success count", countValue: "4,439", success: true },
            ] : [
              { value: "69.72%", countLabel: "Success count", countValue: "719,961", success: true },
            ]}
            variant="info"
          />
          <StatCard
            title="Success Booking"
            stats={showIbook ? [
              { value: "13.98%", label: "Access By KAI", countLabel: "Success count", countValue: "61,727", success: true },
              { value: "26.83%", label: "Ibook", countLabel: "Success count", countValue: "139", success: true },
            ] : [
              { value: "13.98%", countLabel: "Success count", countValue: "61,727", success: true },
            ]}
            variant="default"
          />
          <StatCard
            title="Success Payment"
            stats={[
              { value: "99.58%", label: showIbook ? "rate" : undefined, countLabel: "Success count", countValue: "44,362", success: true },
            ]}
            variant="success"
          />
        </div>

        {/* Row 3 - No Schedule / Rejected */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
          <StatCard
            title="No Schedule"
            stats={showIbook ? [
              { value: "9.33%", label: "Access By KAI", countLabel: "No Schedule", countValue: "96,301", success: false },
              { value: "52.14%", label: "Ibook", countLabel: "No Schedule", countValue: "3,784", success: false },
            ] : [
              { value: "9.33%", countLabel: "No Schedule", countValue: "96,301", success: false },
            ]}
            variant="info"
          />
          <StatCard
            title="Bussiness Logic Rejected Booking"
            stats={showIbook ? [
              { value: "85.57%", label: "Access By KAI", countLabel: "reject count", countValue: "377,754", success: false },
              { value: "73.17%", label: "Ibook", countLabel: "reject count", countValue: "379", success: false },
            ] : [
              { value: "85.57%", countLabel: "reject count", countValue: "377,754", success: false },
            ]}
            variant="default"
          />
          <StatCard
            title="Bussiness Logic Rejected Payment"
            stats={[
              { value: "0.07%", label: showIbook ? "Business Logic Rejected" : undefined, countLabel: "reject count", countValue: "33", success: false },
            ]}
            variant="success"
          />
        </div>

        {/* Row 4 - Failure Rate */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
          <StatCard
            title="Failure Rate Getschedule"
            stats={showIbook ? [
              { value: "0.001%", label: "Access By KAI", countLabel: "fail count", countValue: "15", success: false },
              { value: "0.000%", label: "Ibook", countLabel: "fail count", countValue: "-", success: false },
            ] : [
              { value: "0.001%", countLabel: "fail count", countValue: "15", success: false },
            ]}
            variant="info"
          />
          <StatCard
            title="Failure Rate Booking"
            stats={showIbook ? [
              { value: "0.002%", label: "Access By KAI", countLabel: "fail count", countValue: "7", success: false },
              { value: "0.193%", label: "Ibook", countLabel: "fail count", countValue: "1", success: false },
            ] : [
              { value: "0.002%", countLabel: "fail count", countValue: "7", success: false },
            ]}
            variant="default"
          />
          <StatCard
            title="Failure Rate Getschedule"
            stats={[
              { value: "0.11%", label: showIbook ? "Failure rate Payment" : undefined, countLabel: "fail count", countValue: "50", success: false },
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
    </SidebarProvider>
  );
};

export default Index;
