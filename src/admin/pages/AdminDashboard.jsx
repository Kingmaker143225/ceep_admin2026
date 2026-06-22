
// // AdminDashboard.jsx
// import { Link } from "wouter";
// import AdminLayout from "../components/AdminLayout";
// import {
//   FileText,
//   CreditCard,
//   Ticket,
//   Users,
//   TrendingUp,
//   Clock,
//   CheckCircle,
//   XCircle,
//   Eye,
//   Download,
// } from "lucide-react";

// const AdminDashboard = () => {
//   // Mock data - replace with API calls
//   const stats = {
//     totalApplications: 1247,
//     pendingVerification: 43,
//     approvedApplications: 1082,
//     rejectedApplications: 122,
//     totalPayments: 982,
//     paymentAmount: "₹12,84,500",
//     hallTicketsGenerated: 892,
//     hallTicketsPending: 355,
//   };

//   const recentApplications = [
//     { id: "APP-2024-001", name: "Rajesh Kumar", course: "ECE", date: "2024-01-15", status: "pending" },
//     { id: "APP-2024-002", name: "Priya Sharma", course: "CSE", date: "2024-01-14", status: "approved" },
//     { id: "APP-2024-003", name: "Amit Patel", course: "MECH", date: "2024-01-14", status: "pending" },
//     { id: "APP-2024-004", name: "Sneha Reddy", course: "CSE", date: "2024-01-13", status: "approved" },
//     { id: "APP-2024-005", name: "Vikram Singh", course: "ECE", date: "2024-01-13", status: "rejected" },
//   ];

//   const getStatusBadge = (status) => {
//     switch(status) {
//       case 'approved':
//         return <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">Approved</span>;
//       case 'rejected':
//         return <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-700">Rejected</span>;
//       default:
//         return <span className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-700">Pending</span>;
//     }
//   };

//   return (
//     <AdminLayout>
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
//         <p className="text-slate-500 mt-1">Welcome back! Here's what's happening with your applications today.</p>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         {/* Total Applications */}
//         <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
//           <div className="flex items-center justify-between mb-4">
//             <div className="p-2 bg-blue-100 rounded-lg">
//               <FileText className="w-6 h-6 text-blue-600" />
//             </div>
//             <span className="text-2xl font-bold text-slate-800">{stats.totalApplications}</span>
//           </div>
//           <h3 className="text-slate-600 font-medium">Total Applications</h3>
//           <p className="text-sm text-slate-400 mt-1">All time submissions</p>
//         </div>

//         {/* Pending Verification */}
//         <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
//           <div className="flex items-center justify-between mb-4">
//             <div className="p-2 bg-amber-100 rounded-lg">
//               <Clock className="w-6 h-6 text-amber-600" />
//             </div>
//             <span className="text-2xl font-bold text-slate-800">{stats.pendingVerification}</span>
//           </div>
//           <h3 className="text-slate-600 font-medium">Pending Verification</h3>
//           <p className="text-sm text-slate-400 mt-1">Need your attention</p>
//         </div>

//         {/* Payments Collected */}
//         <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
//           <div className="flex items-center justify-between mb-4">
//             <div className="p-2 bg-emerald-100 rounded-lg">
//               <CreditCard className="w-6 h-6 text-emerald-600" />
//             </div>
//             <span className="text-2xl font-bold text-slate-800">{stats.totalPayments}</span>
//           </div>
//           <h3 className="text-slate-600 font-medium">Payments Received</h3>
//           <p className="text-sm text-slate-400 mt-1">{stats.paymentAmount} collected</p>
//         </div>

//         {/* Hall Tickets */}
//         <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
//           <div className="flex items-center justify-between mb-4">
//             <div className="p-2 bg-purple-100 rounded-lg">
//               <Ticket className="w-6 h-6 text-purple-600" />
//             </div>
//             <span className="text-2xl font-bold text-slate-800">{stats.hallTicketsGenerated}</span>
//           </div>
//           <h3 className="text-slate-600 font-medium">Hall Tickets</h3>
//           <p className="text-sm text-slate-400 mt-1">{stats.hallTicketsPending} pending generation</p>
//         </div>
//       </div>

