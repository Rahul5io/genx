import React, { useState } from 'react';
import '../styles/Invoice.css';

function Invoices() {
    // State for invoice data (this is a simplified example)
    const [invoiceData, setInvoiceData] = useState({
        date: '',
        dueDate: '',
        invoiceNumber: '',
        reference: '',
        billing: '',
        items: [
            { description: '', qty: 0, unitPrice: 0, amount: 0 },
            // Add more items as needed
        ],
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInvoiceData({
            ...invoiceData,
            [name]: value,
        });
    };

    // Handle line item changes
    const handleItemChange = (index, e) => {
        const updatedItems = [...invoiceData.items];
        updatedItems[index][e.target.name] = e.target.value;
        setInvoiceData({
            ...invoiceData,
            items: updatedItems,
        });
    };

    return (
        <div className="invoice-container">
            <h2>Edit Invoice {invoiceData.invoiceNumber}</h2>
            <form>
                <label>Date</label>
                <input 
                    type="date" 
                    name="date" 
                    value={invoiceData.date} 
                    onChange={handleChange} 
                />
                
                <label>Due Date</label>
                <input 
                    type="date" 
                    name="dueDate" 
                    value={invoiceData.dueDate} 
                    onChange={handleChange} 
                />
                
                <label>Invoice Number</label>
                <input 
                    type="text" 
                    name="invoiceNumber" 
                    value={invoiceData.invoiceNumber} 
                    onChange={handleChange} 
                />
                
                <label>Reference</label>
                <input 
                    type="text" 
                    name="reference" 
                    value={invoiceData.reference} 
                    onChange={handleChange} 
                />
                
                <label>Billing</label>
                <input 
                    type="text" 
                    name="billing" 
                    value={invoiceData.billing} 
                    onChange={handleChange} 
                />
                
                {invoiceData.items.map((item, index) => (
                    <div key={index}>
                        <input 
                            type="text" 
                            name="description" 
                            value={item.description} 
                            onChange={(e) => handleItemChange(index, e)} 
                        />
                        <input 
                            type="number" 
                            name="qty" 
                            value={item.qty} 
                            onChange={(e) => handleItemChange(index, e)} 
                        />
                        <input 
                            type="number" 
                            name="unitPrice" 
                            value={item.unitPrice} 
                            onChange={(e) => handleItemChange(index, e)} 
                        />
                        <input 
                            type="number" 
                            name="amount" 
                            value={item.amount} 
                            readOnly 
                        />
                    </div>
                ))}
                
                <button type="submit">Save Invoice</button>
            </form>
        </div>
    );
}

export default Invoices;
