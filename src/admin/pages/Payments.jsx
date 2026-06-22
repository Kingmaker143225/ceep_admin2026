

import {
  useEffect,
  useState
} from "react";
import supabase
from "../../lib/supabase";
import AdminLayout
from "../components/AdminLayout";

const Payments = () => {

  

  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterColumn, setFilterColumn] = useState("all");
  const [filteredPayments, setFilteredPayments] = useState([]);

  /*
  |--------------------------------------------------------------------------
  | CHECK AUTH
  |--------------------------------------------------------------------------
  */

  
useEffect(() => {

  fetchPayments();

}, []);



  /*
  |--------------------------------------------------------------------------
  | FETCH PAYMENTS
  |--------------------------------------------------------------------------
  */

const fetchPayments = async () => {

  try {

    const {

      data,

      error

    } = await supabase

      .from("fee_payments")

      .select("*")

      .order(
        "created_at",
        {
          ascending: false
        }
      );

    console.log(
      "PAYMENTS =>",
      data
    );

    if (error) {

      console.log(error);

      alert(
        "Failed to fetch payments"
      );

      return;

    }

    setPayments(data);

    setFilteredPayments(data);

  }

  catch (err) {

    console.error(err);

    alert(
      "Failed to load payments"
    );

  }

  finally {

    setLoading(false);

  }

};


  

  /*
  |--------------------------------------------------------------------------
  | FILTER LOGIC
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredPayments(payments);
      return;
    }

    const searchLower = searchTerm.toLowerCase();
    
    const filtered = payments.filter((payment) => {
      
      if (filterColumn === "all") {
        return (
          payment.candidate_name?.toLowerCase().includes(searchLower) ||
          payment.payment_reference_id?.toLowerCase().includes(searchLower) ||
          payment.mobile_number?.toLowerCase().includes(searchLower) ||
          payment.hall_ticket_no?.toLowerCase().includes(searchLower) ||
          payment.payment_mode?.toLowerCase().includes(searchLower) ||
          payment.payment_status?.toLowerCase().includes(searchLower) ||
          payment.created_at?.toLowerCase().includes(searchLower) ||
          payment.email?.toLowerCase().includes(searchLower)
        );
      }
      
      if (filterColumn === "candidate") {
        return payment.candidate_name?.toLowerCase().includes(searchLower);
      }
      
      if (filterColumn === "payment_ref") {
        return payment.payment_reference_id?.toLowerCase().includes(searchLower);
      }
      
      if (filterColumn === "mobile") {
        return payment.mobile_number?.toLowerCase().includes(searchLower);
      }
      
      if (filterColumn === "hall_ticket") {
        return payment.hall_ticket_no?.toLowerCase().includes(searchLower);
      }
      
      if (filterColumn === "payment_mode") {
        return payment.payment_mode?.toLowerCase().includes(searchLower);
      }
      
      if (filterColumn === "status") {
        return payment.payment_status?.toLowerCase().includes(searchLower);
      }
      if (filterColumn === "created_at") {
        return payment.created_at?.toLowerCase().includes(searchLower);
      }
      
      return true;
    });
    
    setFilteredPayments(filtered);
  }, [searchTerm, filterColumn, payments]);

  /*
  |--------------------------------------------------------------------------
  | CLEAR FILTERS
  |--------------------------------------------------------------------------
  */

  const clearFilters = () => {
    setSearchTerm("");
    setFilterColumn("all");
    setFilteredPayments(payments);
  };

  /*
  |--------------------------------------------------------------------------
  | EXPORT TO CSV
  |--------------------------------------------------------------------------
  */

  const exportToCSV = () => {
    const headers = ["Candidate", "Email", "Payment Ref", "Mobile", "Hall Ticket", "Payment Mode", "Status"];
    
    const csvData = filteredPayments.map(payment => [
      payment.candidate_name,
      payment.email,
      payment.payment_reference_id,
      payment.mobile_number,
      payment.hall_ticket_no,
      payment.payment_mode,
      payment.payment_status,
      payment.created_at
    ]);
    
    const csvContent = [
      headers.join(","),
      ...csvData.map(row => row.map(cell => `"${cell || ''}"`).join(","))
    ].join("\n");
    
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `payments_export_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  /*
  |--------------------------------------------------------------------------
  | LOADING
  |--------------------------------------------------------------------------
  */

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-xl font-semibold">
          Loading payments...
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-green-700">
            Payments
          </h1>
          <p className="text-gray-500 mt-2">
            Total Payments: {payments.length}
            {filteredPayments.length !== payments.length && (
              <span className="text-blue-600 ml-2">
                (Showing {filteredPayments.length} filtered)
              </span>
            )}
          </p>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={exportToCSV}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg transition"
          >
            Export CSV
          </button>
        </div>
      </div>

      {/* SEARCH/FILTER SECTION */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Column Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search in
            </label>
            <select
              value={filterColumn}
              onChange={(e) => setFilterColumn(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Columns</option>
              <option value="candidate">Candidate Name</option>
              <option value="payment_ref">Payment Reference</option>
              <option value="mobile">Mobile Number</option>
              <option value="hall_ticket">Hall Ticket</option>
              <option value="payment_mode">Payment Mode</option>
              <option value="status">Status</option>
              <option value="created_at">Created At</option>
            </select>
          </div>

          {/* Search Input */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={`Search by ${filterColumn === "all" ? "any field" : filterColumn.replace("_", " ")}...`}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              {searchTerm && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Quick Filter Chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-sm text-gray-600 mr-2">Quick Filters:</span>
          <button
            onClick={() => {
              setFilterColumn("status");
              setSearchTerm("PAID");
            }}
            className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition"
          >
            Paid
          </button>
          <button
            onClick={() => {
              setFilterColumn("status");
              setSearchTerm("INITIATED");
            }}
            className="px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full hover:bg-yellow-200 transition"
          >
            Initiated
          </button>
          <button
            onClick={() => {
              setFilterColumn("status");
              setSearchTerm("FAILED");
            }}
            className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded-full hover:bg-red-200 transition"
          >
            Failed
          </button>
          <button
            onClick={() => {
              setFilterColumn("payment_mode");
              setSearchTerm("online");
            }}
            className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
          >
            Online
          </button>
          <button
            onClick={() => {
              setFilterColumn("payment_mode");
              setSearchTerm("offline");
            }}
            className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition"
          >
            Offline
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow-md overflow-auto">
        
        {filteredPayments.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No payments found</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-green-600 hover:text-green-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <table className="min-w-full">
            <thead>
              <tr className="bg-green-700 text-white sticky top-0">
                <th className="p-4 text-left">Candidate</th>
                <th className="p-4 text-left">Payment Ref</th>
                <th className="p-4 text-left">Mobile</th>
                <th className="p-4 text-left">Hall Ticket</th>
                <th className="p-4 text-left">Payment Mode</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Created At</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment) => (
                <tr
                  key={payment.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-4">
                    <div className="font-semibold">
                      {payment.candidate_name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {payment.email}
                    </div>
                   </td>
                   <td className="p-4">
                    <span className="font-mono text-sm">
                      {payment.payment_reference_id}
                    </span>
                   </td>
                   <td className="p-4">
                    {payment.mobile_number}
                   </td>
                   <td className="p-4">
                    {payment.hall_ticket_no || "—"}
                   </td>
                   <td className="p-4">
                    <span className="capitalize">
                      {payment.payment_mode?.toLowerCase()}
                    </span>
                   </td>
                   <td className="p-4">
                    <span className={`
                      px-3 py-1 rounded-full text-sm font-semibold
                      ${payment.payment_status === "PAID"
                        ? "bg-green-100 text-green-700"
                        : payment.payment_status === "INITIATED"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                      }
                    `}>
                      {payment.payment_status || "UNKNOWN"}
                    </span>
                   </td>
                   
                   <td className="p-4">
                    <span className="capitalize">
                      {payment.created_at?.toLowerCase()}
                    </span>
                   </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Summary Footer */}
      {filteredPayments.length > 0 && (
        <div className="mt-4 text-sm text-gray-500 text-right">
          Showing {filteredPayments.length} of {payments.length} payments
        </div>
      )}

    </AdminLayout>
  );

};

export default Payments;