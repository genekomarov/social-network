import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from './../common/FormsControls/FormControls.module.css';

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><Field validate={[required]} component={Input} placeholder={'E-mail'} name={'email'}/></div>
            <div><Field validate={[required]} component={Input} placeholder={'password'} name={'password'}/></div>
            <div><Field component={'Input'} type={'checkbox'} name={'rememberMe'}/>remember me</div>
            <div>
                <button>Login</button>
            </div>
            {error && <div className={s.formSummaryError}>{error}</div>}
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = ({login, isAuth}) => {

    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
    };

    if (isAuth) {
        return <Redirect to={'/profile'}/>;
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm  onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
};


export default connect(mapStateToProps, {login})(Login);