import Layout from "../components/Layout";
import Auth from "../components/Auth";
import "../styles/globals.css";
import { Provider } from "next-auth/client";

import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

const theme = {
  colors: {
    primary: "#1b2845ff",
    light: "#dcd8e4",
    dark: "#19181d",
    danger: "#a71a1a",
    success: "#116e2d",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <Provider options={{ clientMaxAge: 0 }} session={pageProps.session}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Auth>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Auth>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
