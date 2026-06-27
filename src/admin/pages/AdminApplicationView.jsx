

// import {
//   useEffect,
//   useState,
//   useRef
// } from "react";

// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

// import {
//   useRoute,
//   useLocation
// } from "wouter";


// import supabase
// from "../../lib/supabase";


// import {
//   ArrowLeft,
//   Download,
//   User,
//   Phone,
//   Mail,
//   MapPin,
//   GraduationCap,
//   CreditCard
// } from "lucide-react";

// import AdminLayout
// from "../components/AdminLayout";

// const AdminApplicationView = () => {

//   const [, navigate] = useLocation();

//   const [match, params] =
//   useRoute(
//     "/admin-application/:id"
//   );

//   const [application,
//     setApplication] =
//     useState(null);

//   const [loading,
//     setLoading] =
//     useState(true);
    
//   const pdfRef =
//   useRef();

//   const printStyles = `
//     @media print {
//       .print-area {
//         border: 2px solid black !important;
//       }
//       .section-box {
//         border: 1px solid black !important;
//       }
//       * {
//         -webkit-print-color-adjust: exact !important;
//         print-color-adjust: exact !important;
//       }
//     }
//   `;

//   /*
//   |--------------------------------------------------------------------------
//   | FETCH APPLICATION
//   |--------------------------------------------------------------------------
//   */

// useEffect(() => {

//   fetchApplication();

// }, []);



//   /*
//   |--------------------------------------------------------------------------
//   | GET APPLICATION
//   |--------------------------------------------------------------------------
//   */


// const fetchApplication =
// async () => {

//   try {

//     const {

//       data,

//       error

//     } = await supabase

//       .from("applications")

//       .select("*")

//       .eq(
//         "id",
//         params.id
//       )

//       .single();

//     console.log(
//       "APPLICATION =>",
//       data
//     );

//     if (error) {

//       console.log(error);

//       alert(
//         "Failed to fetch application"
//       );

//       return;

//     }

//     setApplication(data);

//   }

//   catch (err) {

//     console.error(err);

//     alert(
//       "Failed to load application"
//     );

//   }

//   finally {

//     setLoading(false);

//   }

// };



//   /*
//   |--------------------------------------------------------------------------
//   | DOWNLOAD PDF
//   |--------------------------------------------------------------------------
//   */

//   const downloadApplication =
//   async () => {

//     try {

//       const element =
//       pdfRef.current;

//       const canvas =
//       await html2canvas(
//         element,
//         {
//           scale: 2,
//           useCORS: true,
//           backgroundColor: "#ffffff"
//         }
//       );

//       const imgData =
//       canvas.toDataURL(
//         "image/png"
//       );

//       const pdf =
//       new jsPDF(
//         "p",
//         "mm",
//         "a4"
//       );

//       const pdfWidth =
//       pdf.internal
//         .pageSize
//         .getWidth();

//       const pdfHeight =
//       (canvas.height * pdfWidth)
//       / canvas.width;

//       pdf.addImage(
//         imgData,
//         "PNG",
//         0,
//         0,
//         pdfWidth,
//         pdfHeight
//       );

//       pdf.save(
//         `${application.registration_number}.pdf`
//       );

//     }

//     catch (err) {

//       console.log(err);

//       alert(
//         "PDF download failed"
//       );

//     }

//   };

//   /*
//   |--------------------------------------------------------------------------
//   | LOADING
//   |--------------------------------------------------------------------------
//   */

//   if (loading) {

//     return (

//       <AdminLayout>

//         <div
//           className="
//           text-2xl
//           font-semibold
//         "
//         >
//           Loading application...
//         </div>

//       </AdminLayout>

//     );

//   }

//   /*
//   |--------------------------------------------------------------------------
//   | NO DATA
//   |--------------------------------------------------------------------------
//   */

//   if (!application) {

//     return (

//       <AdminLayout>

//         <div
//           className="
//           text-red-600
//           text-xl
//         "
//         >
//           Application not found
//         </div>

//       </AdminLayout>

//     );

//   }

//   return (

//     <AdminLayout>

//       <style>{printStyles}</style>

//       {/* HEADER */}

//       <div
//         className="
//         flex
//         justify-between
//         items-center
//         mb-8
//       "
//       >

//         <div>

//           <h1
//             className="
//             text-4xl
//             font-bold
//             text-blue-900
//           "
//           >
//             Application Details
//           </h1>

//           <p
//             className="
//             text-gray-500
//             mt-2
//           "
//           >
//             Registration:
//             {" "}
//             {
//               application.registration_number
//             }
//           </p>

//         </div>

//         <div
//           className="
//           flex
//           gap-3
//         "
//         >

//           {/* BACK */}

//           <button
//             onClick={() =>
//               navigate(
//                 "/applications"
//               )
//             }
//             className="
//             flex
//             items-center
//             gap-2
//             bg-gray-700
//             hover:bg-gray-800
//             text-white
//             px-5
//             py-3
//             rounded-lg
//           "
//           >

//             <ArrowLeft
//               className="w-5 h-5"
//             />

//             Back

//           </button>

//           {/* DOWNLOAD */}

//           <button
//             onClick={
//               downloadApplication
//             }
//             className="
//             flex
//             items-center
//             gap-2
//             bg-green-600
//             hover:bg-green-700
//             text-white
//             px-5
//             py-3
//             rounded-lg
//           "
//           >

//             <Download
//               className="w-5 h-5"
//             />

//             Download

//           </button>

//         </div>

//       </div>

//       {/* PRINT AREA - CEEP-2026 APPLICATION FORM STYLE */}

//       <div
//         ref={pdfRef}
//         id="application-print"
//         className="print-area max-w-5xl mx-auto bg-white p-5 text-[14px] mb-12"
//         style={{
//           border: "2px solid black"
//         }}
//       >

