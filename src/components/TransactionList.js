import React, { useContext } from "react";
import { ParentContext } from "../contexts/GlobalValues";
import Transaction from "./Transaction";

function TransactionList() {
	const { transactions } = useContext(ParentContext);
	return (
		<>
			<h3>History</h3>
			<ul id="list" className="list">
				{transactions.map((transaction) => (
					<Transaction
						key={transaction.id}
						transaction={transaction}
					/>
				))}
			</ul>
		</>
	);
}

export default TransactionList;
