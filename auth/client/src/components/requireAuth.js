import React, {useEffect} from "react"
import {connect} from "react-redux";
import { useNavigate } from "react-router-dom";

const RequireAuth = (ChildComponent) => {

    const ComposedComponent = (props) => {

        const navigate = useNavigate();

        useEffect(() => {
            shouldNavigateAway();
        }, []);

        useEffect(() => {
            shouldNavigateAway();
        });

        const shouldNavigateAway = () => {
            if (!props.auth) {
                navigate.push("/");
            }
        }

        return <ChildComponent {...props}/>;
    }

    function mapStateToProps(state) {
        return {auth: state.auth.authenticated};
    }

    return connect(mapStateToProps)(ComposedComponent);
}
export default RequireAuth;