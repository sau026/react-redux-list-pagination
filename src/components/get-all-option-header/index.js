import React, {Component} from 'react';
import { ALL_OPTION } from '../../assets/constant';
import { NavLink } from "react-router-dom";
import './index.scss';

class DashboardSubHeader extends Component {
    render() {
        return (
          <div className="all-option-container">
          <div className="grid-left">GENERAL SETTING</div>
          <div className="grid-right">
            {ALL_OPTION.map((element, i)=>{
            return (
             <NavLink className="option"  to="/dashboard" key={i}>
                <i className={element.icon}></i>                  
                <span>{element.label}</span>
             </NavLink>)
            })}
          </div>
      </div>
        );
    }
}

export default DashboardSubHeader;
