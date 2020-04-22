import React from 'react';
import s from './Users.module.css';
import userPhoto from './../../../assets/images/user.webp'
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../../api/api";


let Users = (props) => {

    let usersElements = () => {
        return props.users.map(u => (
            <div key={u.id} className={s.user}>
                <div className={s.left}>

                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null
                            ? u.photos.small
                            : userPhoto
                        }
                             alt="" className={s.avatar}
                        />
                    </NavLink>

                    {u.followed
                        ? (
                            <button disabled={props.isFollowing.some( (item) => item === u.id )} className={s.followBtn} onClick={() => {

                                props.toggleFollowing(true, u.id);
                                usersAPI.unfollow(u.id)
                                    .then( data => {
                                        if (data.resultCode === 0) props.unfollowUser(u.id);
                                    })
                                    .then( () => props.toggleFollowing(false, u.id));

                            }}>
                                Follow
                            </button>
                        )
                        : (
                            <button disabled={props.isFollowing.some((item) => item === u.id )} className={s.followBtn} onClick={() => {

                                props.toggleFollowing(true, u.id);
                                usersAPI.follow(u.id)
                                    .then( data => {
                                        if (data.resultCode === 0) props.followUser(u.id);
                                    })
                                    .then( () => props.toggleFollowing(false, u.id));

                            }}>
                                Unfollow
                            </button>
                        )
                    }
                </div>
                <div className={s.right}>
                    <div className={s.firstName}>{u.name}</div>
                    <div className={s.location}>{'u.location.country'}<br/>{'u.location.city'}</div>
                    <div className={s.status}>{u.status}</div>
                </div>
            </div>
        ));
    };

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = (() => props.currentPage-3 > 0 ? props.currentPage-3 : 1)();
         i <= (() => props.currentPage+3 <= pagesCount ? props.currentPage+3 : pagesCount)();
         i++) {
        pages.push(
            <span
                key={i}
                className={i === props.currentPage && s.selectedPage}
                onClick={ () => {props.onPageChanged(i)}}> {i} </span>
        )
    }

    return (
        <>
            <div className={s.pages}>
                {pages}
            </div>
            <div>
                {props.isFetching && <Preloader />}
            </div>
            <div className={s.users}>
                { !props.isFetching && usersElements()}
            </div>
        </>
    )
}

export default Users;