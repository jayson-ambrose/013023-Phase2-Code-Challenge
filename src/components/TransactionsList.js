import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions, search}) {

  const renderedTransactions = transactions.filter(transaction => transaction.description.toLowerCase().includes(search.toLowerCase()))
    .map(transaction=> <Transaction key={transaction.id} transaction={transaction}/>)

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {renderedTransactions}
      </tbody>
    </table>
  );
}

export default TransactionsList;
