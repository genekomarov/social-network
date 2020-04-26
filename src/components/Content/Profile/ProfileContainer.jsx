import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {

        let userId = !this.props.match.params ? 2 : this.props.match.params.userId ;
        this.props.getUserProfile(userId);
    }

    render() {
        return <Profile {...this.props} />;
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let mapDispatchToProps = {
    getUserProfile
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);