import {
	FETCH_USER_PROFILE_START,
	USER_PROFILE_SUCCESS,
	USER_PROFILE_FAILURE
} from "../actions/actionTypes";

const initialState={
    user:{},
    error:null,
    success:null,
    inProgress:false
}

export default function profile(state = initialState, action) {
	switch (action.type) {
		case FETCH_USER_PROFILE_START:
            return {
                ...state,
                inProgress:true
            }
		case USER_PROFILE_SUCCESS:
            return{
                ...state,
                user:action.user,
                inProgress:false,
                success:true,
                error:null,
            }
		case USER_PROFILE_FAILURE:
            return{
                ...state,
                error:action.error,
                inProgress:false,
                success:false
            }
        default:
            return{
                ...state
            }
	}
}
