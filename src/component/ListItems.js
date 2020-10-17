import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Checkbox } from './index';

class listItems extends Component {
    constructor(props){
        super(props)
    }
    toggleCheckboxChange = (e) => {
        const id = e.target.id;
        var obj;
        if(id == 0){
            obj = this.state.ds;
        }else if(id == 1){
            obj = this.state.web;
        }else{
            obj = this.state.db;
        }
        this.toggleState(obj,e.target.value);
    }
    toggleState = (obj,value) => {
        for (var objj of obj){
            if(objj.value == value){
                objj.checked = !objj.checked;
            }
        }
        console.log(obj);
    }
    render() {
        const {ds,web,db} = this.props;
        return (
            <div className="container">
                <h2>Data Structure</h2>
                {
                    ds.ds.map((data,key) => (
                        <Checkbox items={data} key={key} />
                    )) 
                }
                <h2>Web</h2>
                {
                    web.web.map((data,key) => (
                        <Checkbox items={data} key={key} />
                    )) 
                }
                
                <h2>Database</h2>
                <label>
                    <input type="checkbox" value= "SQL"
                        onChange={this.toggleCheckboxChange} id='2'
                    />
                    SQL
                </label>
                <label>
                    <input type="checkbox" value= "MongoDB"
                        onChange={this.toggleCheckboxChange} id='1'
                    />
                    MongoDB
                </label>
            </div>
        );
    }
}

function  mapStoreToProps(state){
    return {
        ds:state.ds,
        web:state.web,
        db:state.db
    }
}
export default connect(mapStoreToProps)(listItems);