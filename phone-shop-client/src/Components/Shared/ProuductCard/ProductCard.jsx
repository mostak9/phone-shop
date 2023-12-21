import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    brand,
    model,
    network_technology,
    network_speed,
    announced,
    status,
    dimentions,
    weight_g,
    SIM,
    display_type,
    display_resolution,
    display_size,
    OS,
    CPU,
    Chipset,
    internal_memory,
    RAM,
    primary_camera,
    secondary_camera,
    WLAN,
    colors,
    approx_price_EUR,
    img_url,
    _id
  } = product;


  return (
    <div>
      <div className="card border-2 bg-base-100 hover:shadow-xl">
        <figure className="px-10 pt-10 h-1/3 overflow-hidden transition duration-300 transform hover:scale-150">
          <img src={product.img_url} alt="Shoes" className=" h-full w-1/4" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{model}</h2>
          <p className="text-xl">{brand}</p>
          <div className="card-actions">
            <Link
              className="btn bg-main text-white btn-wide"
              to={`/productDetails/${_id}`}
            >
              Details
            </Link>
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
