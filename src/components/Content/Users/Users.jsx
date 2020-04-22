import React from 'react';
import s from './Users.module.css';
import userPhoto from './../../../assets/images/user.webp'
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


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
                            <button className={s.followBtn} onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "320950a1-2961-41da-b879-07434b182870"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) props.unfollowUser(u.id);
                                    });

                            }}>
                                Follow
                            </button>
                        )
                        : (
                            <button className={s.followBtn} onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "320950a1-2961-41da-b879-07434b182870"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) props.followUser(u.id);
                                    });

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