//         {/* HEADER */}

//         <div className="text-center border-b-2 border-black pb-3 mb-3">

//           <div className="flex items-center justify-between px-4">

//             {/* LEFT LOGO */}

//             <img
//               crossOrigin="anonymous"
//               src="/left-logo.png"
//               alt="Left Logo"
//               className="w-14 h-14 object-contain"
//               onError={(e) => e.target.style.display = 'none'}
//             />

//             {/* TITLE */}

//             <div className="flex-1 text-center">

//               <h1
//                 style={{
//                   fontFamily: "Arial, Helvetica, sans-serif",
//                   fontSize: "30px",
//                   fontWeight: "700",
//                   color: "#06254D"
//                 }}
//               >
//                 CEEP-2026(WP) - 2026 APPLICATION FORM
//               </h1>

//             </div>

//             {/* RIGHT LOGO */}

//             <img
//               crossOrigin="anonymous"
//               src="/right-logo.png"
//               alt="Right Logo"
//               className="w-14 h-14 object-contain"
//               onError={(e) => e.target.style.display = 'none'}
//             />

//           </div>

//         </div>

//         {/* REGISTRATION */}

//         <div className="flex justify-between border-b border-black py-1 mb-3">

//           <p>
//             <b>Registration No:</b>{" "}
//             {application.registration_number}
//           </p>

//           <p>
//             <b>Payment Ref ID:</b>{" "}
//             {application.payment_reference_id}
//           </p>

//         </div>

//         {/* PERSONAL INFO */}

//         <SectionTitle title="1. Personal Information" />

//         <div className="flex border border-black">

//           {/* LEFT SIDE */}

//           <div className="flex-1">

//             <Table>

//               <Row label="Candidate Name" value={application.candidate_name} />
//               <Row label="Father Name" value={application.father_name} />
//               <Row label="Mother Name" value={application.mother_name} />
//               <Row label="Date of Birth" value={application.date_of_birth} />
//               <Row label="Gender" value={application.gender} />
//               <Row label="Hall Ticket Number" value={application.hall_ticket_no || "-"} />
//               <Row label="Mobile Number" value={application.mobile_number} />
//               <Row label="Alternate Mobile" value={application.alternate_mobile || "-"} />
//               <Row label="Email" value={application.email} />

//             </Table>

//           </div>

//           {/* RIGHT SIDE PHOTO */}

//           <div className="w-40 border-l border-black flex flex-col items-center justify-start p-2">
//             <p className="font-bold mb-2">Candidate Photo</p>

//             <img
//               crossOrigin="anonymous"
//               src={application.photo_url}
//               alt="Candidate"
//               className="w-28 h-32 border border-black object-cover"
//               onError={(e) => e.target.src = '/placeholder-image.png'}
//             />
            
//             <p className="font-bold mt-4 mb-2">Signature</p>

//             <img
//               crossOrigin="anonymous"
//               src={application.signature_url}
//               alt="Signature"
//               className="w-28 h-12 mt-3 border border-black object-contain"
//               onError={(e) => e.target.src = '/placeholder-signature.png'}
//             />

//           </div>

//         </div>

//         {/* RESERVATION */}

//         <SectionTitle title="2. Reservation Information" />

//         <div className="grid grid-cols-2">

//           <Table>
//             <Row label="Category" value={application.category} />
//             <Row label="PH Status" value={application.ph_status || "-"} />
//           </Table>

//           <Table>
//             <Row label="Local Area Status" value={application.local_area || "-"} />
//             <Row label="Payment Status" value={application.payment_status || "PAID"} />
//           </Table>

//         </div>

//         {/* ACADEMIC AND PAYMENT */}

//         <div className="grid grid-cols-2 gap-3 mt-3">

//           {/* LEFT SIDE - ACADEMIC */}

//           <div>

//             <SectionTitle title="3. Academic Details" />

//             <Table>

//               <Row label="Diploma Branch" value={application.branch_degree} />
//               <Row label="Entrance Branch" value={application.branch_entrance} />
//               <Row label="Passing Year" value={application.passing_year} />
//               <Row label="Marks Percentage" value={application.marks_percentage} />

//             </Table>

//           </div>

//           {/* RIGHT SIDE - PAYMENT */}

//           <div>

//             <SectionTitle title="4. Payment Information" />

//             <Table>

//               <Row label="Payment Reference ID" value={application.payment_reference_id} />
//               <Row label="Payment Mode" value={application.payment_mode || "Online"} />
//               <Row label="Payment Status" value={application.payment_status || "PAID"} />
//               <Row label="Submitted Date" value={application.created_at ? new Date(application.created_at).toLocaleString() : "-"} />

//             </Table>

//           </div>

//         </div>

//         {/* EMPLOYMENT */}

//         <SectionTitle title="5. Employment Details" />

//         <Table>

//           <Row label="Employer Name & Address" value={application.employer_name_address || "-"} />
//           <Row label="Designation" value={application.employment_designation || "-"} />

//         </Table>

//         <div className="border border-black border-t-0 p-3 text-[11px]">
//           <ol className="list-decimal ml-4 space-y-1">
//             <li>
//               Permission letter from employer to pursue the programme must
//               be produced during counselling.
//             </li>
//             <li>
//               Minimum one year experience certificate should be produced
//               during counselling.
//             </li>
//             <li>
//               Original employer permission letter should be submitted at the
//               time of counselling.
//             </li>
//           </ol>
//         </div>

//         {/* ADDRESS SECTIONS */}

//         <div className="grid grid-cols-2 gap-3 mt-3">

//           {/* COMMUNICATION ADDRESS */}

//           <div>

//             <SectionTitle title="6. Communication Address" />

//             <Table>

//               <Row label="Address" value={application.address} />
//               <Row label="District" value={application.district} />
//               <Row label="State" value={application.state} />
//               <Row label="Pincode" value={application.pincode} />

