import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";
// import { Manrope } from "next/font/google";

// const manrope = Manrope({
//   subsets: ["latin"],
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" min-h-full flex flex-col">

        <Navbar />
        {children}
        <Footer />
         <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
          }} />
      </body>
    </html>
  );
}