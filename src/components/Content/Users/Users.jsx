import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../../assets/images/user.webp'

class Users extends React.Component {

    constructor (props) {
        super (props);

        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    debugger
                    props.setUsers(response.data.items);
                });
        }
    }

    usersElements = () => {
        return this.props.users.map( u => (
            <div key={u.id} className={s.user}>
                <div className={s.left}>
                    <img src={u.photos.small != null
                        ? u.photos.small
                        : userPhoto
                    }
                         alt="" className={s.avatar}/>
                    { u.followed
                        ? (
                            <button className={s.followBtn} onClick={() => this.props.unfollowUser(u.id)}>
                                Follow
                            </button>
                        )
                        : (
                            <button className={s.followBtn} onClick={() => this.props.followUser(u.id)}>
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
    render() {
        return (
            <div>
                Users
                <div className={s.users}>
                    {this.usersElements()}
                </div>
            </div>
        )
    }
}

export default Users;