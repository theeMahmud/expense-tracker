import React from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import { ParentProvider } from "./contexts/GlobalValues";

function App() {
	return (
		<ParentProvider>
			<Header />
			<div className="container">
				<Balance />
				<IncomeExpense />
				<TransactionList />
				<AddTransaction />
			</div>
		</ParentProvider>
	);
}

export default App;
