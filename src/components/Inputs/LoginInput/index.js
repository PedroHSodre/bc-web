import React from "react";
import { Input } from "./styled";

function LoginInput(props) {
    return (
        <Input role="input" placeholder={props.placeholder} onChange={props.setState} type={props.type}/>
    )
}

export default LoginInput;