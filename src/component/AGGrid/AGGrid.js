import React, { Component } from 'react';
import './AGGrid.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-bootstrap.css';

export default class AGGrid extends Component {
  state = {
    columnDefs: [
        {
        field: "fname",
        headerName: "First Name"
        },
        {
        field: "lname",
        headerName: "Last Name"
        },
        {
        field: "country",
        headerName: "Country"
        },
        {
        field: "sex",
        headerName: "Sex"
        },
        {
        field: "rating",
        headerName: "Rating"
        },
        {
        field: "rides",
        headerName: "Rides"
        }

    ]
  }
  render() {
    return (
        <div
            ag-grid="gridOptions"
            className="ag-theme-bootstrap"
            style={{ height: '31vh', width: '100vw' }}
        >
            <AgGridReact
                enableSorting={true}
                enableFilter={true}
                pagination={true}
                paginationPageSize={2}
                columnDefs={this.state.columnDefs}
                rowData={this.props.data}>
            </AgGridReact>
        </div>
    )
  }
}
