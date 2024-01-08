import React, { Component, useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Button, Modal } from 'antd';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import { onSelectingCorrectionToEdit } from 'redux/actions/Lrn';
import EditableModalTable from './EditableModalTable';

export class AbstractTable extends Component {

  render() {
     return (
      <div>
        <EditableModalTable tableData={this.props.tableData} tableColumns={this.props.tableColumns} isAllowedToEditTableData={this.props.isAllowedToEditTableData}/>
      </div>
    )
  }
}


export default AbstractTable;
