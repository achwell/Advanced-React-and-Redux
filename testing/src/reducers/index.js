import { combineReducers} from "redux";
import commentsReduces from "reducers/comments";
import authReducer from "reducers/auth";

export default combineReducers({
    comments: commentsReduces,
    auth: authReducer
})