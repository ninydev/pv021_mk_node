import React from "react";

class MyArray extends React.Component {

    constructor(props) {
        super(props); // Выбов базового конструктора
        this.state = {
            myArray: ["first", "second"]
        }
        // this.onInputChange = this.onInputChange.bind(this)
    }

    render() {

        return (
            <div>
                <h2> My Array </h2>
                <ul>
                    { this.state.myArray.map( (el,i) =>  {
                        return (
                        <li key={'arrEl_' + i}> {el} </li>
                        )
                    })}
                </ul>
            </div>

        )
    }
}

export default MyArray