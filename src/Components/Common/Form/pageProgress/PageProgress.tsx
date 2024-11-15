import React from "react";
import "./PageProgress.css";



type propType = {
    totalDot: number,
    activeNumber: number,
    onClick?: any
}



const PageProgress = (props: propType) => {



    return <React.Fragment>

        <div className="progress-bar__container">
            <div className="progress-bar__container-content">
            {
                Array.from({ length: props.totalDot })
                .map((_,i) => {
                    return <span
                        key={i}
                        className={`dot ${(i+1) == props.activeNumber && "active"} `}
                        onClick={() => props.onClick(i+1)}
                        />
                })
            }
            </div>
        </div>

    </React.Fragment>
}


export default PageProgress;