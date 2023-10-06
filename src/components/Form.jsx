import React, { useState } from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa';
function Form({ addNewInvoice }) {
    const [Mybutton, setMybutton]= useState(true)
    function changing ()
    {
      setMybutton((prevmybutton)=>(!prevmybutton))
    }

    const [formData, setFormData] = React.useState({
      name: '',
      amount: '',
      date: '',
      status: '',
      });
    
    const handleSubmit = (e) => {
      e.preventDefault();
    const newInvoice = {
      id: Date.now(),
      ...formData,
        };
        addNewInvoice(newInvoice); 
        setFormData({
          name: '',
          amount: '',
          date: '',
          status: '',
        });
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


  return (
    <div className="form-container">
     {
     Mybutton &&    
    <form  onSubmit={handleSubmit}>
        <p className="closeMenu" >
          <FaTimes onClick={changing}/>Close</p>
            <label htmlFor="">Name</label>
            <input type="text" name='name' value={formData.name} onChange={handleInputChange} />
            <label htmlFor="">Amount</label>
            <input type="text" name='amount' value={formData.amount} onChange={handleInputChange} />
            <label htmlFor="">Date</label>
            <input type="date" name='date' value={formData.date} onChange={handleInputChange} />
            <label htmlFor="">Satatus</label>
            <input type="text" name='status' value={formData.status} onChange={handleInputChange}/>
            <button className='test' type='submit'>Submit</button>
        </form>
         }
   
    </div>
  )
}

export default Form