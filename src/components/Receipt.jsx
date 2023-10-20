import React, { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Receipt({ invoices, onDelete,  onEdit, onMarkAsRead }) {
  const {ReceiptId} = useParams();
  const Invoice = invoices.find((item) => item.id == ReceiptId);
  const [isEditing, setIsEditing] = useState(false);
  const [isGoback, setIsGoback] = useState(false);
   console.log(Invoice);
   console.log(ReceiptId);
  const handleEdit = () => { 
    setIsEditing(true);
  };
  const handleBack = () =>
  {
    setIsGoback(true);
  }

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(invoice.id);
  };

  const handleMarkAsRead = () => {
  };

  return (
    <div className="wrapper">
    <div className="receipt-container">
    <div className='receipt'>
      <Link to={"/"} className='myback'>
        <FaAngleLeft  onClick={handleBack}/>
        Go back
      </Link><br/>
      <div className='receipt-navbar'>
        <div>
          Status 
          <a>{Invoice?.status}</a>
        </div>
        <div className='receipt-btn'>
          {isEditing ? (
            <>
              <button className='r-btn1' onClick={handleSave}>
                Save
              </button>
              <button className='r-btn2' onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <button className='r-btn1' onClick={handleEdit}>
                Edit
              </button>
              <button className='r-btn2' onClick={handleDelete}>
                Delete
              </button>
              <button className='r-btn3' onClick={handleMarkAsRead}>
                Mark as Read
              </button>
            </>
          )}
        </div>
      </div>nbv
      <div className='receipt-body'>
        <p style={{color: 'white'}}>
          Bill To 
          <div> {Invoice.name} </div>
        </p>
        <p>
          Amount Due 
          <div>{Invoice.amount} </div>
        </p>
        <p>
          Invoice Date 
          <div> {Invoice.date}</div>
        </p>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Receipt;
