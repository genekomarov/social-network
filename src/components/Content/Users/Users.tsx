import React from 'react';
import s from './Users.module.css';
import Preloader from "../../common/Preloader/Preloader";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User/User";
import {UserType} from "../../../types/types";

type PropsType = {
    users: Array<UserType>
    isFollowing: Array<number>
    isFetching: boolean
    totalUsersCount: number
    pageSize: number
    currentPage: number

    unfollow: (id: number) => void
    follow:  (id: number) => void
    onPageChanged: (pageNumber: number) => void
}

let Users: React.FC<PropsType> = ({users, isFollowing, unfollow, follow, isFetching,
                 totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let usersElements = () => {
        return users.map(u => (
            <User
                id={u.id}
                photos={u.photos}
                name={u.name}
                status={u.status}
                followed={u.followed}
                isFollowing={isFollowing}
                follow={follow}
                unfollow={unfollow}
            />
        ));
    };

    return (
        <>
            <Paginator
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
            <div>
                {isFetching && <Preloader />}
            </div>
            <div className={s.users}>
                { !isFetching && usersElements()}
            </div>
        </>
    )
};

export default Users;