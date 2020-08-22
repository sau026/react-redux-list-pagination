import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../../components/sidebar-left'
import Header from '../../components/header'
import { selectPassenger } from '../../redux/actions/passengersAction'
import DataModal from '../../components/data-modal'
import Table from '../../components/data-table'
import './index.scss';

class Dashboard extends Component {
  openDataModal = (data) => {
    try {
      this.props.selectPassenger(data);
    } catch (error) {
      console.log('error:::::', error)
    }
  };

  closeDataModal = () => {
    try {
      this.props.selectPassenger(null);
    } catch (error) {
      console.log('error:::::', error)
    }
  };

  getAppHeaderJSX() {
    return (
      <>
        <Header headerTitle={'Settings > Dialogues'} />
      </>
    )
  }

  getAppSidebarJSX() {
    return (
      <div className="side-panel">
        <Sidebar></Sidebar>
      </div>
    )
  }

  getTableJSX() {
    return (
      <>
        <Table selectRowData={(data) => this.openDataModal(data)} />
      </>
    )
  }


  render() {
    return (
      <div className="dashboard__page-conatiner -site-text-size">
        <DataModal closeModal={() => this.closeDataModal()} />
        {this.getAppSidebarJSX()}
        <div className="main-body">
          {this.getAppHeaderJSX()}
          {this.getTableJSX()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ passengerDataReducer: state.passengerDataReducer });
export default connect(mapStateToProps, {selectPassenger })(Dashboard);