//             </Table>

//           </div>

//           {/* PERMANENT ADDRESS */}

//           <div>

//             <SectionTitle title="7. Permanent Address" />

//             <Table>

//               <Row label="Address" value={application.permanent_address || application.address} />
//               <Row label="District" value={application.permanent_district || application.district} />
//               <Row label="State" value={application.permanent_state || application.state} />
//               <Row label="Pincode" value={application.permanent_pincode || application.pincode} />

//             </Table>

//           </div>

//         </div>

//         {/* DECLARATION */}

//         <div className="border border-black p-3 mt-4">

//           <p className="font-bold mb-1">Declaration:</p>

//           <p>
//             I declare that the details furnished above are true and correct to the best of my knowledge. 
//             I am responsible for the correctness of the information submitted.
//           </p>

//         </div>

//       </div>

//     </AdminLayout>

//   );

// };

// /*
// |--------------------------------------------------------------------------
// | SECTION TITLE
// |--------------------------------------------------------------------------
// */

// function SectionTitle({ title }) {

//   return (

//     <h3 className="bg-gray-200 text-[#06254D] font-semibold text-[15px] px-3 py-2 border border-black mt-4">

//       {title}

//     </h3>

//   );

// }

// /*
// |--------------------------------------------------------------------------
// | TABLE
// |--------------------------------------------------------------------------
// */

// function Table({ children }) {

//   return (

//     <div className="section-box border border-black">

//       {children}

//     </div>

//   );

// }

// /*
// |--------------------------------------------------------------------------
// | ROW
// |--------------------------------------------------------------------------
// */

// function Row({ label, value }) {

//   return (

//     <div className="grid grid-cols-[180px_1fr] border-t border-black min-h-[28px]">

//       <div className="border-r border-black px-2 py-1 font-semibold">

//         {label}

//       </div>

//       <div className="px-2 py-1">

//         {value || "-"}

//       </div>

//     </div>

//   );

// }

// export default AdminApplicationView;












// import {
//   useEffect,
//   useState,
//   useRef
// } from "react";

// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

// import {
//   useRoute,
//   useLocation
// } from "wouter";

// import supabase
// from "../../lib/supabase";

// import {
//   ArrowLeft,
//   Download,
//   User,
//   Phone,
//   Mail,
//   MapPin,
//   GraduationCap,
//   CreditCard
// } from "lucide-react";

// import AdminLayout
// from "../components/AdminLayout";

// const AdminApplicationView = () => {

//   const [, navigate] = useLocation();

//   const [match, params] =
//   useRoute(
//     "/admin-application/:id"
//   );

//   const [application,
//     setApplication] =
//     useState(null);

//   const [payment,
//     setPayment] =
//     useState(null);

//   const [loading,
//     setLoading] =
//     useState(true);

//   const [qualifications, setQualifications] = useState([]);
    
//   const pdfRef =
//   useRef();

//   const printStyles = `
//     @media print {
//       .print-area {
//         border: 2px solid black !important;
//       }
//       .section-box {
//         border: 1px solid black !important;
//       }
//       * {
//         -webkit-print-color-adjust: exact !important;
//         print-color-adjust: exact !important;
//       }
//     }
//   `;

//   /*
//   |--------------------------------------------------------------------------
//   | FETCH APPLICATION
//   |--------------------------------------------------------------------------
//   */

// useEffect(() => {

//   fetchApplication();

// }, []);



//   /*
//   |--------------------------------------------------------------------------
//   | GET APPLICATION
//   |--------------------------------------------------------------------------
//   */


// const fetchApplication =
// async () => {

//   try {

//     const {

//       data,

//       error

//     } = await supabase

//       .from("applications")

//       .select("*")

//       .eq(
//         "id",
//         params.id
//       )

//       .single();

//     console.log(
//       "APPLICATION =>",
//       data
//     );

//     if (error) {

//       console.log(error);

//       alert(
//         "Failed to fetch application"
//       );

//       return;

//     }

//     setApplication(data);

//     // Fetch payment data to get branch_entrance and branch_degree
//     if (data.payment_reference_id) {
//       const { data: paymentData, error: paymentError } = await supabase
//         .from("fee_payments")
//         .select("branch_entrance, branch_degree, payment_status, payment_mode")
//         .eq("payment_reference_id", data.payment_reference_id)
//         .single();

//       console.log("PAYMENT DATA =>", paymentData);

//       if (!paymentError && paymentData) {
//         setPayment(paymentData);
//       }
//     }
    
//     // Fetch qualifications from qualification_details table
//     const { data: qualificationsData, error: qualificationsError } = await supabase
//       .from("qualification_details")
//       .select("*")
//       .eq("registration_number", data.registration_number)
//       .order("created_at", { ascending: true });

//     console.log("QUALIFICATIONS DATA =>", qualificationsData);

//     if (!qualificationsError && qualificationsData && qualificationsData.length > 0) {
//       setQualifications(qualificationsData);
//     } else {
//       setQualifications([]);
//       console.log("No qualifications found for this application");
//     }

//   }

//   catch (err) {

//     console.error(err);

//     alert(
//       "Failed to load application"
//     );

//   }

//   finally {

//     setLoading(false);

//   }

// };



//   /*
//   |--------------------------------------------------------------------------
//   | DOWNLOAD PDF
//   |--------------------------------------------------------------------------
//   */

//   const downloadApplication =
//   async () => {

//     try {

//       const element =
//       pdfRef.current;

//       const canvas =
//       await html2canvas(
//         element,
//         {
//           scale: 2,
//           useCORS: true,
//           backgroundColor: "#ffffff"
//         }
//       );

//       const imgData =
//       canvas.toDataURL(
//         "image/png"
//       );