//       {/* Second Row Stats - Detailed */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//         {/* Application Status Breakdown */}
//         <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
//           <h3 className="text-lg font-semibold text-slate-800 mb-4">Application Status</h3>
//           <div className="space-y-4">
//             <div>
//               <div className="flex justify-between text-sm mb-1">
//                 <span className="text-slate-600">Approved</span>
//                 <span className="font-semibold text-emerald-600">{stats.approvedApplications}</span>
//               </div>
//               <div className="w-full bg-slate-100 rounded-full h-2">
//                 <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${(stats.approvedApplications / stats.totalApplications) * 100}%` }}></div>
//               </div>
//             </div>
//             <div>
//               <div className="flex justify-between text-sm mb-1">
//                 <span className="text-slate-600">Pending</span>
//                 <span className="font-semibold text-amber-600">{stats.pendingVerification}</span>
//               </div>
//               <div className="w-full bg-slate-100 rounded-full h-2">
//                 <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${(stats.pendingVerification / stats.totalApplications) * 100}%` }}></div>
//               </div>
//             </div>
//             <div>
//               <div className="flex justify-between text-sm mb-1">
//                 <span className="text-slate-600">Rejected</span>
//                 <span className="font-semibold text-red-600">{stats.rejectedApplications}</span>
//               </div>
//               <div className="w-full bg-slate-100 rounded-full h-2">
//                 <div className="bg-red-500 h-2 rounded-full" style={{ width: `${(stats.rejectedApplications / stats.totalApplications) * 100}%` }}></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Quick Actions */}
//         <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
//           <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Actions</h3>
//           <div className="grid grid-cols-2 gap-3">
//             <Link href="/applications">
//               <div className="p-4 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition text-center">
//                 <Eye className="w-5 h-5 text-blue-600 mx-auto mb-2" />
//                 <p className="text-sm font-medium text-blue-700">Review Applications</p>
//               </div>
//             </Link>
//             <Link href="/payments">
//               <div className="p-4 bg-emerald-50 rounded-lg cursor-pointer hover:bg-emerald-100 transition text-center">
//                 <CreditCard className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
//                 <p className="text-sm font-medium text-emerald-700">Verify Payments</p>
//               </div>
//             </Link>
//             <Link href="/downloads">
//               <div className="p-4 bg-purple-50 rounded-lg cursor-pointer hover:bg-purple-100 transition text-center">
//                 <Download className="w-5 h-5 text-purple-600 mx-auto mb-2" />
//                 <p className="text-sm font-medium text-purple-700">Generate Hall Tickets</p>
//               </div>
//             </Link>
//             <div className="p-4 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition text-center">
//               <TrendingUp className="w-5 h-5 text-slate-600 mx-auto mb-2" />
//               <p className="text-sm font-medium text-slate-700">View Reports</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Recent Applications Table */}
//       <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
//         <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
//           <h3 className="text-lg font-semibold text-slate-800">Recent Applications</h3>
//           <Link href="/applications">
//             <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All →</button>
//           </Link>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-slate-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Application ID</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Student Name</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Course</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-200">
//               {recentApplications.map((app) => (
//                 <tr key={app.id} className="hover:bg-slate-50 transition">
//                   <td className="px-6 py-4 text-sm font-medium text-slate-900">{app.id}</td>
//                   <td className="px-6 py-4 text-sm text-slate-600">{app.name}</td>
//                   <td className="px-6 py-4 text-sm text-slate-600">{app.course}</td>
//                   <td className="px-6 py-4 text-sm text-slate-600">{app.date}</td>
//                   <td className="px-6 py-4">{getStatusBadge(app.status)}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </AdminLayout>
//   );
// };

// export default AdminDashboard;


















