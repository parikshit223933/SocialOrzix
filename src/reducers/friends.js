import {
	FETCH_FRIENDS_START,
	FETCH_FRIENDS_SUCCCESS,
	FETCH_FRIENDS_FAILURE,
    ADD_FRIEND,
    REMOVE_FRIEND
} from "../actions/actionTypes";

const defaultProfileState = {
	inProgress: false,
	error: null,
	success: null,
	list: []
};

export default function friends(state = defaultProfileState, action) {
	switch (action.type) {
		case FETCH_FRIENDS_START:
			return {
				...state,
				inProgress: true
			};
		case FETCH_FRIENDS_SUCCCESS:
			return {
				...state,
				inProgress: false,
				error: null,
				success: true,
				list: [...action.friends]
			};
		case FETCH_FRIENDS_FAILURE:
			return {
				...state,
				inProgress: false,
				error: action.error,
				success: false,
            };
        case ADD_FRIEND:
            return {
                ...state,
                list:[action.user, ...state.list]
            }
        case REMOVE_FRIEND:
            const new_list=[]
            state.list.map((friendship)=>
            {
                if(friendship.from_user!==action.userId&&friendship.to_user._id!==action.userId)
                {
                    new_list.push(friendship);
                }
            });

            return {
                ...state,
                list:new_list
            }
		default:
			return {
				...state
			};
	}
}
