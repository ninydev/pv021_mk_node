import React from "react";
import {isVisible} from "@testing-library/user-event/dist/utils";


export default class PortfolioListCreateItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            portfolio: {}
        }

        this.changeVisible = this.changeVisible.bind(this)
        this.onSave = this.onSave.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }

    changeVisible(){
        const state = this.state
        state.isVisible = !state.isVisible
        this.setState(state)
    }

    onSave(){
        this.props.onSave(this.state.portfolio)
    }

    onInputChange(ev){
        const state = this.state
        const name = ev.target.name
        state.portfolio[name] = ev.target.value
        this.setState (state)
    }

    render() {
        if(!this.state.isVisible) return (
            <div onClick={this.changeVisible}> show </div>
        )
        return (
            <div>
                <input type="text" name="name" onChange={this.onInputChange}/>
                <input type="button" value="save" onClick={this.onSave}/>
                <div onClick={this.changeVisible}> hide </div>
            </div>
        )
    }
}
