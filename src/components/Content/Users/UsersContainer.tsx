import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow, requestUsers
} from "../../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowing,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../../redux/users-selectors";
import {UserType} from "../../../types/types";
import {AppStateType} from "../../../redux/redux-store";

type MapStatePropsType = {
    users: Array<UserType>
    currentPage: number
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
    isFollowing: Array<number>
}

type MapDispatchPropsType = {
    unfollow: (id: number) => void
    follow:  (id: number) => void
    /*onPageChanged: (pageNumber: number) => void*/
    setCurrentPage: (currentPage: number) => void
    requestUsers: (pageNumber: number, pageSize: number) => void
}

type OwnPropsType = {

}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;

        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props;

        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, pageSize);
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
            />
            )
    }
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state)
    }
};

let mapDispatchToProps: MapDispatchPropsType = {
    follow,
    unfollow,
    setCurrentPage,
    requestUsers
};

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UsersContainer);
