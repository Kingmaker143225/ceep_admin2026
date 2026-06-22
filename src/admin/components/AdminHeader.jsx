

// AdminHeader.jsx
import { useState } from "react";
import { Bell, ChevronDown, LogOut, Shield } from "lucide-react";

const AdminHeader = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/";
  };

  // Mock admin data - replace with actual from context/state
  const adminName = "Admin User";
  const adminRole = "Chief Administrator";

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Page Title - Can be dynamic based on route */}
        <div className="hidden lg:block">
          <h1 className="text-xl font-semibold text-slate-800">Welcome back,</h1>
          <p className="text-sm text-slate-500">Manage applications and payments</p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 ml-auto lg:ml-0">
          {/* Notifications */}
          {/* <button className="relative p-2 rounded-full hover:bg-slate-100 transition-colors"> */}
            {/* <Bell className="w-5 h-5 text-slate-600" /> */}
            {/* <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span> */}
          {/* </button> */}

          {/* Admin Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white">
                <Shield className="w-4 h-4" />
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-slate-700">{adminName}</p>
                <p className="text-xs text-slate-500">{adminRole}</p>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${showUserMenu ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {showUserMenu && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowUserMenu(false)}
                />
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-20">
                  <button
                    onClick={logout}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm font-medium">Logout</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;