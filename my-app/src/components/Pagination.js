import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function Pagination({ allProducts, products, setProducts }) {
  const [active, setActive] = useState(0);
  const [start, setStart] = useState(1);
  const [last, setLast] = useState(6);
  console.log(allProducts);
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className=" sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{start}</span> to{" "}
            <span className="font-medium">{last}</span> of{" "}
            <span className="font-medium">20</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            {[0, 1, 2, 3].map((el) => {
              return (
                <a
                  aria-current="page"
                  className={
                    el == active
                      ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                      : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  }
                  onClick={(e) => {
                    setActive(e.target.innerText);
                    setProducts(
                      allProducts.slice(
                        6 * e.target.innerText,
                        6 * e.target.innerText + 6
                      )
                    );
                    setStart(6 * e.target.innerText);

                    6 * e.target.innerText + 6 < 20
                      ? setLast(6 * e.target.innerText + 6)
                      : setLast(20);
                  }}
                >
                  {el}
                </a>
              );
            })}
          </nav>
        </div>
        <div></div>
      </div>
    </div>
  );
}