//       const pdf =
//       new jsPDF(
//         "p",
//         "mm",
//         "a4"
//       );

//       const pdfWidth =
//       pdf.internal
//         .pageSize
//         .getWidth();

//       const pdfHeight =
//       (canvas.height * pdfWidth)
//       / canvas.width;

//       pdf.addImage(
//         imgData,
//         "PNG",
//         0,
//         0,
//         pdfWidth,
//         pdfHeight
//       );

//       pdf.save(
//         `${application.registration_number}.pdf`
//       );

//     }

//     catch (err) {

//       console.log(err);

//       alert(
//         "PDF download failed"
//       );

//     }

//   };

//   /*
//   |--------------------------------------------------------------------------
//   | LOADING
//   |--------------------------------------------------------------------------
//   */

//   if (loading) {

//     return (

//       <AdminLayout>

//         <div
//           className="
//           text-2xl
//           font-semibold
//         "
//         >
//           Loading application...
//         </div>

//       </AdminLayout>

//     );

//   }

//   /*
//   |--------------------------------------------------------------------------
//   | NO DATA
//   |--------------------------------------------------------------------------
//   */

//   if (!application) {

//     return (

//       <AdminLayout>

//         <div
//           className="
//           text-red-600
//           text-xl
//         "
//         >
//           Application not found
//         </div>

//       </AdminLayout>

//     );

//   }

//   return (

//     <AdminLayout>

//       <style>{printStyles}</style>

//       {/* HEADER */}

//       <div
//         className="
//         flex
//         justify-between
//         items-center
//         mb-8
//       "
//       >

//         <div>

//           <h1
//             className="
//             text-4xl
//             font-bold
//             text-blue-900
//           "
//           >
//             Application Details
//           </h1>

//           <p
//             className="
//             text-gray-500
//             mt-2
//           "
//           >
//             Registration:
//             {" "}
//             {
//               application.registration_number
//             }
//           </p>

//         </div>

//         <div
//           className="
//           flex
//           gap-3
//         "
//         >

//           {/* BACK */}

//           <button
//             onClick={() =>
//               navigate(
//                 "/applications"
//               )
//             }
//             className="
//             flex
//             items-center
//             gap-2
//             bg-gray-700
//             hover:bg-gray-800
//             text-white
//             px-5
//             py-3
//             rounded-lg
//           "
//           >

//             <ArrowLeft
//               className="w-5 h-5"
//             />

//             Back

//           </button>

//           {/* DOWNLOAD */}

//           <button
//             onClick={
//               downloadApplication
//             }
//             className="
//             flex
//             items-center
//             gap-2
//             bg-green-600
//             hover:bg-green-700
//             text-white
//             px-5
//             py-3
//             rounded-lg
//           "
//           >

//             <Download
//               className="w-5 h-5"
//             />

//             Download

//           </button>

//         </div>

//       </div>

//       {/* PRINT AREA - CEEP-2026 APPLICATION FORM STYLE */}

//       <div
//         ref={pdfRef}
//         id="application-print"
//         className="print-area max-w-5xl mx-auto bg-white p-5 text-[14px] mb-12"
//         style={{
//           border: "2px solid black"
//         }}
//       >

//         {/* HEADER */}

//         <div className="text-center border-b-2 border-black pb-3 mb-3">

//           <div className="flex items-center justify-between px-4">

//             {/* LEFT LOGO */}

//             {/* <img
//               crossOrigin="anonymous"
//               src="/left-logo.png"
//               alt="Left Logo"
//               className="w-14 h-14 object-contain"
//               onError={(e) => e.target.style.display = 'none'}
//             /> */}

//             {/* TITLE */}

//             <div className="flex-1 text-center">
//               <h1
//                 style={{
//                   fontFamily: "Arial, Helvetica, sans-serif",
//                   fontSize: "30px",
//                   fontWeight: "700",
//                   color: "#06254D"
//                 }}
//               >
//                 M.E/M.TECH.(CEEP) ADMISSIONS 2026-2027
//               </h1>

//               <h2
//                 style={{
//                   fontFamily: "Arial, Helvetica, sans-serif",
//                   fontSize: "18px",
//                   fontWeight: "600",
//                   color: "#06254D",
//                   marginTop: "6px"
//                 }}
//               >
//                 APPLICATION FORM
//               </h2>
//             </div>

//             {/* RIGHT LOGO */}

//             {/* <img
//               crossOrigin="anonymous"
//               src="/right-logo.png"
//               alt="Right Logo"
//               className="w-14 h-14 object-contain"
//               onError={(e) => e.target.style.display = 'none'}
//             /> */}

//           </div>

//         </div>

//         {/* REGISTRATION */}

//         <div className="flex justify-between border-b border-black py-1 mb-3">

//           <p>
//             <b>Registration No:</b>{" "}
//             {application.registration_number}
//           </p>

//           <p>
//             <b>Payment Ref ID:</b>{" "}
//             {application.payment_reference_id}
//           </p>

//         </div>

//         {/* PERSONAL INFO */}

//         <h4 className="font-bold text-[16px] pl-6 mt-2 mb-2">
//           1. Personal Information
//         </h4>
        
//         <div className="flex border border-black">

//           {/* LEFT SIDE */}

//           <div className="flex-1">

//             <Table>

//               <Row label="Candidate Name" value={application.candidate_name} />
//               <Row label="Father Name" value={application.father_name || "-"} />
//               <Row label="Occupation of Father" value={application.occupation_of_father || "-"} />
//               <Row label="Mother Name" value={application.mother_name || "-"} />
//               <Row label="Date of Birth" value={application.date_of_birth} />
//               <Row label="Gender" value={application.gender || "-"} />

//             </Table>

//           </div>

//           {/* RIGHT SIDE PHOTO */}

