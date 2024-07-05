import React from 'react'
import './DepartmentComponent.css'

const DepartmentComponent = () => {
//   const data = [
//     { department: 'AIDS', count: 120 },
//     { department: 'ECE', count: 150 },
//     { department: 'AI&IOT', count: 110 },
//     { department: 'Medical Electronic', count: 110 },
//     { department: 'BME', count: 110 },
//     { department: 'EEE', count: 100 },
//     { department: 'MECH', count: 130 },
//     { department: 'EIE', count: 90 },
//     { department: 'AIML', count: 110 },
//     { department: 'AICS', count: 80 },
//     { department: 'CSE', count: 200 }
//   ];

//   return (
//     <React.Fragment>
//     <p><h1>Departments</h1></p>
    
//       <table className="table">
//         <thead>
//           <tr>
//             <th className="th">Department</th>
//             <th className="th">Count</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td className="td">{item.department}</td>
//               <td className="td">{item.count}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
    
//     </React.Fragment>
//   );
// };
  return (
    <React.Fragment>
    <p ><h1>Departments</h1></p>
    <table class="table" >
      <thead>
      <tr>
        <th className="th"><h2>Department</h2></th>
        <th className="th"><h2>Count</h2></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td className="td">AIDS</td>
        <td className="td">120</td>
      </tr>
      <tr>
        <td className="td">ECE	</td>
        <td className="td">150</td>
      </tr>
      <tr>
        <td className="td">AI&IOT	</td>
        <td className="td">110</td>
      </tr>
      <tr>
        <td className="td">Medical Electronic	</td>
        <td className="td">110</td>
      </tr>
      <tr>
        <td className="td">BME	</td>
        <td className="td">110</td>
      </tr>
      <tr>
        <td className="td">EEE	</td>
        <td className="td">100</td>
      </tr>
      <tr>
        <td className="td">MECH	</td>
        <td className="td">130</td>
      </tr>
      <tr>
        <td className="td">EIE	</td>
        <td className="td">90	</td>
      </tr>
      <tr>
        <td className="td">AIML		</td>
        <td className="td">110</td>
      </tr>
      <tr>
        <td className="td">AICS			</td>
        <td className="td">80</td>
      </tr>
      <tr>
        <td className="td">CSE	</td>
        <td className="td">200</td>
      </tr>
      </tbody>

    </table>
  </React.Fragment>
   );
  };

    
 

export default DepartmentComponent