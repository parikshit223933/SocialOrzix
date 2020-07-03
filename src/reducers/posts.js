import { UPDATE_POSTS } from '../actions/actionTypes';

export default function (state = [], action) {
    switch (action.type) {
        case UPDATE_POSTS:
            return action.posts;
        default:
            return state;
    }
}
