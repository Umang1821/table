import React from 'react'
import './Table.css'


    const data = [
        { sno:1, name: "Anom", skills: "Java", projectassigned: "No", },
        { sno:2,name: "Megha", skills :"Java", projectassigned: "No" },
        { sno:3,name: "Subham", skills :"Html,css", projectassigned: "No"},
        { sno:4,name: "Amit", skills :"Html,css", projectassigned: "No"},
        { sno:5,name: "Gokul", skills :"Html,css", projectassigned: "No"},
        { sno:6,name: "Ashish", skills :"Html,css", projectassigned: "No"},
        { sno:7,name: "Aditya", skills :"Html,css", projectassigned: "No"},
        { sno:8,name: "Anam", skills :"Html,css", projectassigned: "No"},
        { sno:9,name: "Shardul", skills :"Html,css", projectassigned: "No"},
        { sno:10,name: "Virat", skills :"Html,css", projectassigned: "No"},

      ];

      
        
      function Table() {
        const [value,setValue]=React.useState(false);
        const handleChange = (par1,par2) => {
        
          console.log(par1);
          setValue(!value);

        }
        return (
          <div className="Table">
            <table>
              <tr>
                <th>SNo</th>
                <th>Name</th>
                <th>Skills</th>
                <th>Project Assigned</th>
                <th>Comment</th>
              </tr>
              {data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.sno}</td>
                    <td>{val.name}</td>
                    <td>{val.skills}</td>
                    <label><input type="radio" checked={value} onChange={handleChange(val.sno, val.name)}/>Yes</label>
        
                    <td>{val.comment}</td>
                  </tr>
                )
              })}
            </table>
          </div>
        );
      }
     

export default Table