
// import {
//   useEffect,
//   useState
// } from "react";

// import {
//   useLocation
// } from "wouter";



// import AdminLayout
// from "../components/AdminLayout";

// import supabase
// from "../../lib/supabase";



// const Applications = () => {

//   const [, navigate] = useLocation();

//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterColumn, setFilterColumn] = useState("all");
//   const [filteredApplications, setFilteredApplications] = useState([]);

//   useEffect(() => {

   

//     fetchApplications();

//   }, []);


  
// const fetchApplications =
// async () => {

//   try {

//     const {

//       data,

//       error

//     } = await supabase

//       .from("applications")

//       .select("*")

//       .order(
//         "created_at",
//         {
//           ascending: false
//         }
//       );

//     console.log(
//       "APPLICATIONS =>",
//       data
//     );

//     if (error) {

//       console.log(error);

//       alert(
//         "Failed to fetch applications"
//       );

//       return;

//     }

//     setApplications(data);

//     setFilteredApplications(data);

//   }

//   catch (err) {

//     console.error(err);

//     alert(
//       "Failed to load applications"
//     );

//   }

//   finally {

//     setLoading(false);

//   }

// };



//   /*
//   |--------------------------------------------------------------------------
//   | FILTER LOGIC
//   |--------------------------------------------------------------------------
//   */

//   useEffect(() => {
//     if (!searchTerm.trim()) {
//       setFilteredApplications(applications);
//       return;
//     }

//     const searchLower = searchTerm.toLowerCase();
    
//     const filtered = applications.filter((app) => {
      
//       if (filterColumn === "all") {
//         return (
//           app.candidate_name?.toLowerCase().includes(searchLower) ||
//           app.email?.toLowerCase().includes(searchLower) ||
//           app.payment_reference_id?.toLowerCase().includes(searchLower) ||
//           app.registration_number?.toLowerCase().includes(searchLower) ||
//           app.mobile_number?.toLowerCase().includes(searchLower) ||
//           app.hall_ticket_no?.toLowerCase().includes(searchLower) ||
//           app.category?.toLowerCase().includes(searchLower) ||
//           app.branch_degree?.toLowerCase().includes(searchLower) ||
//           app.branch_entrance?.toLowerCase().includes(searchLower)
//         );
//       }
      
//       if (filterColumn === "candidate") {
//         return (
//           app.candidate_name?.toLowerCase().includes(searchLower) ||
//           app.email?.toLowerCase().includes(searchLower)
//         );
//       }
      
//       if (filterColumn === "payment_ref") {
//         return app.payment_reference_id?.toLowerCase().includes(searchLower);
//       }
      
//       if (filterColumn === "registration") {
//         return app.registration_number?.toLowerCase().includes(searchLower);
//       }
      
//       if (filterColumn === "mobile") {
//         return app.mobile_number?.toLowerCase().includes(searchLower);
//       }
      
//       if (filterColumn === "hall_ticket") {
//         return app.hall_ticket_no?.toLowerCase().includes(searchLower);
//       }
      
//       if (filterColumn === "category") {
//         return app.category?.toLowerCase().includes(searchLower);
//       }
      
//       if (filterColumn === "diploma_branch") {
//         return app.branch_degree?.toLowerCase().includes(searchLower);
//       }
      
//       if (filterColumn === "entrance_branch") {
//         return app.branch_entrance?.toLowerCase().includes(searchLower);
//       }
      
//       return true;
//     });
    
//     setFilteredApplications(filtered);
//   }, [searchTerm, filterColumn, applications]);

//   /*
//   |--------------------------------------------------------------------------
//   | CLEAR FILTERS
//   |--------------------------------------------------------------------------
//   */

//   const clearFilters = () => {
//     setSearchTerm("");
//     setFilterColumn("all");
//     setFilteredApplications(applications);
//   };

//   /*
//   |--------------------------------------------------------------------------
//   | EXPORT TO CSV
//   |--------------------------------------------------------------------------
//   */

//   const exportToCSV = () => {
//     const headers = [
//       "Candidate Name", "Email", "Payment Ref", "Registration", 
//       "Mobile", "Hall Ticket", "Category", "Diploma Branch", "Entrance Branch"
//     ];
    
//     const csvData = filteredApplications.map(app => [
//       app.candidate_name,
//       app.email,
//       app.payment_reference_id,
//       app.registration_number,
//       app.mobile_number,
//       app.hall_ticket_no,
//       app.category,
//       app.branch_degree,
//       app.branch_entrance
//     ]);
    
//     const csvContent = [
//       headers.join(","),
//       ...csvData.map(row => row.map(cell => `"${cell || ''}"`).join(","))
//     ].join("\n");
    
//     const blob = new Blob([csvContent], { type: "text/csv" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `applications_export_${new Date().toISOString().split('T')[0]}.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   /*
//   |--------------------------------------------------------------------------
//   | GET UNIQUE VALUES FOR FILTER CHIPS
//   |--------------------------------------------------------------------------
//   */

//   const getUniqueCategories = () => {
//     const categories = new Set();
//     applications.forEach(app => {
//       if (app.category) categories.add(app.category);
//     });
//     return Array.from(categories);
//   };

//   const getUniqueDiplomaBranches = () => {
//     const branches = new Set();
//     applications.forEach(app => {
//       if (app.branch_degree) branches.add(app.branch_degree);
//     });
//     return Array.from(branches);
//   };

//   const getUniqueEntranceBranches = () => {
//     const branches = new Set();
//     applications.forEach(app => {
//       if (app.branch_entrance) branches.add(app.branch_entrance);
//     });
//     return Array.from(branches);
//   };

//   /*
//   |--------------------------------------------------------------------------
//   | LOADING
//   |--------------------------------------------------------------------------
//   */

//   if (loading) {
//     return (
//       <AdminLayout>
//         <div className="text-xl font-semibold">
//           Loading applications...
//         </div>
//       </AdminLayout>
//     );
//   }

//   return (
//     <AdminLayout>

//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-4xl font-bold text-blue-900">
//             Applications
//           </h1>
//           <p className="text-gray-500 mt-2">
//             Total Applications: {applications.length}
//             {filteredApplications.length !== applications.length && (
//               <span className="text-blue-600 ml-2">
//                 (Showing {filteredApplications.length} filtered)
//               </span>
//             )}
//           </p>
//         </div>
        
//         <div className="flex gap-3">
//           <button
//             onClick={exportToCSV}
//             className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg transition"
//           >
//             Export CSV
//           </button>
//         </div>
//       </div>

//       {/* SEARCH/FILTER SECTION */}
//       <div className="bg-white rounded-xl shadow-md p-4 mb-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
//           {/* Column Filter */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Search in
//             </label>
//             <select
//               value={filterColumn}
//               onChange={(e) => setFilterColumn(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             >
//               <option value="all">All Columns</option>
//               <option value="candidate">Candidate Name / Email</option>
//               <option value="payment_ref">Payment Reference</option>
//               <option value="registration">Registration Number</option>
//               <option value="mobile">Mobile Number</option>
//               <option value="hall_ticket">Hall Ticket</option>
//               <option value="category">Category</option>
//               <option value="diploma_branch">Diploma Branch</option>
//               <option value="entrance_branch">Entrance Branch</option>
//             </select>
//           </div>

//           {/* Search Input */}
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Search
//             </label>
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 placeholder={`Search by ${filterColumn === "all" ? "any field" : filterColumn.replace("_", " ")}...`}
//                 className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//               {searchTerm && (
//                 <button
//                   onClick={clearFilters}
//                   className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition"
//                 >
//                   Clear
//                 </button>
//               )}
//             </div>
//           </div>

//         </div>

//         {/* Quick Filter Chips - Categories */}
//         <div className="mt-4">
//           <div className="flex flex-wrap gap-2 items-center">
//             <span className="text-sm text-gray-600 font-medium">Category:</span>
//             {getUniqueCategories().map(category => (
//               <button
//                 key={category}
//                 onClick={() => {
//                   setFilterColumn("category");
//                   setSearchTerm(category);
//                 }}
//                 className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition"
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Quick Filter Chips - Diploma Branches */}
//         <div className="mt-3 flex flex-wrap gap-2 items-center">
//           <span className="text-sm text-gray-600 font-medium">Diploma Branch:</span>
//           {getUniqueDiplomaBranches().slice(0, 8).map(branch => (
//             <button
//               key={branch}
//               onClick={() => {
//                 setFilterColumn("diploma_branch");
//                 setSearchTerm(branch);
//               }}
//               className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
//             >
//               {branch}
//             </button>
//           ))}
//           {getUniqueDiplomaBranches().length > 8 && (
//             <span className="text-xs text-gray-500">+{getUniqueDiplomaBranches().length - 8} more</span>
//           )}
//         </div>

//         {/* Quick Filter Chips - Entrance Branches */}
//         <div className="mt-3 flex flex-wrap gap-2 items-center">
//           <span className="text-sm text-gray-600 font-medium">Entrance Branch:</span>
//           {getUniqueEntranceBranches().slice(0, 8).map(branch => (
//             <button
//               key={branch}
//               onClick={() => {
//                 setFilterColumn("entrance_branch");
//                 setSearchTerm(branch);
//               }}
//               className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition"
//             >
//               {branch}
//             </button>
//           ))}
//           {getUniqueEntranceBranches().length > 8 && (
//             <span className="text-xs text-gray-500">+{getUniqueEntranceBranches().length - 8} more</span>
//           )}
//         </div>

//         {/* Reset all filters button */}
//         {searchTerm && (
//           <div className="mt-3">
//             <button
//               onClick={clearFilters}
//               className="text-sm text-red-600 hover:text-red-700 font-medium"
//             >
//               Clear all filters ✕
//             </button>
//           </div>
//         )}
//       </div>

//       {/* TABLE */}
//       <div className="bg-white rounded-xl shadow-md overflow-auto">
        
//         {filteredApplications.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No applications found</p>
//             <button
//               onClick={clearFilters}
//               className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
//             >
//               Clear filters
//             </button>
//           </div>
//         ) : (
//           <table className="min-w-full">
//             <thead>
//               <tr className="bg-blue-900 text-white sticky top-0">
//                 <th className="p-4 text-left">Candidate</th>
//                 <th className="p-4 text-left">Payment Ref</th>
//                 <th className="p-4 text-left">Registration</th>
//                 <th className="p-4 text-left">Mobile</th>
//                 <th className="p-4 text-left">Hall Ticket</th>
//                 <th className="p-4 text-left">Category</th>
//                 <th className="p-4 text-left">Diploma Branch</th>
//                 <th className="p-4 text-left">Entrance Branch</th>
//                 <th className="p-4 text-left">
//   Actions
// </th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredApplications.map((app) => (
//                 <tr
//                   key={app.id}
//                   className="border-b hover:bg-gray-50 transition"
//                 >
//                   <td className="p-4">
//                     <div className="font-semibold">
//                       {app.candidate_name}
//                     </div>
//                     <div className="text-sm text-gray-500">
//                       {app.email}
//                     </div>
//                    </td>
                  
//                   <td className="p-4">
//                     <span className="font-mono text-sm">
//                       {app.payment_reference_id || "—"}
//                     </span>
//                    </td>
                  
//                   <td className="p-4">
//                     <span className="font-mono text-sm">
//                       {app.registration_number}
//                     </span>
//                    </td>

//                   <td className="p-4">
//                     {app.mobile_number}
//                    </td>

//                   <td className="p-4">
//                     {app.hall_ticket_no || "—"}
//                    </td>

//                   <td className="p-4">
//                     <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-700">
//                       {app.category || "—"}
//                     </span>
//                    </td>
                  
//                   <td className="p-4">
//                     <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
//                       {app.branch_degree || "—"}
//                     </span>
//                    </td>

//                   <td className="p-4">
//                     <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
//                       {app.branch_entrance || "—"}
//                     </span>
//                    </td>
//                    <td className="p-4">

//   <div className="flex gap-2">

    

// <button
//   onClick={() => {

//     navigate(
//       `/admin-application/${app.id}`
//     );

//   }}

//   className="
//   bg-blue-600
//   hover:bg-blue-700
//   text-white
//   px-4
//   py-2
//   rounded-lg
//   text-sm
//   font-medium
//   transition
// "
// >

//   View

// </button>

    
// <button
//   onClick={() => {

//     window.open(

//       `/print-application?id=${app.id}`,

//       "_blank"

//     );

//   }}

//   className="
//   bg-green-600
//   hover:bg-green-700
//   text-white
//   px-4
//   py-2
//   rounded-lg
//   text-sm
//   font-medium
//   transition
// "
// >

//   Download

// </button>
//   </div>

// </td>
//                  </tr>
//               ))}
//             </tbody>
//            </table>
//         )}
//       </div>

//       {/* Summary Footer */}
//       {filteredApplications.length > 0 && (
//         <div className="mt-4 text-sm text-gray-500 text-right">
//           Showing {filteredApplications.length} of {applications.length} applications
//         </div>
//       )}

//     </AdminLayout>
//   );

// };

// export default Applications;
























































// import {
//   useEffect,
//   useState
// } from "react";

// import {
//   useLocation
// } from "wouter";

// import AdminLayout
// from "../components/AdminLayout";

// import supabase
// from "../../lib/supabase";

// const Applications = () => {

//   const [, navigate] = useLocation();

//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterColumn, setFilterColumn] = useState("all");
//   const [filteredApplications, setFilteredApplications] = useState([]);

//   useEffect(() => {
//     fetchApplications();
//   }, []);

//   const fetchApplications = async () => {
//     try {
//       const { data, error } = await supabase
//         .from("applications")
//         .select("*")
//         .order("created_at", { ascending: false });

//       console.log("APPLICATIONS =>", data);

//       if (error) {
//         console.log(error);
//         alert("Failed to fetch applications");
//         return;
//       }

//       // Fetch payment data for each application to get branch_degree and branch_entrance
//       const applicationsWithPayment = await Promise.all(
//         data.map(async (app) => {
//           if (app.payment_reference_id) {
//             const { data: paymentData, error: paymentError } = await supabase
//               .from("fee_payments")
//               .select("branch_entrance, branch_degree")
//               .eq("payment_reference_id", app.payment_reference_id)
//               .single();

//             if (!paymentError && paymentData) {
//               return {
//                 ...app,
//                 branch_entrance: paymentData.branch_entrance || app.branch_entrance,
//                 branch_degree: paymentData.branch_degree || app.branch_degree
//               };
//             }
//           }
//           return app;
//         })
//       );

//       console.log("APPLICATIONS WITH PAYMENT =>", applicationsWithPayment);
//       setApplications(applicationsWithPayment);
//       setFilteredApplications(applicationsWithPayment);

//     } catch (err) {
//       console.error(err);
//       alert("Failed to load applications");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /*
//   |--------------------------------------------------------------------------
//   | FILTER LOGIC
//   |--------------------------------------------------------------------------
//   */

//   useEffect(() => {
//     if (!searchTerm.trim()) {
//       setFilteredApplications(applications);
//       return;
//     }

//     const searchLower = searchTerm.toLowerCase();
    
//     const filtered = applications.filter((app) => {
      
//       if (filterColumn === "all") {
//         return (
//           app.candidate_name?.toLowerCase().includes(searchLower) ||
//           app.email?.toLowerCase().includes(searchLower) ||
//           app.payment_reference_id?.toLowerCase().includes(searchLower) ||
//           app.registration_number?.toLowerCase().includes(searchLower) ||
//           app.mobile_number?.toLowerCase().includes(searchLower) ||
//           app.hall_ticket_no?.toLowerCase().includes(searchLower) ||
//           app.category?.toLowerCase().includes(searchLower) ||
//           app.branch_degree?.toLowerCase().includes(searchLower) ||
//           app.branch_entrance?.toLowerCase().includes(searchLower)
//         );
//       }
      
//       if (filterColumn === "candidate") {
//         return (
//           app.candidate_name?.toLowerCase().includes(searchLower) ||
//           app.email?.toLowerCase().includes(searchLower)
//         );
//       }
      
//       if (filterColumn === "payment_ref") {
//         return app.payment_reference_id?.toLowerCase().includes(searchLower);
//       }
      
//       if (filterColumn === "registration") {
//         return app.registration_number?.toLowerCase().includes(searchLower);
//       }
      
//       if (filterColumn === "mobile") {
//         return app.mobile_number?.toLowerCase().includes(searchLower);
//       }
      
//       if (filterColumn === "hall_ticket") {
//         return app.hall_ticket_no?.toLowerCase().includes(searchLower);
//       }
      
//       if (filterColumn === "category") {
//         return app.category?.toLowerCase().includes(searchLower);
//       }
      
//       if (filterColumn === "diploma_branch") {
//         return app.branch_degree?.toLowerCase().includes(searchLower);
//       }
      
//       if (filterColumn === "entrance_branch") {
//         return app.branch_entrance?.toLowerCase().includes(searchLower);
//       }
      
//       return true;
//     });
    
//     setFilteredApplications(filtered);
//   }, [searchTerm, filterColumn, applications]);

//   /*
//   |--------------------------------------------------------------------------
//   | CLEAR FILTERS
//   |--------------------------------------------------------------------------
//   */

//   const clearFilters = () => {
//     setSearchTerm("");
//     setFilterColumn("all");
//     setFilteredApplications(applications);
//   };

//   /*
//   |--------------------------------------------------------------------------
//   | EXPORT TO CSV
//   |--------------------------------------------------------------------------
//   */

//   const exportToCSV = () => {
//     const headers = [
//       "Candidate Name", "Email", "Payment Ref", "Registration", 
//       "Mobile", "Hall Ticket", "Category", "Diploma Branch", "Entrance Branch"
//     ];
    
//     const csvData = filteredApplications.map(app => [
//       app.candidate_name,
//       app.email,
//       app.payment_reference_id,
//       app.registration_number,
//       app.mobile_number,
//       app.hall_ticket_no,
//       app.category,
//       app.branch_degree,
//       app.branch_entrance
//     ]);
    
//     const csvContent = [
//       headers.join(","),
//       ...csvData.map(row => row.map(cell => `"${cell || ''}"`).join(","))
//     ].join("\n");
    
//     const blob = new Blob([csvContent], { type: "text/csv" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `applications_export_${new Date().toISOString().split('T')[0]}.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   /*
//   |--------------------------------------------------------------------------
//   | GET UNIQUE VALUES FOR FILTER CHIPS
//   |--------------------------------------------------------------------------
//   */

//   const getUniqueCategories = () => {
//     const categories = new Set();
//     applications.forEach(app => {
//       if (app.category) categories.add(app.category);
//     });
//     return Array.from(categories);
//   };

