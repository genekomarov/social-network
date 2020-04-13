import {connect} from "react-redux";
import {followAC, serUsersAC, setCurrentPageAC, setTotalUsersCountAC, unfollowAC} from "../../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => dispatch(followAC(userId)),
        unfollowUser: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(serUsersAC(users)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalUsersCount: (totalUsersCount) => dispatch(setTotalUsersCountAC(totalUsersCount))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
