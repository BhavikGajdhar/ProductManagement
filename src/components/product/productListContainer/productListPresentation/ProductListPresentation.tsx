import { Link } from "react-router-dom";
import { debounce } from "lodash";

const ProductListPresentation = (props: any) => {
  const onChangeSearch = debounce((value: any) => {
    let trimmedText = value.trim();
    if (trimmedText.length >= 2) {
      props.searchValue(trimmedText);
    }
    if (value === "") {
      props.searchValue("");
    }
  }, 750);

  return (
    <>
      <div className="bg-gray-100 pt-6">
        <input
          type="text"
          name="searchIdol"
          className="w-1/4 border border-gray-300 rounded-md mx-10 px-4 py-1"
          placeholder="Search..."
          autoComplete="off"
          onChange={(e) => onChangeSearch(e.target.value)}
        />
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
      </div>
    </>
  );
};

export default ProductListPresentation;
