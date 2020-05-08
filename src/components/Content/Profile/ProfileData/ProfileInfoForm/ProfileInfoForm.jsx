import React from 'react';
import s from "../ProfileData.module.css";
import {Field, Form, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../../common/FormsControls/FormsControls";
import {required} from "../../../../../utils/validators/validators";
//import s from '   '

const ProfileInfoForm = (props) => {
    return (
        <Form
            onSubmit={props.handleSubmit}
            className={`${s.description} clearfix`}>
            <div><button>save</button></div>
            <div className={s.name}>
                Name:
                <Field validate={[required]} component={Input} placeholder={'Fullname'} name={'fullName'}/>
            </div>
            <div className={s.aboutMe}>
                About me:
                <Field validate={[required]} component={Textarea} placeholder={'About me'} name={'aboutMe'}/>
            </div>
            <div>
                <Field validate={[]} component={'input'} type={'checkbox'} placeholder={''} name={'lookingForAJob'}/>
                Looking for a job
            </div>
            <div className={s.skills}>
                Skills:
                <Field validate={[required]} component={Textarea} placeholder={'My skills'} name={'lookingForAJobDescription'}/>
            </div>
            <div>Contacts</div>
            {Object.keys(props.profile.contacts).map( (key) => {
                return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
        </Form>
    );
};

const Contacts = (props) => {
    return(
        <div className={s.contact}>
            {props.contactTitle}
            <Field validate={[]} component={Input} placeholder={props.contactTitle} name={'contacts.' + props.contactTitle}/>
        </div>
    )
};

export default reduxForm({form: 'profileInfo'})(ProfileInfoForm);