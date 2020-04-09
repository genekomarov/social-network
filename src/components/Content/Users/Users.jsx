import React from 'react';
import s from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: '0',
                    isFollow: true,
                    firstName: 'Eugene',
                    status: 'I,m the big boss',
                    location:
                        {
                            country: 'Russia',
                            city: 'Yekaterinburg'
                        },
                    avatar: 'https://i.mycdn.me/image?id=838968512981&ts=00000000190000012c&plc=WEB&tkn=*HgeUJJ9phxm9HWqJX7D7VF1zf5Y&fn=sqr_288'
                },
                {
                    id: '1',
                    isFollow: false,
                    firstName: 'Anna',
                    status: 'I,m the boss',
                    location:
                        {
                            country: 'Russia',
                            city: 'Moscow'
                        },
                    avatar: 'https://i.mycdn.me/image?id=838968512981&ts=00000000190000012c&plc=WEB&tkn=*HgeUJJ9phxm9HWqJX7D7VF1zf5Y&fn=sqr_288'
                },
                {
                    id: '2',
                    isFollow: true,
                    firstName: 'Dmitry',
                    status: 'I,m the boss, too',
                    location:
                        {
                            country: 'USA',
                            city: 'Los Angeles'
                        },
                    avatar: 'https://i.mycdn.me/image?id=838968512981&ts=00000000190000012c&plc=WEB&tkn=*HgeUJJ9phxm9HWqJX7D7VF1zf5Y&fn=sqr_288'
                },
            ]
        );
    }


    let usersElements =
        props.users.map( u => (
            <div key={u.id} className={s.user}>
                <div className={s.left}>
                    <img src={u.avatar} alt="" className={s.avatar}/>
                    { u.isFollow
                        ? (
                            <button className={s.followBtn} onClick={() => props.unfollowUser(u.id)}>
                                Follow
                            </button>
                        )
                        : (
                            <button className={s.followBtn} onClick={() => props.followUser(u.id)}>
                                Unfollow
                            </button>
                        )
                    }
                </div>
                <div className={s.right}>
                    <div className={s.firstName}>{u.firstName}</div>
                    <div className={s.location}>{u.location.country}<br/>{u.location.city}</div>
                    <div className={s.status}>{u.status}</div>
                </div>
            </div>
        ));

    return (
        <div>
            Users
            <div className={s.users}>
                {usersElements}
            </div>
        </div>
    );
};

export default Users;