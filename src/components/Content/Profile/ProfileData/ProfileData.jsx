import React from 'react';
import s from './ProfileData.module.css'
import Preloader from "../../../common/Preloader/Preloader";

const ProfileData = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img className={s.avatar__img} src={props.profile.photos.large} alt=""/>
            </div>
            <div className={`${s.description} clearfix`}>
                <h2 className={s.name}>{props.profile.fullName}</h2>

                <div>About me: {props.profile.aboutMe}</div>
            </div>
        </div>
    );
};

export default ProfileData;