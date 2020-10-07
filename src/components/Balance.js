import React, { useContext } from "react";
import { ParentContext } from "../contexts/GlobalValues";

function Balance() {
	const { transactions } = useContext(ParentContext);
	let totalAmount = 0;
	transactions.map((transaction) => (totalAmount += transaction.amount));
	return (
		<>
			<h4>Your Balance</h4>
			<h1 id="balance">${totalAmount.toFixed(2)}</h1>
		</>
	);
}

export default Balance;
