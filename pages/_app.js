import styled from "@emotion/styled";
import Head from "next/head";
import "styles/globals.css";
import "styles/reset.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.4/dist/web/static/pretendard-dynamic-subset.css"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

const Layout = styled.div`
  height: 100%;

  & {
    background: linear-gradient(192deg, #111418,  #0e0d3e);
    background-size: 400% 400%;

    -webkit-animation: animateBackground 5s ease infinite;
    -moz-animation: animateBackground 5s ease infinite;
    animation: animateBackground 5s ease infinite;
  }

  @-webkit-keyframes animateBackground {
    0% {
      background-position: 0% 17%;
    }
    50% {
      background-position: 100% 84%;
    }
    100% {
      background-position: 0% 17%;
    }
  }
  @-moz-keyframes animateBackground {
    0% {
      background-position: 0% 17%;
    }
    50% {
      background-position: 100% 84%;
    }
    100% {
      background-position: 0% 17%;
    }
  }
  @keyframes animateBackground {
    0% {
      background-position: 0% 17%;
    }
    50% {
      background-position: 100% 84%;
    }
    100% {
      background-position: 0% 17%;
    }
  }
`;

export default MyApp;
