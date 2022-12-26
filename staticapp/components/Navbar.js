import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="menu-bar">
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
    </>
  );
};

export default Navbar;
