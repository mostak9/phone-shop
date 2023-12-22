import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import { IoReturnUpBackSharp } from "react-icons/io5";

const ProductDetails = () => {
  const axiosPublic = useAxios();
  const params = useParams();
  const navigate = useNavigate();
  const { data: product, isLoading } = useQuery({
    queryKey: ["productDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/productDetails/${params.id}`);
      return res.data;
    },
  });
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
      <button
        onClick={() => navigate(-1)}
        className="btn btn-link flex items-center gap-1 btn-wide"
      >
        <IoReturnUpBackSharp className="text-2xl" /> Back
      </button>
      <div className="card bg-base-100">
        <figure>
          <img src={img_url} alt="Movie" />
        </figure>
        <div className="card-body space-y-14">
          <div className="text-center">
          <h2 className="text-xl font-medium text-gray-500">{brand}</h2>
          <p className="text-2xl font-bold text-black">{model}</p>
          <p className="text-xl font-bold">
            <span className="font-bold">Price: </span>$ {approx_price_EUR}
          </p>
          </div>

          <div className="overflow-x-auto">
            <table className="table table-zebra text-center">
              {/* head */}
              <thead>
                <tr className="text-center">
                  <th colSpan={2} className="text-2xl font-medium">Specifications</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>Announced</th>
                  <td>{announced}</td>
                  
                </tr>
                {/* row 2 */}
                <tr>
                  <th>Status</th>
                  <td>{status}</td>
                 
                </tr>
                {/* row 3 */}
                <tr>
                  <th>Internal Memory</th>
                  <td>{internal_memory}</td>
                  
                </tr>
                {/* row 4 */}
                <tr>
                  <th>RAM</th>
                  <td>{RAM}</td>
                  
                </tr>
                {/* row 5 */}
                <tr>
                  <th>Primary Camera</th>
                  <td>{primary_camera}</td>
                  
                </tr>
                {/* row 6 */}
                <tr>
                  <th>Secondary Camera</th>
                  <td>{secondary_camera}</td>
                  
                </tr>
                {/* row 7 */}
                <tr>
                  <th>Display Resolution</th>
                  <td>{display_resolution}</td>
                  
                </tr>
                {/* row 8 */}
                <tr>
                  <th>Display Size</th>
                  <td>{display_size}</td>
                  
                </tr>
                {/* row 9 */}
                <tr>
                  <th>Display Type</th>
                  <td>{display_type}</td>
                  
                </tr>
                {/* row 10 */}
                <tr>
                  <th>OS</th>
                  <td>{OS}</td>
                  
                </tr>
                {/* row 11 */}
                <tr>
                  <th>CPU</th>
                  <td>{CPU}</td>
                  
                </tr>
                {/* row 12 */}
                <tr>
                  <th>Chipset</th>
                  <td>{Chipset}</td>
                  
                </tr>
                {/* row 13 */}
                <tr>
                  <th>SIM</th>
                  <td>{SIM}</td>
                  
                </tr>
                {/* row 14 */}
                <tr>
                  <th>WLAN</th>
                  <td>{WLAN}</td>
                  
                </tr>
                {/* row 15 */}
                <tr>
                  <th>Network Technology</th>
                  <td>{network_technology}</td>
                  
                </tr>
                {/* row 16 */}
                <tr>
                  <th>Network Speed</th>
                  <td>{network_speed}</td>
                  
                </tr>
                {/* row 17 */}
                <tr>
                  <th>Dimensions</th>
                  <td>{dimentions}</td>
                  
                </tr>
                {/* row 18 */}
                <tr>
                  <th>Wight</th>
                  <td>{weight_g}g</td>
                  
                </tr>
                {/* row 19 */}
                <tr>
                  <th>Color</th>
                  <td>{colors}</td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
