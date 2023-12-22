import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "../../Components/Shared/ProuductCard/ProductCard";

const AllProducts = () => {
  const axiosPublic = useAxios();
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [size, setSize] = useState(2);

  useEffect(() => {
    axiosPublic
      .get(`/allProducts?index=10&limit=10`)
      .then((res) => setItems(res.data));
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
    <div className="max-w-7xl mx-auto">
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<span className="loading loading-spinner text-primary"></span>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items &&
            items.map((item) => <ProductCard product={item} key={item._id} />)}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default AllProducts;
