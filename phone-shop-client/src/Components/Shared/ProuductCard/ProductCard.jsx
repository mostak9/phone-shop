import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="card border-2 bg-base-100 hover:shadow-xl">
        <figure className="px-10 pt-10 h-1/3 overflow-hidden transition duration-300 transform hover:scale-150">
          <img
            src={product.img_url}
            alt="Shoes"
            className=" h-full w-1/4"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product.model}</h2>
          <p className="text-xl">
           {product.brand}
          </p>
          <div className="card-actions">
            <button className="btn bg-main text-white btn-wide">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
