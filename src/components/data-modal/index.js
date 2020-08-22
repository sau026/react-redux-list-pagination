import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';

class DataModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAlert: false,
            alertText: null,
            showModal: false
        };
    }
    
    getModalJSX() {
        return (
            <>
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={() => {
                            this.props.closeModal()
                        }}>&times;</span>
                        <h3>Data Model</h3>
                    </div>
                    <div className="modal-body">
                       <h2>{this.props.passengerDataReducer.selectedPassengerData && this.props.passengerDataReducer.selectedPassengerData}</h2>
                    </div>
                </div>
            </>
        )
    }

    render() {
        return (
            <div>
               {this.props.passengerDataReducer.selectedPassengerData ? <div  id="myModal" className="modal">
                    {this.getModalJSX()}
                </div> : null}
            </div>
        );
    }
}


const mapStateToProps = state => ({ passengerDataReducer: state.passengerDataReducer });
export default connect(mapStateToProps)(DataModal);

