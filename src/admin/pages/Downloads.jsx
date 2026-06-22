

import {
  useLocation
} from "wouter";

import {
  Download,
  FileText,
  Ticket,
  BarChart3,
  ArrowLeft,
  FileSpreadsheet,
  FileDown
} from "lucide-react";

import AdminLayout
from "../components/AdminLayout";

const Downloads = () => {

  const [, navigate] =
  useLocation();

  return (

    <AdminLayout>

      {/* PAGE HEADER */}

      <div
        className="
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-4
        mb-10
      "
      >

        <div>

          <div
            className="
            flex
            items-center
            gap-3
            mb-2
          "
          >

            <div
              className="
              p-3
              rounded-xl
              bg-indigo-100
            "
            >

              <Download
                className="
                w-7
                h-7
                text-indigo-700
              "
              />

            </div>

            <div>

              <h1
                className="
                text-4xl
                font-bold
                text-indigo-700
              "
              >
                Downloads Center
              </h1>

              <p
                className="
                text-gray-500
                mt-1
              "
              >
                Manage all downloadable files
              </p>

            </div>

          </div>

        </div>

        {/* BACK BUTTON */}

        <button
          onClick={() =>
            navigate(
              "/dashboard"
            )
          }
          className="
          flex
          items-center
          gap-2
          bg-blue-900
          hover:bg-blue-800
          text-white
          px-5
          py-3
          rounded-xl
          shadow-md
          transition
        "
        >

          <ArrowLeft
            className="w-5 h-5"
          />

          <span>
            Back to Dashboard
          </span>

        </button>

      </div>

      {/* DOWNLOAD CARDS */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
      "
      >

        {/* APPLICATIONS */}

        <div
          className="
          bg-white
          rounded-2xl
          shadow-md
          border
          border-gray-100
          p-7
          hover:shadow-xl
          transition
        "
        >

          <div
            className="
            flex
            items-center
            justify-between
            mb-5
          "
          >

            <div
              className="
              p-3
              rounded-xl
              bg-blue-100
            "
            >

              <FileText
                className="
                w-8
                h-8
                text-blue-700
              "
              />

            </div>

            <span
              className="
              text-xs
              font-semibold
              bg-blue-50
              text-blue-700
              px-3
              py-1
              rounded-full
            "
            >
              PDF
            </span>

          </div>

          <h2
            className="
            text-2xl
            font-bold
            text-blue-900
            mb-3
          "
          >
            Applications
          </h2>

          <p
            className="
            text-gray-600
            leading-relaxed
            mb-6
          "
          >
            View and download submitted
            application forms of candidates.
          </p>

          <button
            onClick={() =>
              navigate(
                "/applications"
              )
            }
            className="
            w-full
            flex
            items-center
            justify-center
            gap-2
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-4
            py-3
            rounded-xl
            font-semibold
            transition
          "
          >

            <FileDown
              className="w-5 h-5"
            />

            Open Applications

          </button>

        </div>

        {/* HALL TICKETS */}

        <div
          className="
          bg-white
          rounded-2xl
          shadow-md
          border
          border-gray-100
          p-7
          hover:shadow-xl
          transition
        "
        >

          <div
            className="
            flex
            items-center
            justify-between
            mb-5
          "
          >

            <div
              className="
              p-3
              rounded-xl
              bg-green-100
            "
            >

              <Ticket
                className="
                w-8
                h-8
                text-green-700
              "
              />

            </div>

            <span
              className="
              text-xs
              font-semibold
              bg-green-50
              text-green-700
              px-3
              py-1
              rounded-full
            "
            >
              HALL TICKET
            </span>

          </div>

          <h2
            className="
            text-2xl
            font-bold
            text-green-700
            mb-3
          "
          >
            Hall Tickets
          </h2>

          <p
            className="
            text-gray-600
            leading-relaxed
            mb-6
          "
          >
            Download candidate hall tickets
            and examination entry documents.
          </p>

          <button
            onClick={() =>
              navigate(
                "/halltickets"
              )
            }
            className="
            w-full
            flex
            items-center
            justify-center
            gap-2
            bg-green-600
            hover:bg-green-700
            text-white
            px-4
            py-3
            rounded-xl
            font-semibold
            transition
          "
          >

            <Download
              className="w-5 h-5"
            />

            Open Hall Tickets

          </button>

        </div>

        {/* REPORTS */}

        <div
          className="
          bg-white
          rounded-2xl
          shadow-md
          border
          border-gray-100
          p-7
          hover:shadow-xl
          transition
        "
        >

          <div
            className="
            flex
            items-center
            justify-between
            mb-5
          "
          >

            <div
              className="
              p-3
              rounded-xl
              bg-purple-100
            "
            >

              <BarChart3
                className="
                w-8
                h-8
                text-purple-700
              "
              />

            </div>

            <span
              className="
              text-xs
              font-semibold
              bg-purple-50
              text-purple-700
              px-3
              py-1
              rounded-full
            "
            >
              REPORTS
            </span>

          </div>

          <h2
            className="
            text-2xl
            font-bold
            text-purple-700
            mb-3
          "
          >
            Reports & Exports
          </h2>

          <p
            className="
            text-gray-600
            leading-relaxed
            mb-6
          "
          >
            Export reports, payment data,
            analytics and downloadable sheets.
          </p>

          <button
            onClick={() =>
              alert(
                "Reports module coming soon"
              )
            }
            className="
            w-full
            flex
            items-center
            justify-center
            gap-2
            bg-purple-600
            hover:bg-purple-700
            text-white
            px-4
            py-3
            rounded-xl
            font-semibold
            transition
          "
          >

            <FileSpreadsheet
              className="w-5 h-5"
            />

            Open Reports

          </button>

        </div>

      </div>

    </AdminLayout>

  );

};

export default Downloads;