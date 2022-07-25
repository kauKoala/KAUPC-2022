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
        <title>2022 한국항공대학교 프로그래밍 경진대회</title>
        <meta name="title" property="og:title" content="제2회 한국항공대학교 프로그래밍 경진대회" />
        <meta
          name="description"
          property="og:description"
          content="프로그래밍에 관심이 있다면, 지금 바로 도전해보세요."
        />
        <meta
          name="image"
          property="og:image"
          content="https://user-images.githubusercontent.com/26535030/180230182-b010a812-f1d6-4dc2-94d7-4276d0bdea5d.png"
        />
        <meta name="url" property="og:url" content="https://kaupc2022.netlify.app/" />
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
    background: linear-gradient(192deg, #111418, #0e0d3e);
    background-size: 400% 400%;
    -webkit-animation: animateBackground 5s ease infinite;
    -moz-animation: animateBackground 5s ease infinite;
    animation: animateBackground 5s ease infinite;
    z-index: -2;
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
