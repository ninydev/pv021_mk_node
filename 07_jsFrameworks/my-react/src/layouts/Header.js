import React from "react";
import MenuMain from "./MenuMain";
import {Link} from "react-router-dom";
import imgLogo from "../assets/img/logo.svg"

export default class Header extends React.Component {
    render() {
        return (
            <header> <Link to="/">
                <img src={imgLogo} width="50px" height="50px" alt="My Site"/>
            </Link>
                <MenuMain></MenuMain>
            </header>
        )
    }
}