import React from "react";
import s from './FormControls.module.css'



export const FormControl = ({input, meta: {touched, error}, children, ...props}: any) => {

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

export const Textarea = (props) => {
    return <FormControl {...props}><textarea /></FormControl>
};
export const Input = (props) => {
    return <FormControl {...props}><input /></FormControl>
};
