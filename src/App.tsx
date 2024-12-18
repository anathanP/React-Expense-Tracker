import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpensesTable from "./components/ExpensesTable";
import FilterForm from "./components/FilterForm";
import { FieldValues } from "react-hook-form";
import { ExpenseData } from "./components/ExpensesTable";

const App = () => {
  const categories = ["Groceries", "Utilities", "Entertainment"];
  const [expenses, setExpenses] = useState(Array<ExpenseData>);
  const [filter, setFilter] = useState("all");

  const handleSubmit = (data: FieldValues) => {
    setExpenses([
      ...expenses,
      {
        id: data.id,
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
      <ExpenseForm categories={categories} onSubmit={handleSubmit} />
      <FilterForm categories={categories} changeFilter={setFilter} />
      <ExpensesTable
        items={
          filter === "all"
            ? expenses
            : expenses.filter((expense) => expense.category === filter)
        }
        onDelete={handleDelete}
      />
    </>
  );
};

export default App;
