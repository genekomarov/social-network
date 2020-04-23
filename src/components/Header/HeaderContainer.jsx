import {connect} from "react-redux";
import React from "react";
import Header from "./Header";
import {authCheck, setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        // Запрос для проверки авторизации
        // Если пройдена - устанавливаем данные пользователя

        this.props.authCheck();

        /*authAPI.authCheck()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });*/
    }

    render() {
        return (
            <>
                <Header {...this.props} />
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    };
};

let mapDispatchToProps = { //as Object
    /*setAuthUserData*/
    authCheck
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);