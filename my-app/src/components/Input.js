import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Input({ people, id, products, allProducts, setProducts }) {
  const [selected, setSelected] = useState(people[0]);
  return (
    <select
      className="w-3/4 border-2 border-black"
      id={id}
      onChange={() => {
        setProducts(
          allProducts
            .filter((el) => el.price > document.getElementById("price").value)
            .filter(
              (el) => el.category == document.getElementById("category").value
            )
        );
      }}
    >
      {people.map((el) => {
        return <option>{el.value}</option>;
      })}
    </select>
  );
}

export default Input;
