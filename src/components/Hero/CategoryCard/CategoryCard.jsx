import PropTypes from "prop-types";
import styles from "./CategoryCard.module.scss";

const CategoryCard = ({ category }) => {
  const { name, icon } = category;
  const Icon = icon;
  return (
    <section className={styles.wrapper}>
      <Icon fontSize={48} color={category.color} />
      <p className={styles.name}>{name}</p>
    </section>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryCard;
