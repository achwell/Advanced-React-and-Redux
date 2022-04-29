const f = ({dispatch}) => next => action => {

    if (!action || !action.payload || !action.payload.then) {
        //Doesn't have a Promise as payload
        return next(action);
    }

    //Wait for promise to resolve, create a new action with that data and dispatch it
    action.payload.then((response) => dispatch({...action, payload: response}))
}
export default f;