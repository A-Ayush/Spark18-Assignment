import React, { Component } from 'react';

class Checkbox extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {items} = this.props;
        // console.log(items.value);
        return (
            <div>
                 <label>
                    <input type="checkbox" value= {items.value} id= {items.key}
                    />
                    {items.value}
                </label>
            </div>
        );
    }
}

export default Checkbox;