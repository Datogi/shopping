import { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon, PlusSmIcon } from "@heroicons/react/solid";
import Input from "./Input";
import Search from "./Search";

const breadcrumbs = [{ id: 1, name: "Men", href: "#" }];
const filters = [
  {
    id: "price",
    name: "Start Price",
    options: [
      { value: "0", label: "0" },
      { value: "50", label: "50" },
      { value: "100", label: "100" },
      { value: "150", label: "150" },
      { value: "200", label: "200" },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "men's clothing", label: "men's clothing" },
      { value: "jewelery", label: "jewelery" },
      { value: "electronics", label: "electronics" },
      { value: "women's clothing", label: "women's clothing" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sort({
  products,
  setProducts,
  allProducts,
  setSelected,
  wishList,
  setWishList,
}) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(true);

  return (
    <div className="bg-white">
      <div>
        <Search wishList={wishList} />

        <main className="max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8">
          <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
              >
                <span className="text-sm font-medium text-gray-700">
                  Filters
                </span>
                <PlusSmIcon
                  className="flex-shrink-0 ml-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </button>

              <div className="hidden lg:block">
                <form className="divide-y divide-gray-200 space-y-10">
                  {filters.map((section, sectionIdx) => (
                    <div
                      key={section.name}
                      className={sectionIdx === 0 ? null : "pt-10"}
                    >
                      <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">
                          {section.name}
                        </legend>
                        <div className="pt-6 space-y-3">
                          <Input
                            people={section.options}
                            id={section.id}
                            products={products}
                            setProducts={setProducts}
                            allProducts={allProducts}
                          />
                        </div>
                      </fieldset>
                    </div>
                  ))}
                </form>
              </div>
            </aside>

            <section
              aria-labelledby="product-heading"
              className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3"
            >
              <h2 id="product-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                {products.map((product, productIndx) => (
                  <div
                    key={product.id}
                    className="group  relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
                    onClick={() => {
                      document
                        .querySelector(".bg-white")
                        .classList.add("hidden");
                      setSelected(product.id);
                      document
                        .querySelector(".main")
                        .classList.remove("hidden");
                    }}
                  >
                    <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                      />
                    </div>
                    <div className="flex-1 p-4 space-y-2 flex flex-col">
                      <h3 className="text-sm font-medium text-gray-900">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </a>
                      </h3>
                      <p className="text-sm text-gray-500">
                        {product.description}
                      </p>
                      <div className="flex-1 flex flex-col justify-end">
                        <p className="text-base font-medium text-gray-900">
                          {product.price}$
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
