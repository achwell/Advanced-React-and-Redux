import commentsReducers from "reducers/comments";
import {SAVE_COMMENT} from 'actions/types';

it("handles action of type SAVE_COMMENT", () => {
    const payload = "New Comment";

    const action = {
        type: SAVE_COMMENT,
        payload: payload
    };

    const newState = commentsReducers([], action);

    expect(newState).toEqual([payload]);
});


it("handles action of unknown type", () => {
    const newState = commentsReducers([], {type: "j<hcjafgsc"});

    expect(newState).toEqual([]);
});