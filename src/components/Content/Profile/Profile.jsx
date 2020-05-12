import React from 'react';
import s from './Profile.module.css';
import ProfileData from "./ProfileData/ProfileData";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import ProfileStatus from "./ProfileData/ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileData/ProfileStatus/ProfileStatusWithHooks";

const Profile = (props) => {

    return (
        <main className={s.content}>
            {/*<div>
                <img className={s.unclearBlock__img}
                     src="https://s1.1zoom.me/big0/930/Coast_Sunrises_and_sunsets_Waves_USA_Ocean_Kaneohe_521540_1280x775.jpg"
                     alt=""/>
            </div>*/}
            <ProfileData
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
                updateStatusError={props.updateStatusError}
                isTestError={props.isTestError}
            />
            {/*<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>*/}
            <MyPostsContainer />
        </main>
    )
};




export default Profile;