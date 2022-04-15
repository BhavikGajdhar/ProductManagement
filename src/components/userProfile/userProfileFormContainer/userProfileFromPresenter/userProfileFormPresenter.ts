
import { Subject } from "rxjs/internal/Subject";

/** store data in subject make observable */
const userProfile: Subject<any> = new Subject();
export const userProfileFormPresenter = {
  /** Observable value use asObservable */
  userProfile$: () => userProfile.asObservable(),
}
/** check the userProfile value */
export const userProfileData = (value: any) => {
    if (value) {
        userProfile.next(value);
    }
  };