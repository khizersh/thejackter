import "./style.css";

const CategoryCard = ({ title, img, link, isLeftAlign }) => {
  return (
    <div>
      <img className="cat-img" src={img} alt={title} width={400} />
      <div
        className={isLeftAlign ? "position-absolute-left" : "position-absolute"}
      >
        <h2 className="font-weight-bold">{title}</h2>
        <a href={link}>View Category</a>
      </div>
    </div>
  );
};

export default CategoryCard;
