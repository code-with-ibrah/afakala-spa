import React from "react";
import DashboardContainer from "../../../Components/Common/Page/Dashboard/DashboardContainer";
import "./Trading.css";
import { AndroidFilled } from "@ant-design/icons";




const Trading = () => {
    return <DashboardContainer activeTab={3}>

        <div className="welcome-wrapper">
            <p className="user-name">Trading Support</p>
        </div>

        <div className="trading-item__wrapper">

            <div className="trading-item">
                <p className="title">Stocks Bot</p>
                <AndroidFilled className="icon" />
            </div>

            <div className="trading-item">
                <p className="title">Crypto Bot</p>
                <AndroidFilled className="icon" />
            </div>

            <div className="trading-item">
                <p className="title">Forex Bot</p>
                <AndroidFilled className="icon" />
            </div>

        </div>

    </DashboardContainer>
}


export default Trading;