import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow, toggleFollowing, getUsers
} from "../../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return (
            <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                isFetching={this.props.isFetching}

                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                isFollowing={this.props.isFollowing}

                toggleFollowing={this.props.toggleFollowing}
            />
            )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing
    }
};

let mapDispatchToProps = {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowing,
    getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(UsersContainer));
