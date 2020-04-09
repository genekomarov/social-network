import {connect} from "react-redux";
import {followAC, serUsersAC, unfollowAC} from "../../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => dispatch(followAC(userId)),
        unfollowUser: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(serUsersAC(users))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
