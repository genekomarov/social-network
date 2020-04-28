import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect"; //Не удалять, код временно выключен
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {

        let userId = !this.props.match.params.userId ? this.props.myId : this.props.match.params.userId;
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile {...this.props} />;
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myId: state.auth.id
});

let mapDispatchToProps = {
    getUserProfile,
    getStatus,
    updateStatus,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);