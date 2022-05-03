import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {useNavigate} from "react-router-dom";
import * as actions from '../../actions';

const Signin = ({errorMessage, handleSubmit, signin}) => {

    const navigate = useNavigate();

    const onSubmit = formProps => {
        signin(formProps, () => navigate('/feature'));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label>Email</label>
                <Field name="email" type="email" component="input" autoComplete="none"/>
            </fieldset>
            <fieldset>
                <label>Password</label>
                <Field name="password" type="password" component="input" autoComplete="none"/>
            </fieldset>
            <div>{errorMessage}</div>
            <button>Sign In!</button>
        </form>
    );
}

function mapStateToProps(state) {
    return {errorMessage: state.auth.errorMessage};
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({form: 'signin'})
)(Signin);