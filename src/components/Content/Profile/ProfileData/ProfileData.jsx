import React from 'react';
import s from './ProfileData.module.css'

const ProfileData = () => {
    return (
        <div>
            <div>
                <img className={s.avatar__img} src="https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRqdrlx2hME57F1Bpq1Ei1ug" alt=""/>
            </div>
            <div className={`${s.description} clearfix`}>
                <h2 className={s.name}>Evgeniy K.</h2>

                <div>Day of Birth: 17 march</div>
                <div>City: Ekaterinburg</div>
                <div>Skills: html, css, js, react</div>
            </div>
        </div>
    );
};

export default ProfileData;