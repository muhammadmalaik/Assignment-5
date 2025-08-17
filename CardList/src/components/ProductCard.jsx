import Btns from "./button";
export function ProductCard({ cardData }) {
  const { name, price, category, description, image } = cardData;

  return (
    <>
    <div className="card">
  <div className="image_container">
    <img className="image" src={image} alt={name}></img>
  </div>
  <div className="title">
    <span>{name}</span>
  </div>
  <div>
    <span className="product-category">{category}</span>
  </div>
 
  <div>
    <span className="product-desc">{description}</span>
  </div>
  <div className="action">
    <div className="price">
      <span>{price}</span>
    </div>
    <Btns  />
  </div>
</div>
    </>
    
  );
}   