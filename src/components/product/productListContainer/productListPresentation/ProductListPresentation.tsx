import { Link } from "react-router-dom";
import { debounce } from "lodash";
import { Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import {
  ProductListPresenter,
  searchingValue,
} from "../productListPresenter/ProductListPresenter";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const ProductListPresentation = (props: any) => {

  useEffect(() => {
    /** subscribe the asObservable value passed to  props of  listContainer */
    ProductListPresenter.searchValueData$().subscribe((res) => {
      props.searchValue(res);
    });
  });

  /** searching value passed to presenter */
  const onChangeSearch = debounce((value: any) => {
    let trimmedText = value.trim(); 
    if (trimmedText.length >= 2) {
      searchingValue(trimmedText);
    }
    if (value === "") {
      searchingValue("");
    }
  }, 750);

  /** dropdown value assign on dropdown filed  */
  const filterData = [
    {
      name: "Mens",
      value: "mens",
    },
    {
      name: "Casual",
      value: "casual",
    },
    {
      name: "Clear",
      value: "",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 pt-6">
        <input
          type="text"
          name="search"
          className="w-1/4 border border-gray-300 rounded-md mx-10 px-4 py-1"
          placeholder="Search..."
          autoComplete="off"
          onChange={(e) => onChangeSearch(e.target.value)}
        />
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              Options
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {filterData.map((data: any) => {
                  return (
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                          onClick={() => onChangeSearch(data.value)}
                        >
                          {data.name}
                        </a>
                      )}
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-10 py-6 gap-8 bg-gray-100 flex-grow overflow-y-auto">
        {props.Values.data &&
          props.Values.data.map((product: any) => {
            return (
              <Link key={product.id} to={`/details/${product.id}`}>
                <div className="bg-white shadow-lg transition-all flex flex-col px-8 py-3 rounded-lg cursor-pointer h-full">
                  <img
                    className="w-full h-full object-center object-contain"
                    src={product.image}
                    alt=""
                  />
                  <h4 className="font-semibold text-base pt-4 pb-1 line-clamp-1">
                    {product.title}
                  </h4>
                  <div className="py-4 flex items-center justify-between">
                    <p className="font-bold">${product.price}</p>
                    <p>
                      {product.rating.rate}/{product.rating.count}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        {props.Values.data.length === 0 && <div> No Data Found</div>}
      </div>
    </>
  );
};

export default ProductListPresentation;
