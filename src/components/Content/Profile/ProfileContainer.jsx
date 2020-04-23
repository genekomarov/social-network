import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{

    componentDidMount() {

        let userId = !this.props.match.params ? 2 : this.props.match.params.userId ;
        this.props.getUserProfile(userId);
    }

    render() {
        debugger
        if (!this.props.isAuth) return <Redirect to='/login'/>;
        return <Profile {...this.props} />;
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let mapDispatchToProps = {
    getUserProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));