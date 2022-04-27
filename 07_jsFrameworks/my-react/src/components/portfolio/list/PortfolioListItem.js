import React from "react";


export default class PortfolioListItem extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isEdit : false,
            portfolio: props.portfolio
        }
        this.onChangeEdit = this.onChangeEdit.bind(this)
        this.onSave = this.onSave.bind(this)
        this.onCancel = this.onCancel.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(ev){
        const state = this.state
        const name = ev.target.name
        state[name] = ev.target.value
        this.setState (state)
    }

    onChangeEdit(){
        const state = this.state
        state.isEdit = !state.isEdit
        this.setState(state)
    }

    onSave(){
        // this.props.portfolio.name = this.state.name
        const state = this.state
        state.portfolio.name = state.name
        this.setState (state)
        this.onCancel()
    }

    onCancel(){
        const state = this.state
        state.isEdit = false
        this.setState(state)
    }

    render() {
        if(this.state.isEdit) return this.renderEdit()
        let img
        if(this.state.portfolio.imgBlob)
            img = (<img src={this.state.portfolio.imgBlob} width='150px' />)
        else
            img = (<div> No Img </div>)

        return (
            <div>
                <h2> {this.props.portfolio.name} </h2>
                {img}
                <input type='button' onClick={this.onChangeEdit}/>
            </div>
        )
    }
    renderEdit(){
        return (
            <div>
                <input type='text'
                       name='name'
                       onChange={this.onInputChange}
                       defaultValue={this.props.portfolio.name}/>
                <button type='button' onClick={this.onSave} >Save </button>
                <button type='button' onClick={this.onCancel} >Cancel </button>

            </div>
        )
    }
}
