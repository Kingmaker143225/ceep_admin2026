

// AdminSidebar.jsx
import { Link, useLocation } from "wouter";
import {
  LayoutDashboard,
  FileText,
  CreditCard,
   Download,
  Ticket,
  LogOut,
  Menu,
  X,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const AdminSidebar = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/";
  };

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/applications", label: "Applications", icon: FileText },
    { path: "/payments", label: "Payments", icon: CreditCard },
    // { path: "/halltickets", label: "Hall Tickets", icon: Ticket },
    // { path: "/downloads", label: "Downloads", icon: Download },
  ];

  const isActive = (path) => location === path;

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md text-blue-900"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-slate-900 to-slate-800 
          text-white shadow-2xl z-40 transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo Section */}
        <div className="px-6 py-6 border-b border-slate-700/50 bg-slate-900/50">
          <div className="flex items-center gap-2">
           <img
  src="/left-logo.png"
  alt="CEEP-2026 Logo"
  className="w-12 h-12 object-contain"
/>
            <div>
              <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                CEEP-2026
              </h1>
              <p className="text-slate-400 text-xs font-medium">Government Admin Portal</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="p-4 space-y-2 mt-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link key={item.path} href={item.path}>
                <div
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
                    transition-all duration-200 group
                    ${active 
                      ? "bg-emerald-600/20 text-emerald-300 border-r-2 border-emerald-400" 
                      : "hover:bg-slate-800/50 text-slate-300 hover:text-white"
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 ${active ? "text-emerald-400" : "group-hover:text-emerald-400"}`} />
                  <span className="font-medium text-sm tracking-wide">{item.label}</span>
                  {active && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700/50 bg-slate-900/30">
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-300 hover:text-red-200 transition-all duration-200 border border-red-500/20 hover:border-red-500/40"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium text-sm">Logout</span>
          </button>
          <div className="mt-4 text-center">
            <p className="text-slate-500 text-[10px]">Government of Telangana</p>
            <p className="text-slate-600 text-[9px]">© {new Date().getFullYear()} CEEP-2026</p>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default AdminSidebar;