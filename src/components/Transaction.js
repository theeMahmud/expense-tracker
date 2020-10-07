import React, { useContext } from "react";
import { ParentContext } from "../contexts/GlobalValues";

const Transaction = ({ transaction }) => {
	const sign = transaction.amount > 0 ? "$" : "-$";
	const { deleteTransaction } = useContext(ParentContext);

	return (
		<li className={transaction.amount > 0 ? "plus" : "minus"}>
			{transaction.text}
			<span>
				{sign}
				{Math.abs(transaction.amount)}
			</span>
			<button
				onClick={() => deleteTransaction(transaction.id)}
				className="delete-btn"
			>
				x
			</button>
		</li>
	);
};

export default Transaction;
