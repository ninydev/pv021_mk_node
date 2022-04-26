import React from "react";


export default class PortfolioListItem extends React.Component {
    render() {
        return (
            <div>
                <h2> {this.props.portfolio.name} </h2>
            </div>
        )
    }
}
