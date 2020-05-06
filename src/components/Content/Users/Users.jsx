import React from 'react';
import s from './Users.module.css';
import Preloader from "../../common/Preloader/Preloader";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User/User";


let Users = ({users, isFollowing, unfollow, follow, isFetching,
                 totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {

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
            /*{/!*<div key={u.id} className={s.user}>
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
                            <button disabled={isFollowing.some( (item) => item === u.id )} className={s.followBtn} onClick={() => {

                                unfollow(u.id);

                            }}>
                                Follow
                            </button>
                        )
                        : (
                            <button disabled={isFollowing.some((item) => item === u.id )} className={s.followBtn} onClick={() => {

                                follow(u.id);

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
            </div>*!/}*/
        ));
    };

/*    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

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
    }*/

    return (
        <>
            <Paginator
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
            {/*<div className={s.pages}>
                {pages}
            </div>*/}
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