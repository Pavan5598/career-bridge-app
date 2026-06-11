// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";

// export default function LoginPage() {
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);
//   const [showOtp, setShowOtp] = useState(false);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [otp, setOtp] = useState("");

//   // =========================
//   // STEP 1: LOGIN (ADMIN + USER)
//   // =========================
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!data.success) {
//         toast.error(data.message);
//         return;
//       }

//       toast.success("OTP sent successfully");
//       setShowOtp(true);
//     } catch (err) {
//       toast.error("Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =========================
//   // STEP 2: VERIFY OTP
//   // =========================
//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("/api/auth/verify-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           otp,
//         }),
//       });

//       const data = await res.json();

//       if (!data.success) {
//         toast.error(data.message);
//         return;
//       }

//       toast.success("Login successful");

//       setTimeout(() => {
//         // 👇 ROLE BASED REDIRECT (IMPORTANT)
//         if (data.role === "admin") {
//           router.replace("/admin/dashboard");
//         } else {
//           router.replace("/");
//         }
//       }, 1000);
//     } catch (err) {
//       toast.error("OTP verification failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="w-full max-w-md p-6 shadow-lg rounded-lg">
//         <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

//         {!showOtp ? (
//           <form onSubmit={handleLogin}>
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-3 border mb-3"
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//             />

//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full p-3 border mb-4"
//               value={formData.password}
//               onChange={(e) =>
//                 setFormData({ ...formData, password: e.target.value })
//               }
//             />

//             <button
//               disabled={loading}
//               className="w-full bg-blue-600 text-white p-3 cursor-pointer"
//             >
//               {loading ? "Sending OTP..." : "Login"}
//             </button>
//           </form>
//         ) : (
//           <form onSubmit={handleVerifyOtp}>
//             <p className="text-center mb-3">
//               Enter OTP sent to <b>{formData.email}</b>
//             </p>

//             <input
//               type="text"
//               placeholder="OTP"
//               className="w-full p-3 border mb-4 text-center"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//             />

//             <button
//               disabled={loading}
//               className="w-full bg-green-600 text-white p-3 cursor-pointer"
//             >
//               {loading ? "Verifying..." : "Verify OTP"}
//             </button>
            
//           </form>
//         )}
//         <p className="text-center mt-4 text-sm text-gray-600">
//               Don’t have an account?{" "}
//               <span
//                 onClick={() => router.push("/register")}
//                 className="text-blue-600 font-medium cursor-pointer hover:underline cursor-pointer"
//               >
//                 Register here
//               </span>
//             </p>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";

// export default function AdminLoginPage() {
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);
//   const [showOtp, setShowOtp] = useState(false);

//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");

//   // Send OTP
//   const handleSendOtp = async (e) => {
//     e.preventDefault();

//     if (!email) {
//       return toast.error("Please enter email");
//     }

//     setLoading(true);

//     try {
//       // const res = await fetch("/api/auth/send-otp", {
//       //   method: "POST",
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //   },
//       //   body: JSON.stringify({ email }),
//       // });
//       const res = await fetch("/api/auth/send-otp", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ email }),
// });

// const data = await res.json();

// console.log("SEND OTP RESPONSE:", data);

// if (!res.ok) {
//   toast.error(data.message || "Failed");
//   return;
// }

//       // const data = await res.json();

//       if (!data.success) {
//         toast.error(data.message);
//         return;
//       }

//       toast.success("OTP sent successfully");
//       setShowOtp(true);
//     } catch (error) {
//       toast.error("Failed to send OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Verify OTP
//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();

//     if (!otp) {
//       return toast.error("Please enter OTP");
//     }

//     setLoading(true);

//     try {
//       const res = await fetch("/api/auth/verify-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           otp,
//         }),
//       });

//       const data = await res.json();

//       if (!data.success) {
//         toast.error(data.message);
//         return;
//       }

//       toast.success("Login Successful");

//       // Admin Only Redirect
//       router.replace("/admin/dashboard");
//     } catch (error) {
//       toast.error("OTP verification failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

//         <h1 className="text-3xl font-bold text-center mb-6">
//           Admin Login
//         </h1>

//         <form onSubmit={showOtp ? handleVerifyOtp : handleSendOtp}>
          
//           <input
//             type="email"
//             placeholder="Enter Admin Email"
//             className="w-full p-3 border rounded-lg mb-4 outline-none"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             disabled={showOtp}
//           />

//           {showOtp && (
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               className="w-full p-3 border rounded-lg mb-4 text-center outline-none"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//             />
//           )}

//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full p-3 rounded-lg text-white font-semibold ${
//               showOtp
//                 ? "bg-green-600 hover:bg-green-700"
//                 : "bg-blue-600 hover:bg-blue-700"
//             }`}
//           >
//             {loading
//               ? showOtp
//                 ? "Verifying..."
//                 : "Sending OTP..."
//               : showOtp
//               ? "Verify OTP"
//               : "Send OTP"}
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(data.message);
        return;
      }

      toast.success("OTP Sent");
      setShowOtp(true);
    } catch {
      toast.error("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // const handleVerifyOtp = async (e) => {
  //   e.preventDefault();

  //   setLoading(true);

  //   try {
  //     const res = await fetch("/api/auth/verify-otp", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email,
  //         otp,
  //       }),
  //     });

  //     const data = await res.json();

  //     if (!data.success) {
  //       toast.error(data.message);
  //       return;
  //     }

  //     toast.success("Login Successful");

  //     console.log("Redirecting...");
  //     window.location.href = "/admin/dashboard";
  //   } catch {
  //     toast.error("OTP Verification Failed");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleVerifyOtp = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const res = await fetch("/api/auth/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        otp,
      }),
    });

    const data = await res.json();

    if (!data.success) {
      toast.error(data.message);
      return;
    }

    toast.success("Login Successful");

    localStorage.setItem(
  "user",
  JSON.stringify({
    email,
    role: data.role,
    permissions:
      data.permissions || [],
  })
);

window.location.href = "/dashboard";
  } catch {
    toast.error("OTP Verification Failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          CB Login
        </h1>

        <form
          onSubmit={
            showOtp
              ? handleVerifyOtp
              : handleSendOtp
          }
        >
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            disabled={showOtp}
            className="w-full border p-3 rounded mb-4"
          />

          {showOtp && (
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value)
              }
              className="w-full border p-3 rounded mb-4"
            />
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-3 rounded cursor-pointer"
          >
            {loading
              ? "Please Wait..."
              : showOtp
              ? "Verify OTP"
              : "Send OTP"}
          </button>
        </form>

      </div>
    </div>
  );
}