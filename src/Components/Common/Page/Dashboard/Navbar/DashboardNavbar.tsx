import React, { useState } from "react";
import ResponsiveWrapper from "../../../../Ui Elements/ResponsiveWrapper/ResponsiveWrapper";
import { MenuFoldOutlined } from "@ant-design/icons";
import NavbarSidebar from "./NavbarSidebar";
import Shadow from "../../../../Ui Elements/Shadow/Shadow";
import "./DashboardNavbar.css";



const DashboardNavbar = () => {
    const [navbarIsOpen, setNavbarIsOpen] = useState<boolean>(false);

    const navbarTogglerHandler = () => {
        setNavbarIsOpen(!navbarIsOpen);
    }




    return <React.Fragment>
        <Shadow onClick={navbarTogglerHandler} isOpen={navbarIsOpen} />



        <nav className={`navbar ${navbarIsOpen && 'active'}`}>
            <ResponsiveWrapper>


                <div className="navbar-profile">
                    <img className="navbar-profile__img" 
                        src="/assets/img/profile.jpg"
                        alt="profile image" />
                </div>

                <div className="navbar-logo">
                    <img className="navbar-logo__img" 
                        src="/assets/img/logo_transparent.jpg" 
                        alt="logo" />
                </div>


                <div className="navbar-toggler__menu" onClick={navbarTogglerHandler}>
                    <MenuFoldOutlined className="icon"/>
                </div>

                <NavbarSidebar />
            </ResponsiveWrapper>

        </nav>

    </React.Fragment>
}


export default DashboardNavbar;