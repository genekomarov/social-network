import React, {useState} from 'react';
import s from './ProfileData.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../../assets/images/user.webp";
import ProfileInfoForm from "./ProfileInfoForm/ProfileInfoForm";


const ProfileData = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = e => {
        e.target.files.length && props.savePhoto(e.target.files[0]);
    };

    const onProfileInfoSubmit = (formData) => {
        /*setEditMode(false);*/
        props.saveProfile(formData, setEditMode);
    };

    return (
        <div className={s.wrapper}>
            <div>
                <img className={s.avatar__img} src={props.profile.photos.large || userPhoto} alt=""/>
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}
                    isOwner={props.isOwner}
                    updateStatusError={props.updateStatusError}
                    isTestError={props.isTestError}/>
            </div>
            {
                !editMode
                    ? <ProfileInfo
                        profile={props.profile}
                        isOwner={props.isOwner}
                        goToEditMode={ () => {setEditMode(true)} }/>
                    : <ProfileInfoForm
                        profile={props.profile}
                        initialValues={props.profile}
                        onSubmit={onProfileInfoSubmit}/>
            }
        </div>
    );
};

const ProfileInfo = ({profile, ...props}) => {
    return (
        <div className={`${s.description} clearfix`}>
            {props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>}
            <h2 className={s.name}>{profile.fullName}</h2>
            <div className={s.aboutMe}><b>About me: </b>{profile.aboutMe}</div>
            <div><b>Looking for a job: </b> {profile.lookingForAJob ? "Yes" : "No"}</div>
            <div className={s.skills}><b>Skills: </b> {profile.lookingForAJobDescription}</div>
            <div><b>Contacts: </b></div>
            {Object.keys(profile.contacts).map( (key) => {
                return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
        </div>
    )
};


const Contacts = (props) => {
    return(
        <div className={s.contact}>
            <span><b>{props.contactTitle}: </b></span><span>{props.contactValue}</span>
        </div>
    )
};

export default ProfileData;