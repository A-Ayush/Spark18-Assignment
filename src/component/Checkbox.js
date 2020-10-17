import React, { Component } from 'react';

class Checkbox extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const items = this.props;
        console.log(items);
        // console.log(items.items.ds)
        return (
            <div>
                 <label>
                    <input type="checkbox" value= "Array" id='0'
                    />
                    Array
                </label>
            </div>
        );
    }
}

export default Checkbox;