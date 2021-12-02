import Layout from "../components/Layout";
import "../styles/globals.css";
import { Provider } from "next-auth/client";


function MyApp({ Component, pageProps }) {

  return (
    <Provider options={{ clientMaxAge: 0 }} session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
