import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
//import s from '   '

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field validate={[required]} component={Input} placeholder={'Login'} name={'login'}/></div>
            <div><Field validate={[required]} component={Input} placeholder={'password'} name={'password'}/></div>
            <div><Field component={'Input'} type={'checkbox'} name={'rememberMe'}/>remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm  onSubmit={onSubmit}/>
        </div>
    );
};



export default Login;