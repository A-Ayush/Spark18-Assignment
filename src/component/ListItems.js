import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Checkbox } from './index';

class listItems extends Component {
    constructor(props){
        super(props)
        this.state={
            ds : [{value:'Array',checked:false},{value:'LinkList',checked:false},{value:'HashMap',checked:false},{value:'Stack',checked:false}],
            web : [{value:'HTML',checked:false},{value:'CSS',checked:false},{value:'JavaScript',checked:false},{value:'Nodejs',checked:false}],
            db: [{value:'SQL',checked:false},{value:'MongoDB',checked:false}]
        }
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
        // const {ds,web,db} = this.state;
        const {ds,web,db} = this.props;
        return (
            <div className="container">
                <h2>Data Structure</h2>
                <label>
                    <input type="checkbox" value= "Array"
                        onChange={this.toggleCheckboxChange} id='0'
                    />
                    Array
                </label>
                <label>
                    <input type="checkbox" value= "LinkList" 
                        onChange={this.toggleCheckboxChange} id='0'
                    />
                    LinkList
                </label>
                <label>
                    <input type="checkbox" value= "HashMap"
                        onChange={this.toggleCheckboxChange} id='0'
                    />
                    HashMap
                </label>
                <label>
                    <input type="checkbox" value= "Stack"
                        onChange={this.toggleCheckboxChange} id='0'
                    />
                    Stack
                </label>
                
                <h2>Web</h2>
                <label>
                    <input type="checkbox" value= "HTML"
                        onChange={this.toggleCheckboxChange} id='1'
                    />
                    HTML
                </label>
                <label>
                    <input type="checkbox" value= "CSS"
                        onChange={this.toggleCheckboxChange} id='1'
                    />
                    CSS
                </label>
                <label>
                    <input type="checkbox" value= "JavaScript"
                        onChange={this.toggleCheckboxChange} id='1'
                    />
                    Java Script
                </label>
                <label>
                    <input type="checkbox" value= "Nodejs"
                        onChange={this.toggleCheckboxChange} id='1'
                    />
                    Nodejs
                </label>
                
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