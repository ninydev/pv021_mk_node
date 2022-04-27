import React from "react";
import PortfolioListItem from "./PortfolioListItem";
import PortfolioListCreateItem from "./PortfolioListCreateItem";


export default class PortfoliosList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            portfolios: [
                // {id: "1", name: "First Work"},
                // {id: "2", name: "Second Work"}
            ],
            isLoad: true, // Показывает - произошла ли загрузка
            error: null // Сохраняет ошибку при загрузке
        }

        this.create = this.create.bind(this)
        this.onLogAll = this.onLogAll.bind(this)

        this.localSaveAll = this.localSaveAll.bind(this)
        this.localLoadAll = this.localLoadAll.bind(this)
        this.localClear = this.localClear.bind(this)
        this.localClear = this.localClear.bind(this)
    }

    onLogAll(){
        console.log(this.state.portfolios)
    }

    localSaveAll(){
        localStorage.setItem('ninyPortfolio', JSON.stringify(this.state.portfolios))
    }
    localLoadAll(){
        const state = this.state
        let str = localStorage.getItem('ninyPortfolio')
        console.log(str)
        if(!str) state.portfolios = []
        else state.portfolios = JSON.parse(str)
        this.setState(state)
    }

    localClear(){
        localStorage.clear()
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
                <button onClick={this.onLogAll}> Console </button>
                <button onClick={this.localSaveAll}> save all </button>
                <button onClick={this.localLoadAll}> load all </button>
                <button onClick={this.localClear}> clear </button>
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
