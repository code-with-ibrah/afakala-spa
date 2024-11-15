import React from "react";
import DashboardContainer from "../../../Components/Common/Page/Dashboard/DashboardContainer";

import { BankOutlined, BookOutlined, EditOutlined, GoldOutlined, LineChartOutlined, LogoutOutlined, MessageOutlined, NotificationOutlined, PicCenterOutlined, ScanOutlined, SecurityScanOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined, WalletOutlined, WechatOutlined } from "@ant-design/icons/lib/icons";

import "./Menu.css";
import MenuCard from "./MenuCard";
import DashboardRoute from "../../../routes/DashboardRoute";






const stocksData: any = [];


const Menu = () => {
    return <React.Fragment>

        <DashboardContainer>

        <div className="welcome-wrapper">
            <p className="user-name">Menu</p>
        </div>

        
        <div className="menu-card__wrapper">

            <MenuCard 
                to={DashboardRoute.nowhere}
                title={"Profile & Settings"} 
                icon={<UserOutlined/>} 
            />


            <MenuCard 
                to={DashboardRoute.nowhere}
                title={"Notification"} 
                icon={<NotificationOutlined />} 
            />


            <MenuCard 
                to={DashboardRoute.nowhere}
                title={"Budget Planner"} 
                icon={<EditOutlined />} 
            />


            <MenuCard 
                to={DashboardRoute.nowhere}
                title={"Investment Monitor"} 
                icon={<LineChartOutlined />} 
            />



            <MenuCard 
                to={DashboardRoute.nowhere}
                title={"Income Tracker"} 
                icon={<WalletOutlined />} 
            />


            <MenuCard 
                to={DashboardRoute.nowhere}
                title={"Expenses Tracker"} 
                icon={<ShoppingOutlined />} 
            />


            <MenuCard 
                to={DashboardRoute.nowhere}
                title={"Tax Management"} 
                icon={<PicCenterOutlined />} 
            />


            <MenuCard 
                to={DashboardRoute.nowhere}
                title={"Dept Management"} 
                icon={<PicCenterOutlined />} 
            />

            <MenuCard 
                to={DashboardRoute.nowhere}
                title={"Trading Support"} 
                icon={<ShoppingCartOutlined />} 
            />


            <MenuCard 
                to={DashboardRoute.nowhere}
                title={"Asset Management"} 
                icon={<GoldOutlined />} 
            />


            <MenuCard 
                to={DashboardRoute.nowhere}
                title={"Inflation & Deflation"} 
                icon={<ScanOutlined />} 
            />


            <MenuCard 
                to={DashboardRoute.nowhere}
                title={"Goal Settings"} 
                icon={<EditOutlined />} 
            />


            <MenuCard 
                to={DashboardRoute.nowhere}
                title={"User Feedback"} 
                icon={<MessageOutlined />} 
            />


            <MenuCard 
                to={DashboardRoute.nowhere}
                title={"Report and Analytics"} 
                icon={<BookOutlined />} 
            />

            <MenuCard 
                to={DashboardRoute.nowhere}
                title={"Educational Resource"} 
                icon={<BankOutlined />} 
            />


            <MenuCard 
                to={DashboardRoute.nowhere}
                title={"Help and Support"} 
                icon={<WechatOutlined />} 
            />


            <MenuCard 
                to={DashboardRoute.nowhere}
                title={"Security Indicators"} 
                icon={<SecurityScanOutlined />} 
            />


            <MenuCard 
                to={DashboardRoute.nowhere}
                title={"Logout"} 
                icon={<LogoutOutlined />} 
            />















        </div>


        </DashboardContainer>

    </React.Fragment>
}


export default Menu;