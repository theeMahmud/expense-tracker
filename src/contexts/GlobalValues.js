import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

const initialHistory = {
	transactions: [],
};

const initialAuth = {
	authenticated: false,
};

export const ParentContext = createContext(initialHistory);

export const AuthContext = createContext(initialAuth);

export const ParentProvider = ({ children }) => {
	const [AppState, dispatch] = useReducer(AppReducer, initialHistory);

	function deleteTransaction(id) {
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: id,
		});
	}

	function addTransaction(transaction) {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: transaction,
		});
	}

	return (
		<ParentContext.Provider
			value={{
				transactions: AppState.transactions,
				deleteTransaction,
				addTransaction,
			}}
		>
			{children}
		</ParentContext.Provider>
	);
};
