import React, { Component } from 'react';
import DashboardSubHeader from '../../components/get-all-option-header';
import Sidebar from '../../components/sidebar-left'
import Header from '../../components/header'
import './index.scss';

class TaskDashboard extends Component {
  getAppHeaderJSX(){
    return(
      <>
        <Header headerTitle={'Settings'}/>
      </>
    )
  }

  getAppSidebarJSX(){
    return(
      <div className="side-panel">
        <Sidebar></Sidebar>
      </div>
    )
  }

  getAppAllOptionJSX(){
    return(
      <>
       <DashboardSubHeader />
      </>
    )
  }

  render() {
    return (
      <div className="dashboard__page-conatiner -site-text-size">
        {this.getAppSidebarJSX()}
        <div className="main-body">
          {this.getAppHeaderJSX()}
          {this.getAppAllOptionJSX()}
        </div>
      </div>
    );
  }
}

export default TaskDashboard;
