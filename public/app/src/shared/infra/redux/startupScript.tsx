import { ApplicationStore } from '../../..';
import { getUserProfile } from '../../../modules/users/redux/operators';

function initialReduxStartupScript(store: ApplicationStore): void {
  store.dispatch(getUserProfile());
}

export { initialReduxStartupScript };
