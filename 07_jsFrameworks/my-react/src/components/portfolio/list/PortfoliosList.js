import React from "react";
import PortfolioListItem from "./PortfolioListItem";
import PortfolioListCreateItem from "./PortfolioListCreateItem";


export default class PortfoliosList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            portfolios: [
                {id: "1", name: "First Work"},
                {id: "2", name: "Second Work"}
            ],
            isLoad: true, // Показывает - произошла ли загрузка
            error: null // Сохраняет ошибку при загрузке
        }

        this.create = this.create.bind(this)
    }

    create(newPortfolio){
        newPortfolio.id = Date.now()
        const state = this.state
        state.portfolios.push(newPortfolio)
        this.setState(state)
    }

    render() {
        if(this.state.error) return this.renderError() // если ошибка
        if(!this.state.isLoad) return this.renderLoading() // если прелоадер
        return (
            <div>
                <h2> All List </h2>
                <ul>
                    {this.state.portfolios.map(p=> {
                        return <PortfolioListItem portfolio={p} key={'portfolioListItem_' + p.id} />
                    })}
                </ul>
                <PortfolioListCreateItem onSave={this.create}/>
            </div>
        )
    }

    /**
     * Если загрузка данных еще не выполнена
     */
    renderLoading(){
        return (
            <div> loading </div>
        )
    }

    /**
     * Если в процессе произошла ошибка
     */
    renderError(){
        return (
            <div> Error {this.state.error}</div>
        )
    }
}
