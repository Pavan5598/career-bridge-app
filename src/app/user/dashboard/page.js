// "use client";

// import { useEffect, useState } from "react";

// export default function UserDashboard() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const fetchProfile = async () => {
//     try {
//       const res = await fetch(
//         "/api/user/profile"
//       );

//       const data = await res.json();

//       if (data.success) {
//         setUser(data.user);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleLogout = async () => {
//     await fetch("/api/auth/logout", {
//       method: "POST",
//     });

//     window.location.href = "/login";
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="bg-white shadow border-b">
//         <div className="max-w-6xl mx-auto p-4 flex justify-between">
//           <h1 className="text-2xl font-bold">
//             User Dashboard
//           </h1>

//           <button
//             onClick={handleLogout}
//             className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer"
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto p-6">
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-4">
//             Profile Information
//           </h2>

//           {user && (
//             <>
//               <p>
//                 <strong>Name:</strong>{" "}
//                 {user.fullName}
//               </p>

//               <p>
//                 <strong>Email:</strong>{" "}
//                 {user.email}
//               </p>

//               <p>
//                 <strong>Joined:</strong>{" "}
//                 {new Date(
//                   user.createdAt
//                 ).toLocaleDateString()}
//               </p>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }