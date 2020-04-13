import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../../assets/images/user.webp'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    /////////////////////////////////////////////
    ////Рисуем пользователей
    ////////////////////////////////////////////
    _usersElements = () => {
        return this.props.users.map(u => (
            <div key={u.id} className={s.user}>
                <div className={s.left}>
                    <img src={u.photos.small != null
                        ? u.photos.small
                        : userPhoto
                    }
                         alt="" className={s.avatar}/>
                    {u.followed
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

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount ; i++) {
            pages.push(
                <span
                    className={i === this.props.currentPage && s.selectedPage}
                    onClick={ () => {this.onPageChanged (i)}}> {i} </span>
            )
        }

        return (
            <div>
                <div className={s.pages}>
                    {pages}
                </div>
                <div className={s.users}>
                    {this._usersElements()}
                </div>
            </div>
        )
    }
}

export default Users;