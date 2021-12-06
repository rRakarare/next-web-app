import Footer from "./Footer";
import Navbar from "./Navbar";
import {Container} from "./Basic/Container/container-styles.js"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Container>
      {children}
      </Container>
    </div>
  );
}
