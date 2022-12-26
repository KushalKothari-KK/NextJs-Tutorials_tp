import Header from "../components/Header";
import Head from "next/head";
const index = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Next Js Website" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript Next.js React Js"
        />
        <meta name="author" content="Kushal Kothari" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Header />
    </>
  );
};

export default index;
