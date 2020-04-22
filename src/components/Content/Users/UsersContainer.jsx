import {connect} from "react-redux";
import {
    follow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFetching,
    unfollow, toggleFollowing
} from "../../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import {usersAPI} from "../../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.toggleFetching(false);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.toggleFetching(false);
            });
    };

    render() {
        return (
            <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                isFetching={this.props.isFetching}

                followUser={this.props.follow}
                unfollowUser={this.props.unfollow}
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
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleFetching,
        toggleFollowing
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
