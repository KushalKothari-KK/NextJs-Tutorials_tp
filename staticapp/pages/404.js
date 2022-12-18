import Link from "next/link";
const ErrorPage = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>We are sorry, page not found!</h2>
          <p>The page you are looking might been removede</p>
          <Link href="/">Back To Homepage</Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
