import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css";
import Image from "next/image";
const About = () => {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1 className={styles.mainHeading}>About Us</h1>
        <h2 style={{ color: "green" }}>About SubHeading</h2>
        <h3>About Styled-jsx</h3>
        <Image
          src="/demo1.jpg"
          width="500"
          height="300"
          alt="About Image"
        ></Image>
        {/*  internal */}
        <Image
          src="https://images.pexels.com/photos/257897/pexels-photo-257897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          width="500"
          height="300"
          alt="About Image"
        ></Image>
        {/* external */}
      </div>
      <style jsx>
        {`
          h3 {
            color: cyan;
          }
        `}
      </style>
    </>
  );
};

export default About;
