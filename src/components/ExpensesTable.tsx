import { ExpenseData } from "../App.tsx";

interface Props {
  categories: string[];
  items: ExpenseData[];
}

const ExpensesTable = ({ categories, items }: Props) => {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="category-list" className="form-label"></label>
          <select
            name="category-list"
            id="category-list"
            className="form-select"
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={index}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{categories[item.category]}</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ExpensesTable;
