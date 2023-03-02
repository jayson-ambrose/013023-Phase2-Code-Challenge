import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


function AccountContainer() {

  const [transactions, setTransactions] = useState([])
  const [search, setSearch] = useState ("")

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
    .then(resp => resp.json())
    .then(data => setTransactions(data))
  }, [])

  function postTransaction(obj) {
    console.log(obj)

    fetch("http://localhost:8001/transactions", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(obj)
    })
    .then(resp=>resp.json())
    .then(data => setTransactions([...transactions, data]))

  }

  const handleSearch = (e) => {
    setSearch(e.target.value)    
  }
  
  console.log(search)
  return (
    <div>
      <Search search={search} handleSearch={handleSearch}/>
      <AddTransactionForm postTransaction={postTransaction}/>
      <TransactionsList transactions={transactions} search={search}/>
    </div>
  );
}

export default AccountContainer;
