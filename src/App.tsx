import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpensesTable from "./components/ExpensesTable";
import FilterForm from "./components/FilterForm";
import { FieldValues } from "react-hook-form";
import { ExpenseData } from "./components/ExpensesTable";

const App = () => {
  const [expenses, setExpenses] = useState(Array<ExpenseData>);
  const [filter, setFilter] = useState("all");

  const handleSubmit = (data: FieldValues) => {
    setExpenses([
      ...expenses,
      {
        ...data,
        id: expenses.length === 0 ? 1 : expenses[expenses.length - 1].id + 1,
        description: data.description,
        amount: data.amount,
        category: data.category,
      },
    ]);
  };
  const handleDelete = (item: ExpenseData) => {
    setExpenses(expenses.filter((expense) => expense !== item));
  };
  return (
    <>
      <ExpenseForm onSubmit={handleSubmit} />
      <FilterForm changeFilter={setFilter} />
      {expenses.length !== 0 && (
        <ExpensesTable
          items={
            filter === "all"
              ? expenses
              : expenses.filter((expense) => expense.category === filter)
          }
          onDelete={handleDelete}
        />
      )}
    </>
  );
};

export default App;