//   const getUniqueDiplomaBranches = () => {
//     const branches = new Set();
//     applications.forEach(app => {
//       if (app.branch_degree) branches.add(app.branch_degree);
//     });
//     return Array.from(branches);
//   };

//   const getUniqueEntranceBranches = () => {
//     const branches = new Set();
//     applications.forEach(app => {
//       if (app.branch_entrance) branches.add(app.branch_entrance);
//     });
//     return Array.from(branches);
//   };

//   /*
//   |--------------------------------------------------------------------------
//   | LOADING
//   |--------------------------------------------------------------------------
//   */

//   if (loading) {
//     return (
//       <AdminLayout>
//         <div className="text-xl font-semibold">
//           Loading applications...
//         </div>
//       </AdminLayout>
//     );
//   }

//   return (
//     <AdminLayout>

//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-4xl font-bold text-blue-900">
//             Applications
//           </h1>
//           <p className="text-gray-500 mt-2">
//             Total Applications: {applications.length}
//             {filteredApplications.length !== applications.length && (
//               <span className="text-blue-600 ml-2">
//                 (Showing {filteredApplications.length} filtered)
//               </span>
//             )}
//           </p>
//         </div>
        
//         <div className="flex gap-3">
//           <button
//             onClick={exportToCSV}
//             className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg transition"
//           >
//             Export CSV
//           </button>
//         </div>
//       </div>

//       {/* SEARCH/FILTER SECTION */}
//       <div className="bg-white rounded-xl shadow-md p-4 mb-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
//           {/* Column Filter */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Search in
//             </label>
//             <select
//               value={filterColumn}
//               onChange={(e) => setFilterColumn(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             >
//               <option value="all">All Columns</option>
//               <option value="candidate">Candidate Name / Email</option>
//               <option value="payment_ref">Payment Reference</option>
//               <option value="registration">Registration Number</option>
//               <option value="mobile">Mobile Number</option>
//               <option value="hall_ticket">Hall Ticket</option>
//               <option value="category">Category</option>
//               <option value="diploma_branch">Diploma Branch</option>
//               <option value="entrance_branch">Entrance Branch</option>
//             </select>
//           </div>

//           {/* Search Input */}
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Search
//             </label>
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 placeholder={`Search by ${filterColumn === "all" ? "any field" : filterColumn.replace("_", " ")}...`}
//                 className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//               {searchTerm && (
//                 <button
//                   onClick={clearFilters}
//                   className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition"
//                 >
//                   Clear
//                 </button>
//               )}
//             </div>
//           </div>

//         </div>

//         {/* Quick Filter Chips - Categories */}
//         <div className="mt-4">
//           <div className="flex flex-wrap gap-2 items-center">
//             <span className="text-sm text-gray-600 font-medium">Category:</span>
//             {getUniqueCategories().map(category => (
//               <button
//                 key={category}
//                 onClick={() => {
//                   setFilterColumn("category");
//                   setSearchTerm(category);
//                 }}
//                 className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition"
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Quick Filter Chips - Diploma Branches */}
//         <div className="mt-3 flex flex-wrap gap-2 items-center">
//           <span className="text-sm text-gray-600 font-medium">Diploma Branch:</span>
//           {getUniqueDiplomaBranches().slice(0, 8).map(branch => (
//             <button
//               key={branch}
//               onClick={() => {
//                 setFilterColumn("diploma_branch");
//                 setSearchTerm(branch);
//               }}
//               className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
//             >
//               {branch}
//             </button>
//           ))}
//           {getUniqueDiplomaBranches().length > 8 && (
//             <span className="text-xs text-gray-500">+{getUniqueDiplomaBranches().length - 8} more</span>
//           )}
//         </div>

//         {/* Quick Filter Chips - Entrance Branches */}
//         <div className="mt-3 flex flex-wrap gap-2 items-center">
//           <span className="text-sm text-gray-600 font-medium">Entrance Branch:</span>
//           {getUniqueEntranceBranches().slice(0, 8).map(branch => (
//             <button
//               key={branch}
//               onClick={() => {
//                 setFilterColumn("entrance_branch");
//                 setSearchTerm(branch);
//               }}
//               className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition"
//             >
//               {branch}
//             </button>
//           ))}
//           {getUniqueEntranceBranches().length > 8 && (
//             <span className="text-xs text-gray-500">+{getUniqueEntranceBranches().length - 8} more</span>
//           )}
//         </div>

//         {/* Reset all filters button */}
//         {searchTerm && (
//           <div className="mt-3">
//             <button
//               onClick={clearFilters}
//               className="text-sm text-red-600 hover:text-red-700 font-medium"
//             >
//               Clear all filters ✕
//             </button>
//           </div>
//         )}
//       </div>

//       {/* TABLE */}
//       <div className="bg-white rounded-xl shadow-md overflow-auto">
        
