import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { AiOutlineDelete } from 'react-icons/ai';
import '../../App.css';

function Transaksi() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const transactions = [
    { id: 1, no: 1, invoice: 'INV001', customer: 'John Doe', total: 500, status: 'Pending', proof: 'payment_proof1.jpg' },
    { id: 2, no: 2, invoice: 'INV002', customer: 'Jane Doe', total: 700, status: 'Paid', proof: 'payment_proof2.jpg' },
  ];

  const handleDeleteTransaction = (id) => {
    console.log(`Transaction with ID ${id} deleted`);
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

      <div className="transaksi-container">
        <table className="transaksi-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Invoice</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Status</th>
              <th>Bukti Pembayaran</th>
              <th>Hapus</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.no}</td>
                <td>{transaction.invoice}</td>
                <td>{transaction.customer}</td>
                <td>{transaction.total}</td>
                <td>{transaction.status}</td>
                <td><img src={transaction.proof} alt="Payment Proof" className="payment-proof" /></td>
                <td><button onClick={() => handleDeleteTransaction(transaction.id)}><AiOutlineDelete className='icon'/></button></td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default Transaksi;
