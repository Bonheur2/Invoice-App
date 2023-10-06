import React, { useState } from 'react'
import { FaAngleDown, FaPlusCircle } from 'react-icons/fa'
import Form from './Form'


function Invoice() {
    const [modal, setModal] = useState(false);
    const [invoices, setInvoices] = useState([
        {
            id:0,
            name: "jack",
            amount: "400",
            date: "04-11-2022",
            status: "Cancelled"
        }, 
        {
            id:1,
            name: "jackson",
            amount: "200",
            date: "29-07-2021",
            status: "pending"
        },
        {
            id:2,
            name: "john",
            amount: "600",
            date: "01-02-2023",
            status: "paid"
        }, 
        {
            id:3,
            name: "jason",
            amount: "1200",
            date: "20-01-2020",
            status: "paid"
        }, 
        {
            id:4,
            name: "james",
            amount: "900",
            date: "01-01-2020",
            status: "Cancelled"
        },
    ]);
    function handleSubmit(e) {
        e.preventDefault();
      }
    
      function openModel() {
        setModal((prevModal) => !prevModal);
      }
    
    
      function addNewInvoice(newInvoice) {
        setInvoices([...invoices, newInvoice]);
        setModal(false);
      }
    
      function changeColor (MyColor)
      {
        const [Mycolor, setMyColor] = useState(false);
      }

      function displayData ()
      {
        
      }



  return (
    
    <>
   
    <section className='invoice-section'>
        <div className="invoice-header">
            <h1>Invoices</h1>
            <p>There are {invoices.length} total invoices</p>
        </div>
        <div className="invoice-content">
            <div className="filter">
                <p>Filter by status
                <FaAngleDown className='filter-icon' />
                </p>
                <aside onClick={changeColor}> Dark/Light</aside>
            </div>
            <div className="btn-add" onClick={openModel}>
                <FaPlusCircle/>New Invoice</div>
        </div>       
        { modal? ( <Form addNewInvoice={addNewInvoice}/> ) :
         (
               <div className="invoice-container">
                { invoices.map((item)=>(
                    <div onClick={displayData} key={item.id} className='invoice-content1'>
                        <h2>{item.name}</h2>
                        <p>${item.amount}</p>
                        <p>{item.date}</p>
                        <div href="">
                            <button style={{backgroundColor:item.status==='paid'? 'green': 'gold', 
                            color: 'white', padding: '5px 10px', borderRadius: '10px'}}>{item.status}</button>
                        </div>
                    </div>
                ))}
            </div>
        )
        }
        </section>   
    </>
  )
}

export default Invoice