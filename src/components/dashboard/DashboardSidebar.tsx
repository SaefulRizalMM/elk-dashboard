import { Activity, Users, ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { Shield } from "lucide-react";

interface SubNavItem {
  label: string;
  path: string;
}

interface NavItem {
  icon: React.ElementType;
  label: string;
  path?: string;
  subItems?: SubNavItem[];
}

const navItems: NavItem[] = [
  { 
    icon: Activity, 
    label: "Monitoring Transaksional",
    subItems: [
      { label: "Main Dashboard", path: "/" },
      { label: "Access By KAI Dashboard", path: "/access-by-kai" },
      { label: "B2B Service Dashboard", path: "/b2b-service" },
      { label: "Loket Service Dashboard", path: "/loket-service" },
      { label: "KCI Service Dashboard", path: "/kci-service" },
    ]
  },
  { icon: Users, label: "User & Security", path: "/user-security" },
];

export function DashboardSidebar() {
  const location = useLocation();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const [expandedItems, setExpandedItems] = useState<string[]>(["Monitoring Transaksional"]);

  const toggleExpand = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const isSubItemActive = (item: NavItem) => {
    if (item.subItems) {
      return item.subItems.some(sub => sub.path === location.pathname);
    }
    return item.path === location.pathname;
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
            <Activity className="w-5 h-5 text-primary-foreground" />
          </div>
          {!isCollapsed && (
            <span className="text-sidebar-primary font-semibold text-lg">
              KAI RTS Monitoring
            </span>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  {item.subItems ? (
                    <div>
                      <SidebarMenuButton
                        onClick={() => toggleExpand(item.label)}
                        isActive={isSubItemActive(item)}
                        tooltip={item.label}
                      >
                        <item.icon className="w-5 h-5" />
                        {!isCollapsed && (
                          <>
                            <span className="flex-1 text-left">{item.label}</span>
                            {expandedItems.includes(item.label) ? (
                              <ChevronDown className="w-4 h-4" />
                            ) : (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </>
                        )}
                      </SidebarMenuButton>
                      
                      {/* Sub Items */}
                      {!isCollapsed && expandedItems.includes(item.label) && (
                        <ul className="mt-1 ml-4 pl-4 border-l border-sidebar-border space-y-1">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.path}>
                              <NavLink
                                to={subItem.path}
                                className={({ isActive }) => cn(
                                  "block px-3 py-2 rounded-md text-sm transition-all duration-200",
                                  isActive
                                    ? "bg-sidebar-accent/70 text-sidebar-accent-foreground font-medium"
                                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent/30 hover:text-sidebar-accent-foreground"
                                )}
                              >
                                {subItem.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <SidebarMenuButton asChild isActive={item.path === location.pathname} tooltip={item.label}>
                      <NavLink to={item.path || "/"}>
                        <item.icon className="w-5 h-5" />
                        {!isCollapsed && <span>{item.label}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-2 py-2">
          <Shield className="w-5 h-5 text-sidebar-foreground shrink-0" />
          {!isCollapsed && (
            <span className="text-sm text-sidebar-foreground">Secure Connection</span>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
