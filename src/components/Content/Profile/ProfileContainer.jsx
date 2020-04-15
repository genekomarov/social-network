import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{

    componentDidMount() {

        let userId = !this.props.match.params ? 2 : this.props.match.params.userId ;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
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
    setUserProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));