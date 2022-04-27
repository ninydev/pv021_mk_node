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
        this.onUploadFile = this.onUploadFile.bind(this)
        this.saveDataFile = this.saveDataFile.bind(this)

    }

    saveDataFile(data){
        const state = this.state
        state.portfolio['imgBlob'] = data
        this.setState(state)
    }

    onUploadFile(ev){
        if(FileReader){
            let fileReader = new FileReader()
            const save = this.saveDataFile
            fileReader.onload = function () {
                save(fileReader.result)
            }
            fileReader.onerror = function (err) {
                console.log(err)
            }
            fileReader.readAsDataURL(ev.target.files[0])
        }
    }

    changeVisible(){
        const state = this.state
        state.isVisible = !state.isVisible
        this.setState(state)
    }

    onSave(){
        this.props.onSave(this.state.portfolio)
        const state = this.state
        state.isVisible = !state.isVisible
        state.portfolio = {}
        this.setState(state)
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
        let img
        if(this.state.portfolio.imgBlob)
            img = (<img src={this.state.portfolio.imgBlob} width='150px' />)
        else
            img = (<div> No Img </div>)

        return (
            <div>
                {img}
                <input type="text" name="name" onChange={this.onInputChange}/>
                <input type="file" name="imgBlob" onChange={this.onUploadFile} /><br />
                <input type="button" value="save" onClick={this.onSave}/>
                <div onClick={this.changeVisible}> hide </div>
            </div>
        )
    }
}
