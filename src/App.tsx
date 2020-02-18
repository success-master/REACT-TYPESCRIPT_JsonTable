import React from 'react';
import './App.css';
import data from './tables.json'

function getKeys() {
  return Object.keys(data['rows'][0]);
}

function getRowsData() {
  var keys = getKeys();
  return data.rows.map((row: any, index: any) => {
    return <tr key={index}>{
      keys.map((key, sub_index) => {
        if (row[key] != null) {
          return <td key={sub_index}>
            <div dangerouslySetInnerHTML={{ __html: row[key] }}></div>
          </td>
        }
      })}
    </tr>
  })
}
function App() {
  return (
    <div className="bodyClass">
      <table>
        <tbody>
          {getRowsData()}
        </tbody>
      </table>
    </div>);
}

export default App;