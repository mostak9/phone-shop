import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";

const ProductDetails = () => {
    const axiosPublic = useAxios();
    const params = useParams();
    const {data: product, isLoading} = useQuery({
        queryKey: ['productDetails'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/productDetails/${params.id}`)
            return res.data;
        }
    })
    if (isLoading)
    return (
      <div className="min-h-96 flex items-center justify-center">
        <span className="loading loading-bars loading-lg text-main"></span>
      </div>
    );

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
  } = product;

  
  return (
    
        <div className="max-w-7xl mx-auto my-14">
          <div className="card bg-base-100">
            <figure>
              <img src={img_url} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{brand}</h2>
              <p>{model}</p>
              <p className="text-base text-gray-500">
                <span className="font-bold">Announced: </span>
                {announced}
              </p>
              <p className="text-base text-gray-500">
                <span className="font-bold">Status: </span>
                {status}
              </p>
              <p className="text-base text-gray-500">
                <span className="font-bold">Internal Memory: </span>
                {internal_memory}
              </p>
              <p className="text-base text-gray-500">
                <span className="font-bold">RAM: </span>
                {RAM}
              </p>
              <p className="text-base text-gray-500">
                <span className="font-bold">Primary Camera: </span>
                {primary_camera}
              </p>
              <p className="text-base text-gray-500">
                <span className="font-bold">Secondary Camera: </span>
                {secondary_camera}
              </p>
              <p className="text-base text-gray-500">
                <span className="font-bold">Display Resolution: </span>
                {display_resolution}
              </p>
              <p className="text-base text-gray-500">
                <span className="font-bold">Display Size: </span>
                {display_size}
              </p>
              <p className="text-base text-gray-500">
                <span className="font-bold">Display Type: </span>
                {display_type}
              </p>
              <p className="text-base text-gray-500">
                <span className="font-bold">OS: </span>
                {OS}
              </p>
              <p className="text-base text-gray-500">
                <span className="font-bold">CPU: </span>
                {CPU}
              </p>
              <p className="text-base text-gray-500">
                <span className="font-bold">Chipset: </span>
                {Chipset}
              </p>
              <p className="text-base text-gray-500">
                <span className="font-bold">SIM: </span>
                {SIM}
              </p>
              <p className="text-base text-gray-500">
                <span className="font-bold">WLAN: </span>
                {WLAN}
              </p>
              <p className="text-base text-gray-500">
                <span className="font-bold">Network Technology: </span>
                {network_technology}
              </p>
              <p className="text-base text-gray-500">
                <span className="font-bold">Network Speed: </span>
                {network_speed}
              </p>
              <p className="text-base text-gray-500">
                <span className="font-bold">Dimensions: </span>
                {dimentions}
              </p>
              <p className="text-base text-gray-500">
                <span className="font-bold">Wight: </span>
                {weight_g}g
              </p>
              <p className="text-base text-gray-500">
                <span className="font-bold">Color: </span>
                {colors}
              </p>
              <p className="text-xl font-bold text-gray-500 ">
                <span className="font-bold">Price: </span>
                $ {approx_price_EUR}
              </p>
            </div>
          </div>
        </div>
     
  );
};

export default ProductDetails;
