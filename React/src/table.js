import React, { useState, useEffect } from "react";

const TableFilter = ({ data, columns }) => {
  const [filter, setFilter] = useState("");
  const [filteredData, setFilterData] = useState(data);

  useEffect(() => {
    // Hàm này sẽ chạy khi trạng thái của filter thay đổi
    const filteredData = data.filter((row) => {
      for (const column of columns) {
        const value = row[column.key];
        const filterValue = filter.toLowerCase();
        if (value && value.toString().toLowerCase().includes(filterValue)) {
          return true;
        }
      }
      return false;
    });
    setFilterData(filteredData);
  }, [filter,data,columns]);

  return (
    <div>
      <input
        type="text"
        placeholder="Tìm kiếm..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <table>
        <thead>
          {columns.map((column) => (
            <th key={column.key}>{column.label}</th>
          ))}
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableFilter;
