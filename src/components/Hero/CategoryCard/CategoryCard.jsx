import PropTypes from "prop-types";
import styles from "./CategoryCard.module.scss";
import UrlIcon from "../../common/UrlIcon";

const CategoryCard = ({ category }) => {
  const {name} = category;
  
  return (
    <section className={styles.wrapper}>
      <UrlIcon
        url={category.url}
        style={{ width: 48, height: 48, backgroundColor: category.color }}
      />
      <p className={styles.name}>{name}</p>
    </section>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryCard;
