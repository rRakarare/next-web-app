import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";

export default function Layout({ children }) {
  const [session, loading] = useSession();
  const router = useRouter();
  console.log("layoutsession", session, loading);
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
