import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pagination } from '@material-ui/lab';
import { passenger } from '../../redux/actions/passengersAction'
import './index.scss';

class Paginator extends Component {

    componentDidMount(){
        this.getpassengerData(1);
    }

    getpassengerData = async (page) => {
        try {
          await this.props.passenger(page, 15);
        } catch (error) {
          console.log('error:::::', error)
        }
    };

    handleChange = (event, value) => {
        this.getpassengerData(value)
      };

    render() {
        return (
          <div className="pageNumber-container">
           <Pagination 
           count={this.props.passengerDataReducer.passengerData.totalPages && this.props.passengerDataReducer.passengerData.totalPages - 1} 
           color="primary" 
           onChange={this.handleChange}
           />
            </div>
        );
    }
}

const mapStateToProps = state => ({ passengerDataReducer: state.passengerDataReducer });
export default connect(mapStateToProps, { passenger })(Paginator);
