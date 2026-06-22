
// import {
//   useState
// } from "react";

// const AdminLogin = () => {

//   const [email, setEmail] =
//   useState("");

//   const [password,
//     setPassword] =
//     useState("");

//   const [loading,
//     setLoading] =
//     useState(false);

//   const handleLogin =
//   async (e) => {

//     e.preventDefault();

//     try {

//       setLoading(true);

//       /*
//       |--------------------------------------------------------------------------
//       | TEMP LOGIN
//       |--------------------------------------------------------------------------
//       */

//       if (
//         email === "admin@gmail.com" &&
//         password === "admin123"
//       ) {

//         localStorage.setItem(
//           "admin",
//           "true"
//         );

//         alert(
//           "Login Successful"
//         );

//         window.location.href =
//         "/dashboard";

//       }

//       else {

//         alert(
//           "Invalid Credentials"
//         );

//       }

//     }

//     catch (err) {

//       console.error(err);

//       alert(
//         "Login failed"
//       );

//     }

//     finally {

//       setLoading(false);

//     }

//   };

//   return (

//     <div
//       className="
//       min-h-screen
//       flex
//       items-center
//       justify-center
//       bg-gray-100
//     "
//     >

//       <form
//         onSubmit={handleLogin}
//         className="
//         bg-white
//         p-8
//         rounded-lg
//         shadow-md
//         w-full
//         max-w-md
//       "
//       >

//         <h1
//           className="
//           text-3xl
//           font-bold
//           mb-6
//           text-center
//           text-blue-900
//         "
//         >
//           ADMIN LOGIN
//         </h1>

//         <h4 className="
//           text-3xl
//           font-bold
//           mb-2
//           text-center
//           text-blue-900
//         " >TGECET(WP)-2026</h4>

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) =>
//             setEmail(e.target.value)
//           }
//           className="
//           w-full
//           border
//           p-3
//           mb-4
//           rounded
//         "
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) =>
//             setPassword(e.target.value)
//           }
//           className="
//           w-full
//           border
//           p-3
//           mb-4
//           rounded
//         "
//           required
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="
//           w-full
//           bg-blue-600
//           hover:bg-blue-700
//           text-white
//           p-3
//           rounded
//           transition
//         "
//         >

//           {
//             loading
//             ? "Logging..."
//             : "Login"
//           }

//         </button>

//       </form>

//     </div>

//   );

// };

// export default AdminLogin;











// import { useState } from "react";

// const AdminLogin = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       /*
//       |--------------------------------------------------------------------------
//       | TEMP LOGIN
//       |--------------------------------------------------------------------------
//       */

//       if (email === "admin@gmail.com" && password === "admin123") {
//         localStorage.setItem("admin", "true");
//         alert("Login Successful");
//         window.location.href = "/dashboard";
//       } else {
//         alert("Invalid Credentials");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="
//       min-h-screen
//       flex
//       items-center
//       justify-center
//       bg-cover
//       bg-center
//       bg-no-repeat
//       relative
//     "
//       style={{
//         backgroundImage: "url('/campus-hero.png')", // Replace 'login-bg.jpg' with your actual image filename
//         backgroundAttachment: "fixed"
//       }}
//     >
//       {/* Dark overlay for better text readability */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
//       <form
//         onSubmit={handleLogin}
//         className="
//         relative
//         bg-white
//         p-8
//         rounded-lg
//         shadow-2xl
//         w-full
//         max-w-md
//         z-10
//         backdrop-blur-sm
//         bg-opacity-95
//       "
//       >
//         <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
//           ADMIN LOGIN
//         </h1>

//         <h4 className="text-xl font-bold mb-6 text-center text-gray-700">
//           TGECET(WP)-2026
//         </h4>

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="
//           w-full
//           border
//           border-gray-300
//           p-3
//           mb-4
//           rounded-lg
//           focus:outline-none
//           focus:ring-2
//           focus:ring-blue-500
//           focus:border-transparent
//         "
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="
//           w-full
//           border
//           border-gray-300
//           p-3
//           mb-6
//           rounded-lg
//           focus:outline-none
//           focus:ring-2
//           focus:ring-blue-500
//           focus:border-transparent
//         "
//           required
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="
//           w-full
//           bg-blue-600
//           hover:bg-blue-700
//           text-white
//           p-3
//           rounded-lg
//           transition
//           duration-200
//           disabled:opacity-50
//           disabled:cursor-not-allowed
//           font-semibold
//         "
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;

















// import { useState } from "react";

// const AdminLogin = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
  