//           <div className="w-[140px] border-l border-black flex flex-col items-center justify-start p-2">
//             <img
//               crossOrigin="anonymous"
//               src={application.photo_url}
//               alt="Candidate"
//               className="w-[100px] h-[120px] border border-black object-cover"
//               onError={(e) => e.target.src = '/placeholder-image.png'}
//             />

//             <img
//               crossOrigin="anonymous"
//               src={application.signature_url}
//               alt="Signature"
//               className="w-[100px] h-[40px] mt-2 border border-black object-contain"
//               onError={(e) => e.target.src = '/placeholder-signature.png'}
//             />

//           </div>

//         </div>

//         {/* LIST OF APPLIED SUBJECTS */}

//         <h4 className="font-bold text-[16px] pl-6 mt-2 mb-2">
//           2. List of Applied Subjects
//         </h4>

//         <div className="border border-black mb-2">
//           {/* Header */}
//           <div className="grid grid-cols-[80px_350px_350px] bg-gray-200 border-b border-black font-bold text-center">
//             <div className="border-r border-black py-1">S.No</div>
//             <div className="border-r border-black py-1">Subject Name</div>
//             <div className="py-1">Course</div>
//           </div>

//           {/* Row */}
//           <div className="grid grid-cols-[80px_350px_350px] text-center">
//             <div className="border-r border-black py-1">1</div>
//             <div className="border-r border-black py-1">
//               {payment?.branch_entrance || application.branch_entrance || "-"}
//             </div>
//             <div className="py-1">
//               {payment?.branch_degree || application.branch_degree || "-"}
//             </div>
//           </div>
//         </div>

//         {/* RESERVATION */}

//         <h4 className="font-bold text-[16px] pl-6 mt-2 mb-2">
//           3. Reservation Information
//         </h4>

//         <Table>
//           <Row label="Category" value={application.category || "-"} />
//           <Row label="Special Category" value={application.special_category || "-"} />
//           <Row label="Local Area Status" value={application.local_area_status || "-"} />
          
//         </Table>

//         {/* QUALIFICATION DETAILS */}

//         <h4 className="font-bold text-[16px] pl-6 mt-2 mb-2">
//           4. Details of Qualifying Examination
//         </h4>
        
//         <div className="border border-black text-[12px] overflow-x-auto">
//           {/* Header */}
//           <div className="grid grid-cols-7 bg-gray-200 font-bold text-center border-b border-black">
//             <div className="border-r border-black p-1">Course/Class</div>
//             <div className="border-r border-black p-1">Board / University</div>
//             <div className="border-r border-black p-1">Hall Ticket No</div>
//             <div className="border-r border-black p-1">Place of Study</div>
//             <div className="border-r border-black p-1">Aggregate % of Marks</div>
//             <div className="border-r border-black p-1">Month & Year of Passing</div>
//             <div className="p-1">Branch of Engineering</div>
//           </div>

//           {qualifications && qualifications.length > 0 ? (
//             qualifications.map((q, index) => (
//               <div key={index} className="grid grid-cols-7 border-b border-black">
//                 <div className="border-r border-black p-1">{q.qualification_type || "-"}</div>
//                 <div className="border-r border-black p-1">{q.board_university || "-"}</div>
//                 <div className="border-r border-black p-1">{q.hall_ticket_no || "-"}</div>
//                 <div className="border-r border-black p-1">{q.place_of_study || "-"}</div>
//                 <div className="border-r border-black p-1">{q.aggregate_percentage || "-"}</div>
//                 <div className="border-r border-black p-1">{q.passing_year || "-"}</div>
//                 <div className="p-1">{q.branch_name || "-"}</div>
//               </div>
//             ))
//           ) : (
//             <div className="text-center p-4">No qualification data found</div>
//           )}
//         </div>

//         {/* EMPLOYMENT */}

//         <h4 className="font-bold text-[16px] pl-6 mt-2 mb-2">
//           5. Employment Details
//         </h4>

//         <Table>
//           <Row label="Employer Name & Address" value={application.employer_name_address || "-"} />
//           <Row label="Designation" value={application.employment_designation || "-"} />
//         </Table>

//         <div className="border border-black border-t-0 p-3 text-[11px]">
//           <ol className="list-decimal ml-4 space-y-1">
//             <li>
//               Permission letter from employer to pursue the programme must
//               be produced during counselling.
//             </li>
//             <li>
//               Minimum one year experience certificate should be produced
//               during counselling.
//             </li>
//             <li>
//               Original employer permission letter should be submitted at the
//               time of counselling.
//             </li>
//           </ol>
//         </div>

//         {/* ADDRESS SECTIONS */}

//         <div className="flex gap-2 mt-1">

//           {/* COMMUNICATION ADDRESS */}

//           <div className="flex-1">

//             <h4 className="font-bold text-[16px] pl-6 mt-2 mb-2">
//               6. Communication Address
//             </h4>

//             <Table>
//               <Row label="Address" value={application.communication_address || application.address || "-"} />
//               <Row label="District" value={application.communication_district || application.district || "-"} />
//               <Row label="State" value={application.communication_state || application.state || "-"} />
//               <Row label="Pincode" value={application.communication_pincode || application.pincode || "-"} />
//               <Row label="Mobile Number" value={application.mobile_number} />
//               <Row label="Alternate Mobile" value={application.alternate_mobile || "-"} />
//               <Row label="Email" value={application.email} />
//             </Table>

//           </div>

//           {/* PERMANENT ADDRESS */}

//           <div className="flex-1">

//             <h4 className="font-bold text-[16px] pl-6 mt-2 mb-2">
//               7. Permanent Address
//             </h4>

