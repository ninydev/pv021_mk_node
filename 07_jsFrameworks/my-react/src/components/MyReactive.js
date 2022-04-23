import React from "react";

class MyReactive extends React.Component {

    constructor(props) {
        super(props); // Выбов базового конструктора
        this.state = {
            myName: "Vasya"
        }
        this.onInputChange = this.onInputChange.bind(this)
    }

    componentDidMount() {
        console.log("Mount")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Update')
    }

    onInputChange(ev){
        const state = this.state
        const name = ev.target.name
        state[name] = ev.target.value
        this.setState (state)
    }

    render() {
        return (
            <div>
                <h1>Привет, { this.state.myName } </h1>
                <input name="myName" onChange={this.onInputChange}></input>
                <input name="myEmail" onChange={this.onInputChange}></input>
            </div>
        )
    }
}

export default MyReactive