import TableFilter from "./table.js"
const data = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Doe", age: 25 },
  { id: 3, name: "Peter Smith", age: 40 },
];

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Tên" },
  { key: "age", label: "Tuổi" },
];

const App = () => {
  return (
    <div>
      <TableFilter data={data} columns={columns} />
    </div>
  );
};

export default App;
