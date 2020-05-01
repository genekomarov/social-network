import {connect} from "react-redux";
import React from "react";
import Header from "./Header";
import {logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {



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
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);