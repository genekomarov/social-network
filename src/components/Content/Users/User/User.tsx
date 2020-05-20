import React from 'react';
import s from "./User.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../../assets/images/user.webp";
import {UserType} from "../../../../types/types";

type PropsType = {
    unfollow: (id: number) => void
    follow:  (id: number) => void
    isFollowing: Array<number>
} & UserType

const User: React.FC<PropsType> = ({id, photos, name, status, followed, isFollowing, follow, unfollow}) => {
    return (
        <div key={id} className={s.user}>
            <div className={s.left}>

                <NavLink to={'/profile/' + id}>
                    <img src={photos.small != null
                        ? photos.small
                        : userPhoto
                    }
                         alt="" className={s.avatar}
                    />
                </NavLink>

                {followed
                    ? (
                        <button disabled={isFollowing.some( (item) => item === id )} className={s.followBtn} onClick={() => {

                            unfollow(id);

                        }}>
                            Follow
                        </button>
                    )
                    : (
                        <button disabled={isFollowing.some((item) => item === id )} className={s.followBtn} onClick={() => {

                            follow(id);

                        }}>
                            Unfollow
                        </button>
                    )
                }
            </div>
            <div className={s.right}>
                <div className={s.firstName}>{name}</div>
                <div className={s.location}>{'props.location.country'}<br/>{'props.location.city'}</div>
                <div className={s.status}>{status}</div>
            </div>
        </div>
    );
};

export default User;