import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
