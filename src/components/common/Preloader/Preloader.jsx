import React from 'react';
import preloader from "../../../assets/images/preloader.gif";

const Preloader = () => {
    return (
        <div style={{
                textAlign: 'center'
            }}>
            <img src={preloader} alt=""/>
        </div>
    );
};

export default Preloader;