//   // Position state (optional - for dynamic positioning)
//   const [position, setPosition] = useState({
//     horizontal: "left", // left, center, right
//     vertical: "center", // top, center, bottom
//     offsetX: 20,
//     offsetY: 0
//   });

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       if (email === "admin@gmail.com" && password === "admin123") {
//         localStorage.setItem("admin", "true");
//         alert("Login Successful");
//         window.location.href = "/dashboard";
//       } else {
//         alert("Invalid Credentials");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Get position classes based on settings
//   const getHorizontalClass = () => {
//     switch(position.horizontal) {
//       case "left": return "justify-start";
//       case "right": return "justify-end";
//       default: return "justify-center";
//     }
//   };

//   const getVerticalClass = () => {
//     switch(position.vertical) {
//       case "top": return "items-start";
//       case "bottom": return "items-end";
//       default: return "items-center";
//     }
//   };

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center bg-no-repeat relative"
//       style={{
//         backgroundImage: "url('/campus-hero.png')",
//         backgroundAttachment: "fixed"
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
//       {/* Customizable Login Box Position */}
//       <div 
//         className={`
//           relative 
//           min-h-screen 
//           flex 
//           ${getVerticalClass()}
//           ${getHorizontalClass()}
//           px-4
//         `}
//       >
//         <div
//           className="
//             bg-white
//             bg-opacity-95
//             p-8
//             rounded-lg
//             shadow-2xl
//             w-full
//             max-w-md
//             backdrop-blur-sm
//             transition-all
//             duration-300
//             hover:shadow-3xl
//           "
//           style={{
//             transform: `translate(${position.offsetX}px, ${position.offsetY}px)`
//           }}
//         >
//           <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
//             ADMIN LOGIN
//           </h1>

//           <h4 className="text-xl font-bold mb-6 text-center text-gray-700">
//             TGECET(WP)-2026
//           </h4>

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="
//               w-full
//               border
//               border-gray-300
//               p-3
//               mb-4
//               rounded-lg
//               focus:outline-none
//               focus:ring-2
//               focus:ring-blue-500
//               focus:border-transparent
//               transition
//             "
//             required
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="
//               w-full
//               border
//               border-gray-300
//               p-3
//               mb-6
//               rounded-lg
//               focus:outline-none
//               focus:ring-2
//               focus:ring-blue-500
//               focus:border-transparent
//               transition
//             "
//             required
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="
//               w-full
//               bg-blue-600
//               hover:bg-blue-700
//               text-white
//               p-3
//               rounded-lg
//               transition
//               duration-200
//               disabled:opacity-50
//               disabled:cursor-not-allowed
//               font-semibold
//             "
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;






























import { useState } from "react";

const AdminLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Login box position
  const [position] = useState({
    horizontal: "center",
    vertical: "top",
    offsetX: 20,
    offsetY: 0
  });

  /*
  |--------------------------------------------------------
  | LOGIN FUNCTION
  |--------------------------------------------------------
  */

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      if (
        email === "admin@gmail.com" &&
        password === "admin123"
      ) {

        localStorage.setItem(
          "adminToken",
          "true"
        );

        alert("Login Successful");

        window.location.href =
          "/dashboard";

      }

      else {

        alert("Invalid Credentials");

      }

    }

    catch (err) {

      console.error(err);

      alert("Login failed");

    }

    finally {

      setLoading(false);

    }

  };

  /*
  |--------------------------------------------------------
  | POSITION CLASSES
  |--------------------------------------------------------
  */

  const getHorizontalClass = () => {

    switch (position.horizontal) {

      case "left":
        return "justify-start";

      case "right":
        return "justify-end";

      default:
        return "justify-center";

    }

  };

  const getVerticalClass = () => {

    switch (position.vertical) {

      case "top":
        return "items-start";

      case "bottom":
        return "items-end";

      default:
        return "items-center";

    }

  };

  return (

    <div
      className="
        min-h-screen
        bg-cover
        bg-center
        bg-no-repeat
        relative
      "
      style={{
        backgroundImage:
          "url('/campus-hero.png')",
        backgroundAttachment:
          "fixed"
      }}
    >

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-black/50"></div>

      {/* LOGIN BOX */}

      <div
        className={`
          relative
          min-h-screen
          flex
          ${getVerticalClass()}
          ${getHorizontalClass()}
          px-4
        `}
      >

        <form

          onSubmit={handleLogin}

          className="
            bg-white/95
            p-8
            rounded-xl
            shadow-2xl
            w-full
            max-w-md
            backdrop-blur-sm
          "

          style={{
            transform: `translate(
              ${position.offsetX}px,
              ${position.offsetY}px
            )`
          }}
        >

          {/* TITLE */}

          <h1
            className="
              text-3xl
              font-bold
              mb-2
              text-center
              text-blue-900
            "
          >
            ADMIN LOGIN
          </h1>

          <h4
            className="
              text-lg
              font-semibold
              mb-6
              text-center
              text-gray-700
            "
          >
            CEEP-2026
          </h4>

          {/* EMAIL */}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
              w-full
              border
              border-gray-300
              p-3
              mb-4
              rounded-lg
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
            required
          />

          {/* PASSWORD */}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="
              w-full
              border
              border-gray-300
              p-3
              mb-6
              rounded-lg
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
            required
          />

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              p-3
              rounded-lg
              font-semibold
              transition
              duration-200
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >

            {
              loading
                ? "Logging in..."
                : "Login"
            }

          </button>

        </form>

      </div>

    </div>

  );

};

export default AdminLogin;