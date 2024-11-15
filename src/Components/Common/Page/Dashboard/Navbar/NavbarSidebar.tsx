import React from "react";
import { Link } from "react-router-dom";
import DashboardRoute from "../../../../../routes/DashboardRoute";
import HomeRoute from "../../../../../routes/HomeRoute";

const NavbarSidebar = () => {
    return <React.Fragment>
            <div className="navbar-content">
                <Link to={DashboardRoute.home} className="nav-link">Home</Link>
                <Link to={DashboardRoute.menu} className="nav-link">Menu</Link>
                <Link to={DashboardRoute.budget} className="nav-link">Budget</Link>
                <Link to={DashboardRoute.income} className="nav-link">Income</Link>
                <Link to={DashboardRoute.investment} className="nav-link">Investment</Link>
                <Link to={HomeRoute.login} className="nav-link">Logout</Link>
            </div>
    </React.Fragment>
}

export default NavbarSidebar;