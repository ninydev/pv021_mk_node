import React from "react";
import '../assets/css/pages/about.css'
import PortfoliosList from "../components/portfolio/list/PortfoliosList";

export default class PagePortfolios extends React.Component {
    render() {
        return (
            <div>
             <h1>All Portfolios</h1>
                <PortfoliosList></PortfoliosList>
            </div>
        )
    }
}
