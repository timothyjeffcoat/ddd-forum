import * as actionCreators from '../actionCreators';
import { usersService } from '../../services';
import { ApplicationStore } from '../../../..';

function getUserProfile() {
  return async (dispatch: ApplicationStore['dispatch']) => {
    dispatch(actionCreators.gettingUserProfile());
    try {
      const user = await usersService.getCurrentUserProfile();
      dispatch(actionCreators.gettingUserProfileSuccess(user));
    } catch (err) {
      const message = '';
      console.log(err);
      dispatch(actionCreators.gettingUserProfileFailure(message));
    }
  };
}

export { getUserProfile };
