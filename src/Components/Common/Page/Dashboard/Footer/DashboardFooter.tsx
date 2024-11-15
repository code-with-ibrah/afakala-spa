import React from "react";
import ResponsiveWrapper from "../../../../Ui Elements/ResponsiveWrapper/ResponsiveWrapper";
import { Link } from "react-router-dom";
import { AndroidFilled, HomeOutlined, MessageFilled, MessageOutlined, ShopOutlined } from "@ant-design/icons";
import DashboardRoute from "../../../../../routes/DashboardRoute";
import "./DashboardFooter.css";


type propsType = {
    activeTab?: number
}


const DashboardFooter = (props: propsType) => {
    return <React.Fragment>

        <footer className="footer">

            <ResponsiveWrapper>
                <div className="footer-container">

                    <Link to={DashboardRoute.home} className={`footer-tab ${props.activeTab == 1 && 'active'}`}>
                        <HomeOutlined />
                        <span>Dashboard</span>
                    </Link>

                    <Link to={DashboardRoute.chat} className={`footer-tab ${props.activeTab == 2 && 'active'}`}>
                        <AndroidFilled />
                        <span>Trina</span>
                    </Link>

                    <Link to={DashboardRoute.trading} className={`footer-tab ${props.activeTab == 3 && 'active'}`}>
                        <ShopOutlined />
                        <span>Trading</span>
                    </Link>

                    <Link to={DashboardRoute.requestFeature} className={`footer-tab ${props.activeTab == 4 && 'active'}`}>
                        <MessageFilled />
                        <span>Request</span>
                    </Link>
                </div>

            </ResponsiveWrapper>

        </footer>

    </React.Fragment>
}

export default DashboardFooter;