//         {filteredApplications.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No applications found</p>
//             <button
//               onClick={clearFilters}
//               className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
//             >
//               Clear filters
//             </button>
//           </div>
//         ) : (
//           <table className="min-w-full">
//             <thead>
//               <tr className="bg-blue-900 text-white sticky top-0">
//                 <th className="p-4 text-left">Candidate</th>
//                 <th className="p-4 text-left">Payment Ref</th>
//                 <th className="p-4 text-left">Registration</th>
//                 <th className="p-4 text-left">Mobile</th>
//                 <th className="p-4 text-left">Hall Ticket</th>
//                 <th className="p-4 text-left">Category</th>
//                 <th className="p-4 text-left">Diploma Branch</th>
//                 <th className="p-4 text-left">Entrance Branch</th>
//                 <th className="p-4 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredApplications.map((app) => (
//                 <tr
//                   key={app.id}
//                   className="border-b hover:bg-gray-50 transition"
//                 >
//                   <td className="p-4">
//                     <div className="font-semibold">
//                       {app.candidate_name}
//                     </div>
//                     <div className="text-sm text-gray-500">
//                       {app.email}
//                     </div>
//                   </td>
                  
//                   <td className="p-4">
//                     <span className="font-mono text-sm">
//                       {app.payment_reference_id || "—"}
//                     </span>
//                   </td>
                  
//                   <td className="p-4">
//                     <span className="font-mono text-sm">
//                       {app.registration_number}
//                     </span>
//                   </td>

//                   <td className="p-4">
//                     {app.mobile_number}
//                   </td>

//                   <td className="p-4">
//                     {app.hall_ticket_no || "—"}
//                   </td>

//                   <td className="p-4">
//                     <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-700">
//                       {app.category || "—"}
//                     </span>
//                   </td>
                  
//                   <td className="p-4">
//                     <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
//                       {app.branch_degree || "—"}
//                     </span>
//                   </td>

//                   <td className="p-4">
//                     <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
//                       {app.branch_entrance || "—"}
//                     </span>
//                   </td>
                  
//                   <td className="p-4">
//                     <div className="flex gap-2">
//                       <button
//                         onClick={() => {
//                           navigate(`/admin-application/${app.id}`);
//                         }}
//                         className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
//                       >
//                         View
//                       </button>
                      
//                       <button
//                         onClick={() => {
//                           window.open(`/print-application?id=${app.id}`, "_blank");
//                         }}
//                         className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
//                       >
//                         Download
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       {/* Summary Footer */}
//       {filteredApplications.length > 0 && (
//         <div className="mt-4 text-sm text-gray-500 text-right">
//           Showing {filteredApplications.length} of {applications.length} applications
//         </div>
//       )}

//     </AdminLayout>
//   );

// };

// export default Applications;




















import {
  useEffect,
  useState
} from "react";

import {
  useLocation
} from "wouter";

import {
  Download,
  ArrowLeft
} from "lucide-react";

import AdminLayout
from "../components/AdminLayout";

import supabase
from "../../lib/supabase";

