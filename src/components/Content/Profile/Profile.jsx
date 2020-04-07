import React from 'react';
import s from './Profile.module.css';
import ProfileData from "./ProfileData/ProfileData";
import MyPosts from "./MyPosts/MyPosts";

const Prorfile = (props) => {


    return (
        <main className={s.content}>
            <div>
                <img className={s.unclearBlock__img} src="https://s1.1zoom.me/big0/930/Coast_Sunrises_and_sunsets_Waves_USA_Ocean_Kaneohe_521540_1280x775.jpg" alt=""/>
            </div>
            <ProfileData/>

            <MyPosts
                posts={props.store.getState().profilePage.posts}
                store={props.store}/>
        </main>
    );
};

export default Prorfile;