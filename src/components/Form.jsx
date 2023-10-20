import React, { useState } from "react";
function Form({ addNewInvoice, currentIndex, setCurrentIndex, setInvoices }) {
  const [Mybutton, setMybutton] = useState(true);
  function changing() {
    setMybutton((prevmybutton) => !prevmybutton);
  }

  const [formData, setFormData] = React.useState({
    name: "",
    amount: "",
    date: "",
    status: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInvoice = {
      id: currentIndex,
      ...formData,
    };
    addNewInvoice(newInvoice);
    setCurrentIndex((prev) => prev + 1);
    setFormData({
      name: "",
      amount: "",
      date: "",
      status: "",
    });
    // setInvoices((prev =>[
    //   ...prev,
    //   newInvoice
    // ]))
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-all">
    <div className="form-container">
      {Mybutton && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="inputs"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label htmlFor="">Amount</label>
          <input
            type="text"
            className="inputs"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
          />
          <label htmlFor="">Date</label>
          <input
            type="date"
            className="inputs"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
          <label htmlFor="">Status</label>
          <input
            type="text"
            className="inputs"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          />
          <div className="form-btn">
            <div className="form-btn-1">
              <a className="test1" onClick={changing}>
                Discard
              </a>
            </div>
            <div className="form-btn-2">
              <a className="test2">Save as Draft</a>
              <button className="test">Save & Send</button>
            </div>
          </div>
        </form>
      )
      }
    </div>
    </div>
  );
}

export default Form;