const Applications = () => {

  const [, navigate] = useLocation();

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterColumn, setFilterColumn] = useState("all");
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [downloadingId, setDownloadingId] = useState(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const { data, error } = await supabase
        .from("applications")
        .select("*")
        .order("created_at", { ascending: false });

      console.log("APPLICATIONS =>", data);

      if (error) {
        console.log(error);
        alert("Failed to fetch applications");
        return;
      }

      // Fetch payment data for each application to get branch_degree and branch_entrance
      const applicationsWithPayment = await Promise.all(
        data.map(async (app) => {
          if (app.payment_reference_id) {
            const { data: paymentData, error: paymentError } = await supabase
              .from("fee_payments")
              .select("branch_entrance, branch_degree")
              .eq("payment_reference_id", app.payment_reference_id)
              .single();

            if (!paymentError && paymentData) {
              return {
                ...app,
                branch_entrance: paymentData.branch_entrance || app.branch_entrance,
                branch_degree: paymentData.branch_degree || app.branch_degree
              };
            }
          }
          return app;
        })
      );

      console.log("APPLICATIONS WITH PAYMENT =>", applicationsWithPayment);
      setApplications(applicationsWithPayment);
      setFilteredApplications(applicationsWithPayment);

    } catch (err) {
      console.error(err);
      alert("Failed to load applications");
    } finally {
      setLoading(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | HANDLE DOWNLOAD APPLICATION
  |--------------------------------------------------------------------------
  */

  const handleDownloadApplication = async (app) => {
    try {
      setDownloadingId(app.id);
      
      // Fetch payment data
      let paymentData = null;
      if (app.payment_reference_id) {
        const { data, error } = await supabase
          .from("fee_payments")
          .select("*")
          .eq("payment_reference_id", app.payment_reference_id)
          .single();
        
        if (!error && data) {
          paymentData = data;
        }
      }

      // Fetch qualifications
      let qualificationsData = [];
      if (app.registration_number) {
        const { data, error } = await supabase
          .from("qualification_details")
          .select("*")
          .eq("registration_number", app.registration_number)
          .order("created_at", { ascending: true });
        
        if (!error && data) {
          qualificationsData = data;
        }
      }

      // Build the application data object
      const applicationData = {
        application: app,
        payment: paymentData,
        qualifications: qualificationsData
      };

      // Store in sessionStorage to pass to print page
      sessionStorage.setItem('printApplicationData', JSON.stringify(applicationData));
      
      // Open print page in new tab
      window.open('/print-application', '_blank');

    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download application. Please try again.");
    } finally {
      setDownloadingId(null);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | FILTER LOGIC
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredApplications(applications);
      return;
    }

    const searchLower = searchTerm.toLowerCase();
    
    const filtered = applications.filter((app) => {
      
      if (filterColumn === "all") {
        return (
          app.candidate_name?.toLowerCase().includes(searchLower) ||
          app.email?.toLowerCase().includes(searchLower) ||
          app.payment_reference_id?.toLowerCase().includes(searchLower) ||
          app.registration_number?.toLowerCase().includes(searchLower) ||
          app.mobile_number?.toLowerCase().includes(searchLower) ||
          app.hall_ticket_no?.toLowerCase().includes(searchLower) ||
          app.category?.toLowerCase().includes(searchLower) ||
          app.branch_degree?.toLowerCase().includes(searchLower) ||
          app.branch_entrance?.toLowerCase().includes(searchLower)
        );
      }
      
      if (filterColumn === "candidate") {
        return (
          app.candidate_name?.toLowerCase().includes(searchLower) ||
          app.email?.toLowerCase().includes(searchLower)
        );
      }
      
      if (filterColumn === "payment_ref") {
        return app.payment_reference_id?.toLowerCase().includes(searchLower);
      }
      
      if (filterColumn === "registration") {
        return app.registration_number?.toLowerCase().includes(searchLower);
      }
      
      if (filterColumn === "mobile") {
        return app.mobile_number?.toLowerCase().includes(searchLower);
      }
      
      if (filterColumn === "hall_ticket") {
        return app.hall_ticket_no?.toLowerCase().includes(searchLower);
      }
      
      if (filterColumn === "category") {
        return app.category?.toLowerCase().includes(searchLower);
      }
      
      if (filterColumn === "diploma_branch") {
        return app.branch_degree?.toLowerCase().includes(searchLower);
      }
      
      if (filterColumn === "entrance_branch") {
        return app.branch_entrance?.toLowerCase().includes(searchLower);
      }
      
      return true;
    });
    
    setFilteredApplications(filtered);
  }, [searchTerm, filterColumn, applications]);

  /*
  |--------------------------------------------------------------------------
  | CLEAR FILTERS
  |--------------------------------------------------------------------------
  */

  const clearFilters = () => {
    setSearchTerm("");
    setFilterColumn("all");
    setFilteredApplications(applications);
  };

  /*
  |--------------------------------------------------------------------------
  | EXPORT TO CSV
  |--------------------------------------------------------------------------
  */

  const exportToCSV = () => {
    const headers = [
      "Candidate Name", "Email", "Payment Ref", "Registration", 
      "Mobile", "Hall Ticket", "Category", "Diploma Branch", "Entrance Branch"
    ];
    
    const csvData = filteredApplications.map(app => [
      app.candidate_name,
      app.email,
      app.payment_reference_id,
      app.registration_number,
      app.mobile_number,
      app.hall_ticket_no,
      app.category,
      app.branch_degree,
      app.branch_entrance
    ]);
    
    const csvContent = [
      headers.join(","),
      ...csvData.map(row => row.map(cell => `"${cell || ''}"`).join(","))
    ].join("\n");
    
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `applications_export_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  /*
  |--------------------------------------------------------------------------
  | GET UNIQUE VALUES FOR FILTER CHIPS
  |--------------------------------------------------------------------------
  */

  const getUniqueCategories = () => {
    const categories = new Set();
    applications.forEach(app => {
      if (app.category) categories.add(app.category);
    });
    return Array.from(categories);
  };

  const getUniqueDiplomaBranches = () => {
    const branches = new Set();
    applications.forEach(app => {
      if (app.branch_degree) branches.add(app.branch_degree);
    });
    return Array.from(branches);
  };

  const getUniqueEntranceBranches = () => {
    const branches = new Set();
    applications.forEach(app => {
      if (app.branch_entrance) branches.add(app.branch_entrance);
    });
    return Array.from(branches);
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
          Loading applications...
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-blue-900">
            Applications
          </h1>
          <p className="text-gray-500 mt-2">
            Total Applications: {applications.length}
            {filteredApplications.length !== applications.length && (
              <span className="text-blue-600 ml-2">
                (Showing {filteredApplications.length} filtered)
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Columns</option>
              <option value="candidate">Candidate Name / Email</option>
              <option value="payment_ref">Payment Reference</option>
              <option value="registration">Registration Number</option>
              <option value="mobile">Mobile Number</option>
              <option value="hall_ticket">Hall Ticket</option>
              <option value="category">Category</option>
              <option value="diploma_branch">Diploma Branch</option>
              <option value="entrance_branch">Entrance Branch</option>
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
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

        {/* Quick Filter Chips - Categories */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm text-gray-600 font-medium">Category:</span>
            {getUniqueCategories().map(category => (
              <button
                key={category}
                onClick={() => {
                  setFilterColumn("category");
                  setSearchTerm(category);
                }}
                className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Filter Chips - Diploma Branches */}
        <div className="mt-3 flex flex-wrap gap-2 items-center">
          <span className="text-sm text-gray-600 font-medium">Diploma Branch:</span>
          {getUniqueDiplomaBranches().slice(0, 8).map(branch => (
            <button
              key={branch}
              onClick={() => {
                setFilterColumn("diploma_branch");
                setSearchTerm(branch);
              }}
              className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
            >
              {branch}
            </button>
          ))}
          {getUniqueDiplomaBranches().length > 8 && (
            <span className="text-xs text-gray-500">+{getUniqueDiplomaBranches().length - 8} more</span>
          )}
        </div>

        {/* Quick Filter Chips - Entrance Branches */}
        <div className="mt-3 flex flex-wrap gap-2 items-center">
          <span className="text-sm text-gray-600 font-medium">Entrance Branch:</span>
          {getUniqueEntranceBranches().slice(0, 8).map(branch => (
            <button
              key={branch}
              onClick={() => {
                setFilterColumn("entrance_branch");
                setSearchTerm(branch);
              }}
              className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition"
            >
              {branch}
            </button>
          ))}
          {getUniqueEntranceBranches().length > 8 && (
            <span className="text-xs text-gray-500">+{getUniqueEntranceBranches().length - 8} more</span>
          )}
        </div>

        {/* Reset all filters button */}
        {searchTerm && (
          <div className="mt-3">
            <button
              onClick={clearFilters}
              className="text-sm text-red-600 hover:text-red-700 font-medium"
            >
              Clear all filters ✕
            </button>
          </div>
        )}
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow-md overflow-auto">
        
        {filteredApplications.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No applications found</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <table className="min-w-full">
            <thead>
              <tr className="bg-blue-900 text-white sticky top-0">
                <th className="p-4 text-left">Candidate</th>
                <th className="p-4 text-left">Payment Ref</th>
                <th className="p-4 text-left">Registration</th>
                <th className="p-4 text-left">Mobile</th>
                <th className="p-4 text-left">Hall Ticket</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Diploma Branch</th>
                <th className="p-4 text-left">Entrance Branch</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredApplications.map((app) => (
                <tr
                  key={app.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-4">
                    <div className="font-semibold">
                      {app.candidate_name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {app.email}
                    </div>
                  </td>
                  
                  <td className="p-4">
                    <span className="font-mono text-sm">
                      {app.payment_reference_id || "—"}
                    </span>
                  </td>
                  
                  <td className="p-4">
                    <span className="font-mono text-sm">
                      {app.registration_number}
                    </span>
                  </td>

                  <td className="p-4">
                    {app.mobile_number}
                  </td>

                  <td className="p-4">
                    {app.hall_ticket_no || "—"}
                  </td>

                  <td className="p-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-700">
                      {app.category || "—"}
                    </span>
                  </td>
                  
                  <td className="p-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                      {app.branch_degree || "—"}
                    </span>
                  </td>

                  <td className="p-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                      {app.branch_entrance || "—"}
                    </span>
                  </td>
                  
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          navigate(`/admin-application/${app.id}`);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                        disabled={downloadingId === app.id}
                      >
                        View
                      </button>
                      
                      {/* <button
                        onClick={() => handleDownloadApplication(app)}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-1"
                        disabled={downloadingId === app.id}
                      >
                        {downloadingId === app.id ? (
                          <>
                            <span className="animate-spin">⟳</span>
                            Loading...
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4" />
                            Download
                          </>
                        )}
                      </button> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Summary Footer */}
      {filteredApplications.length > 0 && (
        <div className="mt-4 text-sm text-gray-500 text-right">
          Showing {filteredApplications.length} of {applications.length} applications
        </div>
      )}

    </AdminLayout>
  );

};

export default Applications;