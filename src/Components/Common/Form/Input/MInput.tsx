import React, { useState } from "react";
import "./MInput.css";


type propType = {
  name?: string | any,
  label: string,
  id: string,
  className?: string,
  labelClassName?: string,
  required?: boolean,
  placeholder?: string,
  type: string,
  marginTop?: string,
  value: any,
  onChange: any,
  error?: string
}


const MInput = (props: propType) => {
  const invalidInputClassName = "block w-full rounded-md bg-white border border-red-500 w-full outline-none";
  const validInputClassName = "block w-full rounded-md bg-white border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";


    return <React.Fragment>
        <div className="mb-1">
              <label htmlFor={props.id} className={`block text-sm font-medium leading-6 text-gray-900 ${props.labelClassName}`}>
                {props.label}
              </label>

              <div className="" style={{marginBottom: -10}}>
                <input
                  id={props.id}
                  name={props.name}
                  type={props.type}
                  placeholder={props.placeholder}
                  required={true}
                  autoComplete={props.type}
                  className={ props.error ? `${invalidInputClassName}` : `${validInputClassName}` }
                  value = {props.value}
                  onChange={(e) => props.onChange(e.target.value)}
                />



              {props.error && <div className="font-[sans-serif] max-w-md mx-auto">
                <p className="text-xs text-red-500 flex items-center mt-1">
                  {props.error}
                </p>
              </div>}





              </div>
        </div>
    </React.Fragment>
}

export default MInput;