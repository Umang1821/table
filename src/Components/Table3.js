import React from 'react'
import './Table.css'

const getDatafromLS=()=>{
  const data = localStorage.getItem('sno');
  console.log(JSON.parse(data));
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

        
      function Table3() {
        return (
          <div className='Table'>
          {
          <>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>sno</th>
                    <th>Name</th>
                    <th>Skills</th>
                    <th>Comment</th>
                  </tr>
                </thead>
                
              </table>
            </div>
           
          </>}
        </div>

      
  )
}
        
     

export default Table3
