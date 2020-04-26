import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component{

    componentDidMount() {

        let userId = !this.props.match.params ? 2 : this.props.match.params.userId ;
        this.props.getUserProfile(userId);
    }

    render() {
        return <Profile {...this.props} />;
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let mapDispatchToProps = {
    getUserProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthRedirectComponent));