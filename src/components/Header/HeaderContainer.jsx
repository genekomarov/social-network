import {connect} from "react-redux";
import React from "react";
import Header from "./Header";
import {authCheck, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        // Запрос для проверки авторизации
        // Если пройдена - устанавливаем данные пользователя

        this.props.authCheck();
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
    authCheck,
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);