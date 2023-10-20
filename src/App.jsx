import { useState } from 'react'
import './index.css'
import Invoice from './components/Invoice'
import Form from './components/Form'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Receipt from './components/Receipt.jsx'

function App() {
  const [invoices, setInvoices] = useState([
    {
        id:0,
        name: "Jack",
        amount: "400",
        date: "04-11-2022",
        status: "Cancelled"
    }, 
    {
        id:1,
        name: "Jackson",
        amount: "200",
        date: "29-07-2021",
        status: "pending"
    },
    {
        id:2,
        name: "John",
        amount: "600",
        date: "01-02-2023",
        status: "paid"
    }, 
    {
        id:3,
        name: "Jason",
        amount: "1200",
        date: "20-01-2020",
        status: "paid"
    }, 
    {
        id:4,
        name: "James",
        amount: "900",
        date: "01-01-2020",
        status: "Cancelled"
    },
]);

  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Invoice invoices={invoices} setInvoices= {setInvoices} />}/>
      <Route path='/:ReceiptId' element={<Receipt invoices={invoices} />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
