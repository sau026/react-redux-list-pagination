import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import Paginator from '../paginator'

class Table extends Component {


    getTableJSX() {
        return (
            <div className="table-container-main">
                <div className="add-button-container"><button><i style={{ marginRight: '5px' }} className="far fa-plus-square icon"></i>
    Add Dialogue</button></div>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Savings</th>
                                <th>Month</th>
                                <th>Savings</th>
                                <th>Month</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.passengerDataReducer.passengerData.data && this.props.passengerDataReducer.passengerData.data.map((element, i) => {
                                return (<tr onClick={()=>this.props.selectRowData(element.name)} key={i}>
                                    <td>{element.name}</td>
                                    <td><span className="messenger-batch">MESSENGER</span></td>
                                    <td>HRA</td>
                                    <td>
                                        <i className="fa fa-download icon"></i>
                                        <i className="fa fa-upload icon"></i>
                                    </td>
                                    <td>
                                        <i className="fas fa-pencil-alt icon"></i>
                                        <i className="fas fa-copy icon"></i>
                                        <i className="far fa-plus-square icon"></i>
                                        <i className="fas fa-copy icon"></i>
                                        <i className="far fa-plus-square icon"></i>
                                    </td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="pagination-container">
                    <Paginator></Paginator>
                </div>
            </div>
        )
    }

    getSpinnerJSX(){
        return(
        <div className="spinner">
            <i className="fas fa-spinner fa-spin icon"></i>
        </div>
        )
    }

    render() {
        return (
            <>
            { this.props.passengerDataReducer.isLoading && this.getSpinnerJSX()}
            {this.getTableJSX()}
            </>
        );
    }
}

const mapStateToProps = state => ({ passengerDataReducer: state.passengerDataReducer });
export default connect(mapStateToProps)(Table);