// AdminDashboard.jsx
import { Link } from "wouter";
import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import {
  FileText,
  CreditCard,
  Ticket,
  TrendingUp,
  Clock,
  Eye,
  Download,
} from "lucide-react";
import supabase from "../../lib/supabase";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalApplications: 0,
    pendingPayments: 0,
    paidPayments: 0,
    totalPaymentAmount: 0,
    hallTicketsGenerated: 0,
  });

  const [recentApplications, setRecentApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Format currency in Indian format
  const formatIndianCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Fetch all dashboard data
  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch applications data
      const { data: applications, error: appError } = await supabase
        .from('applications')
        .select('*', { count: 'exact' });

      if (appError) throw appError;

      // Fetch fee_payments data
      const { data: feePayments, error: paymentError } = await supabase
        .from('fee_payments')
        .select('payment_status, amount');

      if (paymentError) throw paymentError;

      // Fetch hall_tickets data
      const { data: hallTickets, error: hallError } = await supabase
        .from('hall_tickets')
        .select('id', { count: 'exact' });

      if (hallError) throw hallError;

      // Calculate statistics
      const totalApps = applications?.length || 0;
      
      // Payment statistics
      const paidPaymentsList = feePayments?.filter(payment => payment.payment_status === 'PAID') || [];
      const pendingPaymentsList = feePayments?.filter(payment => payment.payment_status === 'PENDING') || [];
      
      const paidCount = paidPaymentsList.length;
      const pendingCount = pendingPaymentsList.length;
      const totalAmount = paidPaymentsList.reduce((sum, payment) => sum + (payment.amount || 0), 0);
      
      // Hall tickets generated
      const hallTicketsGen = hallTickets?.length || 0;

      // Get recent applications (last 5)
      const recent = applications
        ?.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 5) || [];

      setStats({
        totalApplications: totalApps,
        pendingPayments: pendingCount,
        paidPayments: paidCount,
        totalPaymentAmount: totalAmount,
        hallTicketsGenerated: hallTicketsGen,
      });

      setRecentApplications(recent);
      setError(null);
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      setError('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  // Set up real-time subscriptions
  useEffect(() => {
    // Initial fetch
    fetchDashboardData();

    // Subscribe to applications table changes
    const applicationsSubscription = supabase
      .channel('applications_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'applications',
        },
        () => {
          console.log('Applications changed, refreshing data...');
          fetchDashboardData();
        }
      )
      .subscribe();

    // Subscribe to fee_payments table changes
    const feePaymentsSubscription = supabase
      .channel('fee_payments_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'fee_payments',
        },
        () => {
          console.log('Fee payments changed, refreshing data...');
          fetchDashboardData();
        }
      )
      .subscribe();

    // Subscribe to hall_tickets table changes
    const hallTicketsSubscription = supabase
      .channel('hall_tickets_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'hall_tickets',
        },
        () => {
          console.log('Hall tickets changed, refreshing data...');
          fetchDashboardData();
        }
      )
      .subscribe();

    // Cleanup subscriptions on component unmount
    return () => {
      applicationsSubscription.unsubscribe();
      feePaymentsSubscription.unsubscribe();
      hallTicketsSubscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-slate-600">Loading dashboard data...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-red-600">{error}</p>
          <button 
            onClick={fetchDashboardData}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-slate-500 mt-1">Welcome back! Here's what's happening with your applications today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Applications */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-2xl font-bold text-slate-800">{stats.totalApplications}</span>
          </div>
          <h3 className="text-slate-600 font-medium">Total Applications</h3>
          <p className="text-sm text-slate-400 mt-1">All time submissions</p>
        </div>

        {/* Paid Payments */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <CreditCard className="w-6 h-6 text-emerald-600" />
            </div>
            <span className="text-2xl font-bold text-slate-800">{stats.paidPayments}</span>
          </div>
          <h3 className="text-slate-600 font-medium">Paid Payments</h3>
          <p className="text-sm text-slate-400 mt-1">{formatIndianCurrency(stats.totalPaymentAmount)} collected</p>
        </div>

        {/* Pending Payments */}
        {/* <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-amber-100 rounded-lg">
              <Clock className="w-6 h-6 text-amber-600" />
            </div>
            <span className="text-2xl font-bold text-slate-800">{stats.pendingPayments}</span>
          </div>
          <h3 className="text-slate-600 font-medium">Pending Payments</h3>
          <p className="text-sm text-slate-400 mt-1">Awaiting confirmation</p>
        </div> */}

        {/* Hall Tickets */}
        {/* <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Ticket className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-2xl font-bold text-slate-800">{stats.hallTicketsGenerated}</span>
          </div>
          <h3 className="text-slate-600 font-medium">Hall Tickets</h3>
          <p className="text-sm text-slate-400 mt-1">Generated tickets</p>
        </div> */}
      </div>

      {/* Second Row Stats - Detailed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Payment Status Breakdown */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Payment Status</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-600">Paid</span>
                <span className="font-semibold text-emerald-600">{stats.paidPayments}</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ 
                  width: `${(stats.paidPayments + stats.pendingPayments) ? (stats.paidPayments / (stats.paidPayments + stats.pendingPayments)) * 100 : 0}%` 
                }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-600">Pending</span>
                <span className="font-semibold text-amber-600">{stats.pendingPayments}</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ 
                  width: `${(stats.paidPayments + stats.pendingPayments) ? (stats.pendingPayments / (stats.paidPayments + stats.pendingPayments)) * 100 : 0}%` 
                }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/applications">
              <div className="p-4 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition text-center">
                <Eye className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-blue-700">View Applications</p>
              </div>
            </Link>
            <Link href="/payments">
              <div className="p-4 bg-emerald-50 rounded-lg cursor-pointer hover:bg-emerald-100 transition text-center">
                <CreditCard className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-emerald-700">Manage Payments</p>
              </div>
            </Link>
            {/* <Link href="/halltickets">
              <div className="p-4 bg-purple-50 rounded-lg cursor-pointer hover:bg-purple-100 transition text-center">
                <Download className="w-5 h-5 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-purple-700">Hall Tickets</p>
              </div>
            </Link> */}
            <div className="p-4 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition text-center">
              <TrendingUp className="w-5 h-5 text-slate-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-700">View Reports</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Applications Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-800">Recent Applications</h3>
          <Link href="/applications">
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All →</button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Reg. Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Candidate Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Mobile</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Branch</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {recentApplications.map((app) => (
                <tr key={app.id} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 text-sm font-mono font-medium text-slate-900">{app.registration_number}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    <div className="font-medium">{app.candidate_name}</div>
                    <div className="text-xs text-slate-400">{app.email}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{app.mobile_number}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{app.branch_entrance || app.branch_degree}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{new Date(app.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
              {recentApplications.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-slate-500">
                    No applications found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;