import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>
        Copyright &copy; 2021 <Link to="/about">About</Link>
      </p>
    </footer>
  );
};

export default Footer;
