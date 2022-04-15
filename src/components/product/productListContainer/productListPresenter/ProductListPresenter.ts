import { Subject } from "rxjs/internal/Subject";

/** store data in subject make observable */
const searchValue: Subject<any> = new Subject();

export const ProductListPresenter = {
/** Observable value use asObservable */
  searchValueData$: () => searchValue.asObservable(),
};

/**  searching value  check   */
export const searchingValue = (value: any) => {
  if (value !== undefined) {
    searchValue.next(value);
  }
};
