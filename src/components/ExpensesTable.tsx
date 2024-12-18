export interface ExpenseData {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  items: ExpenseData[];
  onDelete: (item: ExpenseData) => void;
}

const ExpensesTable = ({ items, onDelete }: Props) => {
  let total = 0;
  items.map((item) => (total = total + item.amount));
  return (
    <table className="table table-bordered">
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
            <td>{item.category}</td>
            <td>
              <button className="btn btn-danger" onClick={() => onDelete(item)}>
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
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpensesTable;
