import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "../../Components/Shared/ProuductCard/ProductCard";

const AllProducts = () => {
  const axiosPublic = useAxios();
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [size, setSize] = useState(2);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axiosPublic
      .get(`/allProducts?index=10&limit=10`)
      .then((res) => setItems(res.data));
    axiosPublic.get("/brands").then((res) => setBrands(res.data.brands));
  }, [axiosPublic]);
  console.log(items);

  const fetchMoreData = () => {
    axiosPublic.get(`/allProducts?size=${size}&limit=10`).then((res) => {
      setItems((prevItems) => [...prevItems, ...res.data]);
      res.data.length > 0 ? setHasMore(true) : setHasMore(false);
    });
    setSize((prevSize) => prevSize + 1);
  };

  return (
    <div className="max-w-7xl mx-auto my-16">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* slide bar */}
        <div className="text-center">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />

          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Pick Brand
            </option>
            {brands.map((brand, idx) => (
              <option key={idx}>{brand}</option>
            ))}
          </select>
        </div>
        {/* card div */}
        <div className="md:col-span-2 lg:col-span-3">
          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={
              <span className="loading loading-spinner text-primary"></span>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {items &&
                items.map((item) => (
                  <ProductCard product={item} key={item._id} />
                ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
