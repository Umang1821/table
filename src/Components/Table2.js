import React from 'react'
import './Table.css'


    const data = [
        { sno:1, name: "Aman", skills: "Java", projectassigned: "No", },
        { sno:2,name: "Meghna", skills :"Java", projectassigned: "No" },
        { sno:3,name: "Shubh", skills :"Ruby on rails", projectassigned: "No"},
        { sno:4,name: "Amrita", skills :"Laravel", projectassigned: "No"},
        { sno:5,name: "Ganesh", skills :"Java", projectassigned: "No"},
        { sno:6,name: "Ashutosh", skills :"Django", projectassigned: "No"},
        { sno:7,name: "Adityan", skills :"Java", projectassigned: "No"},
        { sno:8,name: "Bhavya", skills :"Javascript", projectassigned: "No"},
        { sno:9,name: "Deep", skills :"Ruby on rails", projectassigned: "No"},
        { sno:10,name: "Varun", skills :"Ruby on rails", projectassigned: "No"},

      ]
        
      function Table2() {
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
                    <td>{val.projectassigned}</td>
                    <td>{val.comment}</td>
                  </tr>
                )
              })}
            </table>
          </div>
        );
      }
     

export default Table2