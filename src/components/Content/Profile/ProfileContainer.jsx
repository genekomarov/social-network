import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect"; //Не удалять, код временно выключен
import {compose} from "redux";

class ProfileContainer extends React.Component{

    refreshProfile () {
        let userId = !this.props.match.params.userId ? this.props.myId : this.props.match.params.userId;
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    };

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.match.params.userId !== prevProps.match.params.userId && this.refreshProfile();
    }

    render() {
        return <Profile isOwner={!this.props.match.params.userId} {...this.props} />;
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myId: state.auth.id,
    isAuth: state.auth.isAuth,
    updateStatusError: state.profilePage.updateStatusError,
    isTestError: state.profilePage.isTestError
});

let mapDispatchToProps = {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer);