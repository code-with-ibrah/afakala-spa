import React from "react";

import "./AuthPage.css";




type propsType = {
    children?: any
}



const AuthPage = (props: propsType) => {
    return <React.Fragment>
        <div className="auth-page__layout">

            {props.children}

        </div>
    </React.Fragment>
}


export default AuthPage;