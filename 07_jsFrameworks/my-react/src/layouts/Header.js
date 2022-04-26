import React from "react";
import MenuMain from "./MenuMain";
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <header> <Link to="/">Мой сайт</Link>
                <MenuMain></MenuMain>
            </header>
        )
    }
}