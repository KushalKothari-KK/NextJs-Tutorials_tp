import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const router = useRouter();

  const handleInput = () => {
    router.push("/");
  };

  useEffect(() => {
    setTimeout(() => {
      handleInput();
    }, 3000);
  }, []);

  return (
    <>
      <Navbar />
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>We are sorry, page not found!</h2>
          <p>The page you are looking might been removede</p>
          {/* <Link href="/"><a>Back To Homepage</a></Link> */}
          <a onClick={handleInput}>Back To Homepage</a>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
