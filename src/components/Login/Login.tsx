import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {getCaptcha, GetCaptchaType, login, LoginType, ThunkType} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from './../common/FormsControls/FormControls.module.css';
import {AppStateType} from "../../redux/redux-store"


type LoginFormOwnProps = {
    captcha: string | null
    getCaptcha: () => void
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captcha, getCaptcha}) => {

    const onCaptchaClick = () => {
        getCaptcha();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div><Field validate={[required]} component={Input} placeholder={'E-mail'} name={'email'}/></div>
            <div><Field validate={[required]} component={Input} placeholder={'password'} name={'password'}/></div>
            <div><Field component={'input'} type={'checkbox'} name={'rememberMe'}/>remember me</div>

            { captcha && <div><img onClick={onCaptchaClick} src={captcha} alt=""/></div>}
            { captcha && <div><Field validate={[required]} component={Input} placeholder={'symbols'} name={'captcha'}/></div>}

            <div>
                <button>Login</button>
            </div>
            {error && <div className={s.formSummaryError}>{error}</div>}
        </form>
    )
};

const LoginReduxForm = reduxForm<FormDataType, LoginFormOwnProps>({form: 'login'})(LoginForm);


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType> = ({login, isAuth, captcha, getCaptcha}) => {

    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if (isAuth) {
        return <Redirect to={'/profile'}/>;
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm
                onSubmit={onSubmit}
                captcha={captcha}
                getCaptcha={getCaptcha}
            />
        </div>
    );
};


type MapStateToPropsType = {
    isAuth: boolean
    captcha: string | null
}

type MapDispatchToPropsType = {
    login: (email: string,
            password: string,
            rememberMe: boolean,
            captcha: string) => void
    getCaptcha: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    };
};

export default connect(mapStateToProps, {login, getCaptcha})(Login);