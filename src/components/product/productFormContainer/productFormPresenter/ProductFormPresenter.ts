import { Subject } from "rxjs/internal/Subject";

/** store data in subject make observable */
const addToCartData: Subject<any> = new Subject();

export const ProductFormPresenter = {
  /** Observable value use asObservable */
  addToCartData$: () => addToCartData.asObservable(),
};

/** check the addToCard value */
export const addToCart = (value: any) => {
  if (value) {
    addToCartData.next(value);
  }
};
