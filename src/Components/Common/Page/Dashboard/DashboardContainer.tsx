import React from "react";
import DashboardNavbar from "./Navbar/DashboardNavbar";
import DashboardFooter from "./Footer/DashboardFooter";
import ResponsiveWrapper from "../../../Ui Elements/ResponsiveWrapper/ResponsiveWrapper";




type propsType = {
    children?: any,
    activeTab?: number
}

const DashboardContainer = (props: propsType) => {
    return <React.Fragment>

        <DashboardNavbar />

        <ResponsiveWrapper>
            
            {props.children}

        </ResponsiveWrapper>

        <DashboardFooter activeTab={props.activeTab} />

    </React.Fragment>
}



export default DashboardContainer;