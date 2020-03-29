import React from 'react';
import s from './Profile.module.css';

const Prorfile = () => {
    return (
        <main className={s.content}>
            <div>
                <img className={s.unclearBlock__img} src="https://s1.1zoom.me/big0/930/Coast_Sunrises_and_sunsets_Waves_USA_Ocean_Kaneohe_521540_1280x775.jpg" alt=""/>
            </div>
            <div>
                avatar + description
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <ul>
                    <li>post 1</li>
                    <li>post 2</li>
                    <li>post 3</li>
                </ul>
            </div>
        </main>
    );
};

export default Prorfile;