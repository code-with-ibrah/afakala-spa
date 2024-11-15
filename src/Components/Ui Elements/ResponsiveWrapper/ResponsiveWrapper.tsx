import React from "react";
import "./ResponsiveWrapper.css";


type propsType = {
    children?: any
}


const ResponsiveWrapper = (props: propsType) => {
    return <React.Fragment>
        <div className="responsive-container">
            {props.children}
        </div>
    </React.Fragment>
}


export default ResponsiveWrapper;