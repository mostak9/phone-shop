import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAxios from "../../../hooks/useAxios";
import ProductCard from "../../Shared/ProuductCard/ProductCard";

const LatestProducts = () => {
  const axiosPublic = useAxios();
  const { data: products, isLoading } = useQuery({
    queryKey: ["latestProducts"],
    queryFn: async () => {
      const products = await axiosPublic.get("/latestProducts");
      return products.data;
    },
  });

  if (isLoading)
    return (
      <div className="min-h-96 flex items-center justify-center">
        <span className="loading loading-bars loading-lg text-main"></span>
      </div>
    );

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Latest Products"
          subtitle="Grab the latest models arrive in market"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
           {
            products.map(product => <ProductCard key={product._id} product={product}/>)
           }
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
