import styles from "./Navbar.module.scss";
import Logo from "../../assets/logo.svg";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const Navbar = ({ links }) => {
  return (
    <section className={styles.wrapper}>
      <section className={styles.logoMenuWrapper}>
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <nav className={styles.menu}>
          <ul className={styles.links}>
            {links.map((link) => {
              return (
                <a href={link.href} key={link.id}>
                  {link.title}
                </a>
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