//             <Table>
//               <Row label="Address" value={application.permanent_address || application.address || "-"} />
//               <Row label="District" value={application.permanent_district || application.district || "-"} />
//               <Row label="State" value={application.permanent_state || application.state || "-"} />
//               <Row label="Pincode" value={application.permanent_pincode || application.pincode || "-"} />
//               <Row label="Mobile Number" value={application.mobile_number} />
//               <Row label="Alternate Mobile" value={application.alternate_mobile || "-"} />
//               <Row label="Email" value={application.email} />
//             </Table>

//           </div>

//         </div>

//         {/* DECLARATION */}

//         <div className="mt-4 text-[11px] border-t border-black pt-3">
//           <ol className="list-decimal ml-5 space-y-1">
//             <li>
//               I promise to abide by the rules, regulations and orders of the Osmania University.
//             </li>
//             <li>
//               I declare that the statements I have made in this application are correct and complete.
//               I have not suppressed any information.
//             </li>
//           </ol>

//           <p className="mt-2 font-semibold">
//             Note: The University is having rights to reject candidature at any period of time if the above information found fault.
//           </p>
//         </div>

//       </div>

//     </AdminLayout>

//   );

// };

// /*
// |--------------------------------------------------------------------------
// | TABLE
// |--------------------------------------------------------------------------
// */

// function Table({ children }) {

//   return (

//     <div className="section-box border border-black overflow-hidden w-full">

//       {children}

//     </div>

//   );

// }

// /*
// |--------------------------------------------------------------------------
// | ROW
// |--------------------------------------------------------------------------
// */

// function Row({ label, value }) {

//   return (

//     <div className="grid grid-cols-[180px_1fr] border-t border-black">

//       <div className="border-r border-black px-2 py-1 font-semibold break-words">

//         {label}

//       </div>

//       <div 
//         className="px-2 py-1 break-words whitespace-normal overflow-hidden"
//         style={{
//           wordBreak: "break-word",
//           overflowWrap: "anywhere"
//         }}
//       >

//         {value || "-"}

//       </div>

//     </div>

//   );

// }

// export default AdminApplicationView;





















import {
  useEffect,
  useState,
  useRef
} from "react";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import {
  useRoute,
  useLocation
} from "wouter";

import supabase
from "../../lib/supabase";

import {
  ArrowLeft,
  Download,
  User,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  CreditCard
} from "lucide-react";

import AdminLayout
from "../components/AdminLayout";

