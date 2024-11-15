import React, { useState } from "react";
import "./Shadow.css";




type propsType = {
    onClick: any,
    isOpen: boolean
}




const Shadow = (props: propsType) => {

    const onClickHandler = () => {
        props.onClick();
    }


    return <React.Fragment>
        <div 
            onClick={onClickHandler} 
            className={`shadow ${props.isOpen && 'active'}`}
            />
    </React.Fragment>
}


export default Shadow;