import { useEffect, useState } from "react";

import Search from "./components/Search";
import Sort from "./components/Sort";
import Description from "./components/Description";
import Pagination from "./components/Pagination";

function App() {
  const [products, setProducts] = useState([]);
  const [fullArr, setfullArr] = useState([]);
  const [selected, setSelected] = useState(2);
  const [wishList, setWishList] = useState([]);
  const [mainProducts, setMainProducts] = useState(true);
  const [description, setDescription] = useState(false);
  async function fetchData(url) {
    const data = await fetch(url);
    if (data.status == 200) {
      const res = await data.json();
      setProducts(res.slice(0, 6));
      setfullArr(res);
    } else {
      return [];
    }
  }
  useEffect(() => {
    fetchData("https://fakestoreapi.com/products");
  }, []);
  return (
    <div>
      <div className="flex">
        <div className="w-screen border-2 h-screen ">
          <Sort
            setSelected={setSelected}
            products={products}
            allProducts={fullArr}
            setProducts={setProducts}
            wishList={wishList}
            setWishList={setWishList}
            mainProducts={mainProducts}
            setMainProducts={setMainProducts}
            setDescription={setDescription}
          />
          <Description
            wishList={wishList}
            setWishList={setWishList}
            allProducts={fullArr}
            selected={selected}
            setMainProducts={setMainProducts}
            description={description}
            setDescription={setDescription}
          />
          <Pagination
            allProducts={fullArr}
            products={products}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
