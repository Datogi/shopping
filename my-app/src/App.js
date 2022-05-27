import { useEffect, useState } from "react";

import Search from "./components/Search";
import Sort from "./components/Sort";
import Description from "./components/Description";

function App() {
  const [products, setProducts] = useState([]);
  const [fullArr, setfullArr] = useState([]);
  const [selected, setSelected] = useState(2);
  const [wishList, setWishList] = useState([]);
  async function fetchData(url) {
    const data = await fetch(url);
    if (data.status == 200) {
      const res = await data.json();
      setProducts(res);
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
          />
          <Description
            wishList={wishList}
            setWishList={setWishList}
            allProducts={fullArr}
            selected={selected}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
