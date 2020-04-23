import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{

    componentDidMount() {

        let userId = !this.props.match.params ? 2 : this.props.match.params.userId ;

        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let mapDispatchToProps = {
    getUserProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));