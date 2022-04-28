import React, {useEffect} from "react"
import {connect} from "react-redux";

const RequireAuth = (ChildComponent) => {

    const ComposedComponent = (props) => {

        useEffect(() => {
            shouldNavigateAway();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        useEffect(() => {
            shouldNavigateAway();
        });

        const shouldNavigateAway = () => {
            if (!props.auth) {
                props.history.push("/");
            }
        }

        return <ChildComponent {...props}/>;
    }

    function mapStateToProps(state) {
        return {auth: state.auth};
    }

    return connect(mapStateToProps)(ComposedComponent);
}
export default RequireAuth;