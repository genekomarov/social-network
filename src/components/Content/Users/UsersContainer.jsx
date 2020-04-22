import {connect} from "react-redux";
import {
    follow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFetching,
    unfollow
} from "../../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.toggleFetching(false);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleFetching(false);
            });
    }

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
        isFetching: state.usersPage.isFetching
    }
};

let mapDispatchToProps = {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
