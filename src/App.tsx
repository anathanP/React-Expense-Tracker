import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpensesTable from "./components/ExpensesTable";
import { FieldValues } from "react-hook-form";

export interface ExpenseData {
  description: string;
  amount: number;
  category: number;
}

const App = () => {
  const categories = ["Groceries", "Utilities", "Entertainment"];
  const [expenses, setExpenses] = useState(Array<ExpenseData>);

  const handleSubmit = (data: FieldValues) => {
    setExpenses([
      ...expenses,
      {
        description: data.description,
        amount: data.amount,
        category: data.category,
      },
    ]);
  };
  return (
    <>
      <ExpenseForm categories={categories} onSubmit={handleSubmit} />
      <ExpensesTable categories={categories} items={expenses} />
    </>
  );
};

export default App;
