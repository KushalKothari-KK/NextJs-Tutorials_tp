import Link from "next/link";

const index = () => {
  return (
    <>
      <nav>
        <ul className="menu_bar">
          <li>
            <Link href="/">
              <h4>Home</h4>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <h4>About</h4>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <h4>Contact</h4>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <h4>Blog</h4>
            </Link>
          </li>
        </ul>
      </nav>
      <header className="header">
        <div className="brand_box"></div>
        <div className="text_box">
          <h1 className="heading_primary">
            <span className="heading_primary_main">Welcome to Next.Js</span>
            <span> Love with JavaScript</span>
          </h1>
          <a href="#" className="btn btn_white btn_animated">
            Portfolio
          </a>
        </div>
      </header>
    </>
  );
};

export default index;
