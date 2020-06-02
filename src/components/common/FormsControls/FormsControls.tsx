import React from "react";
import s from './FormControls.module.css'
import {WrappedFieldProps} from "redux-form"

type PropsType = {
    children: React.ReactElement
}

export const FormControl: React.FC<WrappedFieldProps & PropsType> = ({input, meta: {touched, error}, children, ...props}) => {

    const hasError = touched && error;

    return (
        <div className={`${s.formControl} ${hasError && s.error}`}>

            {React.cloneElement(
                children,
                Object.assign(props, input)
            )}

            {hasError && <span>{error}</span>}
        </div>
    )
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    return <FormControl {...props}><textarea /></FormControl>
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
    return <FormControl {...props}><input /></FormControl>
};
