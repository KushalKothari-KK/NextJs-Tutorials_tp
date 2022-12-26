import Link from "next/link";
import Navbar from "../../components/Navbar";

const blog = ({ data }) => {
  return (
    <>
      <Navbar />
      {data.slice(0, 5).map((blog) => {
        return (
          <div key={blog.id} className="ssr-styles">
            <h3>{blog.id}</h3>
            <Link href={`/blog/${blog.id}`}>
              <h2>{blog.title}</h2>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default blog;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
