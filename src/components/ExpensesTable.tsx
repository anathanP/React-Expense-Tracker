import { useState } from "react";
import { ExpenseData } from "../App.tsx";

interface Props {
  categories: string[];
  items: ExpenseData[];
  onDelete: (item: ExpenseData) => void;
}

const ExpensesTable = ({ categories, items, onDelete }: Props) => {
  const [category, setCategory] = useState(-1);
  const handleChange = (id: number) => {
    setCategory(id);
  };

  const renderTable = (items: Array<ExpenseData>) => {
    let total = 0;
    items.map((item) => (total = total + item.amount));
    return (
      <>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{categories[item.category]}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(item)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">Total</th>
            <td>{total}</td>
          </tr>
        </tfoot>
      </>
    );
  };
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="category-list" className="form-label"></label>
          <select
            onChange={(event) => handleChange(parseInt(event.target.value))}
            name="category-list"
            id="category-list"
            className="form-select"
          >
            <option value="-1">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={index}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </form>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {category === -1
          ? renderTable(items)
          : renderTable(items.filter((item) => item.category === category))}
      </table>
    </>
  );
};

export default ExpensesTable;
