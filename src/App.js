import React, { useRef , useState} from 'react';
import './App.css';

function App() {

  const table = useRef(null);
  const [counter, setCounter] = useState(1);

  const addRow = () => {

    let newRow = table.current.insertRow(table.current.rows.length);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerHTML = `John ${counter}`;
    cell2.innerHTML = "Smith";
    cell3.innerHTML = "Twitter";
    cell4.innerHTML = "456677878";

    setCounter((counter) => counter+1);
  }

  return (  
    <div>
      <button type="button" onClick={addRow}>Add</button>

      <table className="contacts" ref={table}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Company Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td>John</td>
              <td>Smith</td>
              <td>Dynamo</td>
              <td>4566757888</td>
            </tr>
            <tr>
              <td>Adam</td>
              <td>Smith</td>
              <td>Google</td>
              <td>9586756757</td>
            </tr>
            <tr>
              <td>Tamara</td>
              <td>Smith</td>
              <td>Facebook</td>
              <td>8746463466</td>
            </tr>
        </tbody>        
      </table>
    </div>
  );
}

export default App;
