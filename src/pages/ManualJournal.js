import React, { useState } from 'react';
import '../styles/ManualJournal.css';

function ManualJournal() {
  const [lineItems, setLineItems] = useState([
    { description: '', accountName: '', taxRate: '', debit: '', credit: '' },
    { description: '', accountName: '', taxRate: '', debit: '', credit: '' }
  ]);

  const handleAddLine = () => {
    setLineItems([
      ...lineItems,
      { description: '', accountName: '', taxRate: '', debit: '', credit: '' }
    ]);
  };

  return (
    <div className="manual-journal-container">
      <h1>New Manual Journal</h1>
      <form className="manual-journal-form">
        <div className="form-top-section">
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" />
          </div>

          <div className="form-group date-group">
            <label htmlFor="narration">Narration</label>
            <input type="text" id="narration" name="narration" />
          </div>
        </div>

        <div className="line-items-section">
          <table className="line-items-table">
            <thead>
              <tr>
              <th className="description-header">Description</th>
                <th>Account Name</th>
                <th>Tax Rate</th>
                <th>Line Amount Debit</th>
                <th>Line Amount Credit</th>
              </tr>
            </thead>
            <tbody>
              {lineItems.map((item, index) => (
                <tr key={index}>
                 <td className="description-cell"><input type="text" value={item.description} /></td>
                  <td><input type="text" value={item.accountName} /></td>
                  <td><input type="text" value={item.taxRate} /></td>
                  <td><input type="number" value={item.debit} /></td>
                  <td><input type="number" value={item.credit} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" className="add-line-btn" onClick={handleAddLine}>Add a new line</button>
        </div>

        {/* Totals section */}
        {/* Actions section */}
      </form>
    </div>
  );
}

export default ManualJournal;
