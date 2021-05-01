import React from 'react';

function Info(props) {
    return <table>
      <thead>
      <tr>
        <th>Name of Developer: </th>
        <th>Email Any of Us: </th>
        <th>Call Any of Us: </th>
        <th>Best at: </th>
      </tr>
      </thead>
      <tbody>
      {
        props.workerInfo.map(worker =>
          <tr key = {worker.name}>
            <td>{worker.name}</td>
            <td>{worker.email}</td>
            <td>{worker.phone}</td>
            <td>{worker.bestAt}</td>
          </tr>)
      }
      </tbody>
    </table>
  }

  class Worker extends React.Component {
    render() {
      const workerInfo = 
      [
        {name: "Jonas Rosberg", email: "Jonas.Rosberg@hotmail.com", phone: "072-123 45 67", bestAt: "React, ASP.NET Core"},
        {name: "Sven Svensson", email: "Sven.Sven@hotmail.com", phone: "072-810 12 34", bestAt: "PHP, mySQL"},
        {name: "Martin Martinsson", email: "Martin.Martin@hotmail.com", phone: "072-567 89 10", bestAt: "HTML, CSS3"},
      ];
  
    return (
      <div>
        <Info workerInfo = {workerInfo}/>
      </div>
    );
    }
  }

    export default Worker;
