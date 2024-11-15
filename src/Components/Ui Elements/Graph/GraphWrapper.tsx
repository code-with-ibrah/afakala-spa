import React from "react";
import "./GraphWrapper.css";



type propsType = {
    children?: any,
    title: string,
    height?: number
}

const GraphWrapper = (props: propsType) => {

    console.log("Height: " + !props.height)
    return <React.Fragment>
        <div 
            style={{ height: props.height}}
            className={`graph-wrapper ${!props.height && 'default-graph__height'}`}>
            <span className="graph-title">{props.title ? props.title : "This Month"}</span>

            {props.children}

        </div>

    </React.Fragment>
}


export default GraphWrapper;