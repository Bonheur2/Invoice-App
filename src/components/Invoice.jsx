import React, { useState } from 'react'
import { FaAngleDown, FaPlusCircle } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'
import Form from './Form'
import Receipt from './Receipt'
import {Link} from "react-router-dom"
import Navbar from './Navbar'


function Invoice({invoices, setInvoices}) {
    const [showReceip, setShowReceipt] = useState(false)
    const [receiptData, setReceiptData] = useState({})
    const [currentIndex, setCurrentIndex] = useState(5)
    const [modal, setModal] = useState(false); 
   
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

    //   function displayData (givenId)
    //   {    
    //     setReceiptData(invoices[givenId])
    //     setShowReceipt(true)
    //   }

  return (
    
    <>
        { showReceip && <Receipt invoice={receiptData}/>}

    <section className='invoice-section'>
    <Navbar />

        <div className="invoice-header">
            <h1>Invoices</h1>
            <p>There are {invoices.length} total invoices</p>
        </div>
        <div className="invoice-content">
            <div className="filter">
                <p>Filter by status
                <FaAngleDown className='filter-icon' />
                <option value="cancelled" name="cancelled"></option>
                <option value="paid" name="paid"></option>
                <option value="pending" name="pending"></option>
                </p>
            </div>
            <div className="btn-add" onClick={openModel}>
                <FaPlusCircle className='new-icons'/>New Invoice</div>
        </div>       
        { modal? ( <Form setInvoices={setInvoices} addNewInvoice={addNewInvoice} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/> ) :
         (
               <div className="invoice-container">
                { invoices.map((item, index)=>(
                    <Link to={`${item.id}`} onClick={()=>{displayData(item.id)}} key={item.id} className='invoice-content1'>
                        <h2>{item.name}</h2>
                        <p>${item.amount}</p>
                        <p>{item.date}</p>
                        <div href="">
                            <button style={{backgroundColor:item.status==='paid'? '#0F2C3F' : '#3B2736', 
                            color: item.status==='paid'?'#33D69F':'#FF8F1C', padding: '10px 15px', borderRadius: '10px'}}><GoDotFill className='dot-icons'/>{item.status}</button>
                        </div>
                    </Link>
                ))}
            </div>
            // ``
        )
        }

        
        </section>   
    </>
  )
}

export default Invoice