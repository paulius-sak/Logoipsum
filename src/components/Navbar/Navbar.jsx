import styles from "./Navbar.module.scss";
import Logo from "../../assets/logo.svg";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import { Link } from "react-router-dom";


const Navbar = ({ links }) => {
  return (
    <section className={styles.wrapper}>
      <section className={styles.logoMenuWrapper}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <nav className={styles.menu}>
          <ul className={styles.links}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <Link to={link.href}>{link.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
      <section className={styles.buttonWrapper}>
        <Button>Login / Sign Up</Button>
      </section>
    </section>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      href: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
