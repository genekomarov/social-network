import React from "react";
import {Suspense} from "react";

export default (Component) => {
    return (props) => {
        return (
            <Suspense fallback={<div>Загрузка...</div>}>
                <Component/>
            </Suspense>
        )
    }
}
