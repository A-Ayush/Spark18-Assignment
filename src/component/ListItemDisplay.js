import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListItemDisplay extends Component {
    render() {
        // console.log("display",this.props.ds.dsDisplay);
        const dsDisplay = this.props.ds.dsDisplay;
        const dbDisplay = this.props.db.dbDisplay;
        const webDisplay = this.props.web.webDisplay;
        return (
            <div className="mycontainer">
                <div className="display-container">
                    {dsDisplay.length > 0 && (
                        <ul>
                            <span>Data Structure</span>
                            {
                                dsDisplay.map((data) => (
                                    <li className="display-item">
                                        <span className="name">{data}</span>
                                        <i className="fa fa-times icon" aria-hidden="true"></i>
                                    </li>
                                ))
                            }
                        </ul>
                    )}
                </div>
                <div className="display-container">
                    {webDisplay.length > 0 && (
                        <ul>
                            <span>Web Development</span>
                            {
                                webDisplay.map((data) => (
                                    <li className="display-item">
                                        <span className="name">{data}</span>
                                        <i className="fa fa-times icon" aria-hidden="true"></i>
                                    </li>
                                ))
                            }
                        </ul>
                    )}
                </div>
                <div className="display-container">
                    {dbDisplay.length > 0 && (
                        <ul>
                            <span>DataBase</span>
                            {
                                dbDisplay.map((data) => (
                                    <li className="display-item">
                                        <span className="name">{data}</span>
                                        <i className="fa fa-times icon" aria-hidden="true"></i>
                                    </li>
                                ))
                            }
                        </ul>
                    )}
                </div>
               

                
            </div>
        );
    }
}

function  mapStoreToProps(state){
    return {
        ds:state.ds,
        db:state.db,
        web:state.web
    }
}
export default connect(mapStoreToProps)(ListItemDisplay);