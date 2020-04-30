import React from "react";
import s from './FormControls.module.css'


export const FormControl = ({input, meta, children, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={`${s.formControl} ${hasError && s.error}`}>

            {React.cloneElement(
                children,
                Object.assign(props, input)
            )}

            {hasError && <span>{meta.error}</span>}
        </div>
    )
};

export const Textarea = (props) => {
    return <FormControl {...props}><textarea /></FormControl>
};
export const Input = (props) => {
    return <FormControl {...props}><input /></FormControl>
};
