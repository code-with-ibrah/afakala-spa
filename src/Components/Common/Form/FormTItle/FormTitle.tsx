import React from "react";


type propType = {
    title: string
}

const FormTitle = (props: propType) => {
    return <React.Fragment>
        <p className="text-center text-lg font-semibold" 
            style={{ color: "var(--blue)"}}>
                {props.title}
            </p>
    </React.Fragment>
}


export default FormTitle;