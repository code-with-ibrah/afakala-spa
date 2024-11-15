import React from "react";

import "./MForm.css";
import PageProgress from "./pageProgress/PageProgress";



type propType = {
  totalDot: number,
  activeNumber: number,
  children?: any,
  onProgressClick?: any
}



function MForm(props: propType) {



  return <React.Fragment>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 m-form__container">
        <div className="m-form__container-content">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
              alt="Afakala logo"
              src="./assets/img/logo_transparent.jpg"
              className="mx-auto h-10 w-auto form-logo"
            />
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">

              {props.children}

            </form>

            
          </div>
        </div>

        <PageProgress
          onClick={props.onProgressClick}
          totalDot={props.totalDot} 
          activeNumber={props.activeNumber} 
        />

      </div>


    </React.Fragment>
  
}



export default MForm;