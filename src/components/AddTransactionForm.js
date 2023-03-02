import React, {useState} from "react";

function AddTransactionForm({postTransaction}) {

  const [formData, setFormData] = useState({

  })

  function handleChange (e) {
    const {name, value} = e.target
    setFormData({
      ...formData, [name]:value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    postTransaction(formData)
  }

  console.log(formData)

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" onChange={handleChange}/>
          <input type="text" name="description" placeholder="Description" onChange={handleChange} />
          <input type="text" name="category" placeholder="Category" onChange={handleChange}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
