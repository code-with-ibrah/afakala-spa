import React from "react";
import { Link } from "react-router-dom";




type propsType = {
    title: string,
    icon: any,
    to: string
}

const MenuCard = (props: propsType) => {
    return <React.Fragment>
            <Link to={props.to}>
                <div className="menu-card">
                    { props.icon }
                    <span className="title"> { props.title} </span>
                </div>
            </Link>
    </React.Fragment>
}


export default MenuCard;