const AdminApplicationView = () => {

  const [, navigate] = useLocation();

  const [match, params] =
  useRoute(
    "/admin-application/:id"
  );

  const [application,
    setApplication] =
    useState(null);

  const [payment,
    setPayment] =
    useState(null);

  const [loading,
    setLoading] =
    useState(true);

  const [qualifications, setQualifications] = useState([]);
  const [isDownloading, setIsDownloading] = useState(false);
    
  const pdfRef =
  useRef();

  const printStyles = `
    @media print {
      .print-area {
        border: 2px solid black !important;
      }
      .section-box {
        border: 1px solid black !important;
      }
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
    }
  `;

  /*
  |--------------------------------------------------------------------------
  | FETCH APPLICATION
  |--------------------------------------------------------------------------
  */

useEffect(() => {

  fetchApplication();

}, []);



  /*
  |--------------------------------------------------------------------------
  | GET APPLICATION
  |--------------------------------------------------------------------------
  */


const fetchApplication =
async () => {

  try {

    const {

      data,

      error

    } = await supabase

      .from("applications")

      .select("*")

      .eq(
        "id",
        params.id
      )

      .single();

    console.log(
      "APPLICATION =>",
      data
    );

    if (error) {

      console.log(error);

      alert(
        "Failed to fetch application"
      );

      return;

    }

    setApplication(data);

    // Fetch payment data to get branch_entrance and branch_degree
    if (data.payment_reference_id) {
      const { data: paymentData, error: paymentError } = await supabase
        .from("fee_payments")
        .select("branch_entrance, branch_degree, payment_status, payment_mode")
        .eq("payment_reference_id", data.payment_reference_id)
        .single();

      console.log("PAYMENT DATA =>", paymentData);

      if (!paymentError && paymentData) {
        setPayment(paymentData);
      }
    }
    
    // Fetch qualifications from qualification_details table
    const { data: qualificationsData, error: qualificationsError } = await supabase
      .from("qualification_details")
      .select("*")
      .eq("registration_number", data.registration_number)
      .order("created_at", { ascending: true });

    console.log("QUALIFICATIONS DATA =>", qualificationsData);

    if (!qualificationsError && qualificationsData && qualificationsData.length > 0) {
      setQualifications(qualificationsData);
    } else {
      setQualifications([]);
      console.log("No qualifications found for this application");
    }

  }

  catch (err) {

    console.error(err);

    alert(
      "Failed to load application"
    );

  }

  finally {

    setLoading(false);

  }

};



  /*
  |--------------------------------------------------------------------------
  | DOWNLOAD PDF - FIXED FOR FULL CONTENT
  |--------------------------------------------------------------------------
  */

  const downloadApplication = async () => {
  try {
    setIsDownloading(true);

    const element = pdfRef.current;

    if (!element) {
      alert("Print area not found");
      return;
    }

    element.style.width = "794px";
    element.style.minHeight = "1123px";

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      scrollX: 0,
      scrollY: 0
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.7);

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
    });

    const margin = 3;

    pdf.addImage(
      imgData,
      "JPEG",
      margin,
      margin,
      210 - margin * 2,
      297 - margin * 2
    );

    pdf.save(`${application.registration_number}_Application.pdf`);

  } catch (err) {
    console.log("PDF ERROR =>", err);
    alert("PDF download failed: " + err.message);
  } finally {
    setIsDownloading(false);
  }
};

  /*
  |--------------------------------------------------------------------------
  | LOADING
  |--------------------------------------------------------------------------
  */

  if (loading) {

    return (

      <AdminLayout>

        <div
          className="
          text-2xl
          font-semibold
        "
        >
          Loading application...
        </div>

      </AdminLayout>

    );

  }

  /*
  |--------------------------------------------------------------------------
  | NO DATA
  |--------------------------------------------------------------------------
  */

  if (!application) {

    return (

      <AdminLayout>

        <div
          className="
          text-red-600
          text-xl
        "
        >
          Application not found
        </div>

      </AdminLayout>

    );

  }

  return (

    <AdminLayout>

      <style>{printStyles}</style>

      {/* HEADER */}

      <div
        className="
        flex
        justify-between
        items-center
        mb-8
      "
      >

        <div>

          <h1
            className="
            text-4xl
            font-bold
            text-blue-900
          "
          >
            Application Details
          </h1>

          <p
            className="
            text-gray-500
            mt-2
          "
          >
            Registration:
            {" "}
            {
              application.registration_number
            }
          </p>

        </div>

        <div
          className="
          flex
          gap-3
        "
        >

          {/* BACK */}

          <button
            onClick={() =>
              navigate(
                "/applications"
              )
            }
            className="
            flex
            items-center
            gap-2
            bg-gray-700
            hover:bg-gray-800
            text-white
            px-5
            py-3
            rounded-lg
          "
          >

            <ArrowLeft
              className="w-5 h-5"
            />

            Back

          </button>

          {/* DOWNLOAD */}

          <button
            onClick={
              downloadApplication
            }
            disabled={isDownloading}
            className="
            flex
            items-center
            gap-2
            bg-green-600
            hover:bg-green-700
            text-white
            px-5
            py-3
            rounded-lg
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
          >

            <Download
              className="w-5 h-5"
            />

            {isDownloading ? "Generating PDF..." : "Download"}

          </button>

        </div>

      </div>

      {/* PRINT AREA - CEEP-2026 APPLICATION FORM STYLE */}

      <div
  ref={pdfRef}
  id="application-print"
  className="print-area mx-auto bg-white p-2 text-[11px]"
  style={{
    width: "794px",
    minHeight: "1123px",
    boxSizing: "border-box",
    overflow: "hidden",
    border: "2px solid black"
  }}
>

        {/* HEADER */}

        <div className="text-center border-b-2 border-black pb-3 mb-3">

          <div className="flex items-center justify-between px-4">

            {/* LEFT LOGO */}

            {/* <img
              crossOrigin="anonymous"
              src="/left-logo.png"
              alt="Left Logo"
              className="w-14 h-14 object-contain"
              onError={(e) => e.target.style.display = 'none'}
            /> */}

            {/* TITLE */}

            <div className="flex-1 text-center">
              <h1
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: "30px",
                  fontWeight: "700",
                  color: "#06254D"
                }}
              >
                M.E/M.TECH.(CEEP) ADMISSIONS 2026-2027
              </h1>

              <h2
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#06254D",
                  marginTop: "6px"
                }}
              >
                APPLICATION FORM
              </h2>
            </div>

            {/* RIGHT LOGO */}

            {/* <img
              crossOrigin="anonymous"
              src="/right-logo.png"
              alt="Right Logo"
              className="w-14 h-14 object-contain"
              onError={(e) => e.target.style.display = 'none'}
            /> */}

          </div>

        </div>

        {/* REGISTRATION */}

        <div className="flex justify-between border-b border-black py-1 mb-3">

          <p>
            <b>Registration No:</b>{" "}
            {application.registration_number}
          </p>

          <p>
            <b>Payment Ref ID:</b>{" "}
            {application.payment_reference_id}
          </p>

        </div>

        {/* PERSONAL INFO */}

        <h4 className="font-bold text-[16px] pl-6 mt-2 mb-2">
          1. Personal Information
        </h4>
        
        <div className="flex border border-black">

          {/* LEFT SIDE */}

          <div className="flex-1">

            <Table>

              <Row label="Candidate Name" value={application.candidate_name} />
              <Row label="Father Name" value={application.father_name || "-"} />
              <Row label="Occupation of Father" value={application.occupation_of_father || "-"} />
              <Row label="Mother Name" value={application.mother_name || "-"} />
              <Row label="Date of Birth" value={application.date_of_birth} />
              <Row label="Gender" value={application.gender || "-"} />

            </Table>

          </div>

          {/* RIGHT SIDE PHOTO */}

          <div className="w-[140px] border-l border-black flex flex-col items-center justify-start p-2">
            <img
              crossOrigin="anonymous"
              src={application.photo_url}
              alt="Candidate"
              className="w-[100px] h-[120px] border border-black object-cover"
              onError={(e) => e.target.src = '/placeholder-image.png'}
            />

            <img
              crossOrigin="anonymous"
              src={application.signature_url}
              alt="Signature"
              className="w-[100px] h-[40px] mt-2 border border-black object-contain"
              onError={(e) => e.target.src = '/placeholder-signature.png'}
            />

          </div>

        </div>

        {/* LIST OF APPLIED SUBJECTS */}

        <h4 className="font-bold text-[16px] pl-6 mt-2 mb-2">
          2. List of Applied Subjects
        </h4>

        <div className="border border-black mb-2">
          {/* Header */}
          <div className="grid grid-cols-[80px_350px_350px] bg-gray-200 border-b border-black font-bold text-center">
            <div className="border-r border-black py-1">S.No</div>
            <div className="border-r border-black py-1">Subject Name</div>
            <div className="py-1">Course</div>
          </div>

          {/* Row */}
          <div className="grid grid-cols-[80px_350px_350px] text-center">
            <div className="border-r border-black py-1">1</div>
            <div className="border-r border-black py-1">
              {payment?.branch_entrance || application.branch_entrance || "-"}
            </div>
            <div className="py-1">
              {payment?.branch_degree || application.branch_degree || "-"}
            </div>
          </div>
        </div>

        {/* RESERVATION */}

        <h4 className="font-bold text-[16px] pl-6 mt-2 mb-2">
          3. Reservation Information
        </h4>

        <Table>
          <Row label="Category" value={application.category || "-"} />
          <Row label="Special Category" value={application.special_category || "-"} />
          <Row label="Local Area Status" value={application.local_area_status || "-"} />
          {/* <Row label="PH Status" value={application.ph_status || "-"} /> */}
        </Table>

        {/* QUALIFICATION DETAILS */}

        <h4 className="font-bold text-[16px] pl-6 mt-2 mb-2">
          4. Details of Qualifying Examination
        </h4>
        
        <div className="border border-black text-[12px] overflow-x-auto">
          {/* Header */}
          <div className="grid grid-cols-7 bg-gray-200 font-bold text-center border-b border-black">
            <div className="border-r border-black p-1">Course/Class</div>
            <div className="border-r border-black p-1">Board / University</div>
            <div className="border-r border-black p-1">Hall Ticket No</div>
            <div className="border-r border-black p-1">Place of Study</div>
            <div className="border-r border-black p-1">Aggregate % of Marks</div>
            <div className="border-r border-black p-1">Month & Year of Passing</div>
            <div className="p-1">Branch of Engineering</div>
          </div>

          {qualifications && qualifications.length > 0 ? (
            qualifications.map((q, index) => (
              <div key={index} className="grid grid-cols-7 border-b border-black">
                <div className="border-r border-black p-1">{q.qualification_type || "-"}</div>
                <div className="border-r border-black p-1">{q.board_university || "-"}</div>
                <div className="border-r border-black p-1">{q.hall_ticket_no || "-"}</div>
                <div className="border-r border-black p-1">{q.place_of_study || "-"}</div>
                <div className="border-r border-black p-1">{q.aggregate_percentage || "-"}</div>
                <div className="border-r border-black p-1">{q.passing_year || "-"}</div>
                <div className="p-1">{q.branch_name || "-"}</div>
              </div>
            ))
          ) : (
            <div className="text-center p-4">No qualification data found</div>
          )}
        </div>

        {/* EMPLOYMENT */}

        <h4 className="font-bold text-[16px] pl-6 mt-2 mb-2">
          5. Employment Details
        </h4>

        <Table>
          <Row label="Employer Name & Address" value={application.employer_name_address || "-"} />
          <Row label="Designation" value={application.employment_designation || "-"} />
        </Table>

        <div className="border border-black border-t-0 p-3 text-[11px]">
          <ol className="list-decimal ml-4 space-y-1">
            <li>
              Permission letter from employer to pursue the programme must
              be produced during counselling.
            </li>
            <li>
              Minimum one year experience certificate should be produced
              during counselling.
            </li>
            <li>
              Original employer permission letter should be submitted at the
              time of counselling.
            </li>
          </ol>
        </div>

        {/* ADDRESS SECTIONS */}

        <div className="flex gap-2 mt-1">

          {/* COMMUNICATION ADDRESS */}

          <div className="flex-1">

            <h4 className="font-bold text-[16px] pl-6 mt-2 mb-2">
              6. Communication Address
            </h4>

            <Table>
              <Row label="Address" value={application.communication_address || application.address || "-"} />
              <Row label="District" value={application.communication_district || application.district || "-"} />
              <Row label="State" value={application.communication_state || application.state || "-"} />
              <Row label="Pincode" value={application.communication_pincode || application.pincode || "-"} />
              <Row label="Mobile Number" value={application.mobile_number} />
              <Row label="Alternate Mobile" value={application.alternate_mobile || "-"} />
              <Row label="Email" value={application.email} />
            </Table>

          </div>

          {/* PERMANENT ADDRESS */}

          <div className="flex-1">

            <h4 className="font-bold text-[16px] pl-6 mt-2 mb-2">
              7. Permanent Address
            </h4>

            <Table>
              <Row label="Address" value={application.permanent_address || application.address || "-"} />
              <Row label="District" value={application.permanent_district || application.district || "-"} />
              <Row label="State" value={application.permanent_state || application.state || "-"} />
              <Row label="Pincode" value={application.permanent_pincode || application.pincode || "-"} />
              <Row label="Mobile Number" value={application.mobile_number} />
              <Row label="Alternate Mobile" value={application.alternate_mobile || "-"} />
              <Row label="Email" value={application.email} />
            </Table>

          </div>

        </div>

        {/* DECLARATION */}

        <div className="mt-4 text-[11px] border-t border-black pt-3">
          <ol className="list-decimal ml-5 space-y-1">
            <li>
              I promise to abide by the rules, regulations and orders of the Osmania University.
            </li>
            <li>
              I declare that the statements I have made in this application are correct and complete.
              I have not suppressed any information.
            </li>
          </ol>

          <p className="mt-2 font-semibold">
            Note: The University is having rights to reject candidature at any period of time if the above information found fault.
          </p>
        </div>

      </div>

    </AdminLayout>

  );

};

/*
|--------------------------------------------------------------------------
| TABLE
|--------------------------------------------------------------------------
*/

function Table({ children }) {

  return (

    <div className="section-box border border-black overflow-hidden w-full">

      {children}

    </div>

  );

}

/*
|--------------------------------------------------------------------------
| ROW
|--------------------------------------------------------------------------
*/

function Row({ label, value }) {

  return (

    <div className="grid grid-cols-[180px_1fr] border-t border-black">

      <div className="border-r border-black px-2 py-1 font-semibold break-words">

        {label}

      </div>

      <div 
        className="px-2 py-1 break-words whitespace-normal overflow-hidden"
        style={{
          wordBreak: "break-word",
          overflowWrap: "anywhere"
        }}
      >

        {value || "-"}

      </div>

    </div>

  );

}

export default AdminApplicationView;