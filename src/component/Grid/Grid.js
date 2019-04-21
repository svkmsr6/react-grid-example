import React, {useState} from 'react';
import ReactDataGrid from "react-data-grid";
import { Toolbar, Data } from "react-data-grid-addons";
import './Grid.css';

const ROW_COUNT = 50;

const defaultColumnProperties = {
    sortable: true,
    filterable: true,
    width: 222
};

const selectors = Data.Selectors;

const columns = [
    {
      key: "fname",
      name: "First Name"
    },
    {
      key: "lname",
      name: "Last Name"
    },
    {
      key: "country",
      name: "Country"
    },
    {
      key: "sex",
      name: "Sex"
    },
    {
      key: "rating",
      name: "Rating"
    },
    {
      key: "rides",
      name: "Rides"
    }
].map(c => ({ ...c, ...defaultColumnProperties }));

const handleFilterChange = filter => filters => {
    const newFilters = { ...filters };
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
      delete newFilters[filter.column.key];
    }
    return newFilters;
  };
  
function getRows(rows, filters) {
    return selectors.getRows({ rows, filters });
}

const sortRows = (initialRows, sortColumn, sortDirection) => rows => {
    const comparer = (a, b) => {
        if (sortDirection === "ASC") {
        return a[sortColumn] > b[sortColumn] ? 1 : -1;
        } else if (sortDirection === "DESC") {
        return a[sortColumn] < b[sortColumn] ? 1 : -1;
        }
    };
    return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer);
};

export default function Grid({ data }) {
    const [rows, setRows] = useState(data || []);
    const [filters, setFilters] = useState({});
    const filteredRows = getRows(rows, filters);

    return (
        <ReactDataGrid
            columns={columns}
            rowGetter={i => filteredRows[i]}
            rowsCount={filteredRows.length}
            //minHeight={500}
            toolbar={<Toolbar enableFilter={true} />}
            onAddFilter={filter => setFilters(handleFilterChange(filter))}
            onClearFilters={() => setFilters({})}
            onGridSort={(sortColumn, sortDirection) => setRows(sortRows(rows, sortColumn, sortDirection))}
        />
    )
}
