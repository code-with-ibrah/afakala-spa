import { Link } from "react-router-dom";


type propType = {
    text: string,
    path: string,
    linkText: string,
    className?: string,
    onClick?: any
}

const FormLink = (props: propType) => {
    return <>
        <p className="text-sm text-gray-500">
            {props.text}  &nbsp;
            <Link onClick={props.onClick} to={props.path} className={`font-semibold leading-6 text-blue-600 hover:text-indigo-500 ${props.className}`}>
                {props.linkText}
            </Link>
        </p>
    </>
}

export default FormLink;