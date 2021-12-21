import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Container } from "./Basic/Container/container-styles.js";

export default function Layout({ children, pageProps }) {
  return (
    <div>
      <Sidebar {...pageProps} />
      <Container>{children}</Container>
    </div>
  );
}
