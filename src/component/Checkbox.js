import React, { Component } from 'react';

class Checkbox extends Component {
    render() {
        const {items,toggleCheckboxChange} = this.props;
        // console.log(items);
        return (
            <label>
                <input type="checkbox" value= {items.value} id= {items.id}  checked={items.checked} onClick={toggleCheckboxChange}/>
                {items.value}
            </label>
            
        );
    }
}

export default Checkbox;