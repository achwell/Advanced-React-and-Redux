import {FETCH_COMMENTS, SAVE_COMMENT} from 'actions/types';

const comments = function (state = [], action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            let comments = action.payload.data.map(comment => comment.name);
            return [...state, ...comments];
        case SAVE_COMMENT:
            return [...state, action.payload];
        default:
            return state;
    }
};
export default comments