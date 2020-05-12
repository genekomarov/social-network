import React, {useEffect, useState} from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false); //деструктурирующее присваивание
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        props.isOwner && setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status, props.isTestError);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };


    return (
        <div className={s.wrapper}>
            status:
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    value={status}
                    onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} />
            </div>
            }
            {props.updateStatusError &&
                <div className={s.error}>{props.updateStatusError}</div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;