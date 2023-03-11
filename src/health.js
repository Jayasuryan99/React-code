import React from 'react'

export default function Health() {
  return (
    <div>
        <div className='Health-Check'>
   <input type='radio'/> Run Pre-Check Tool 
   <input type='radio' /> Run Post-Check Tool
    <br/>
    <label> From Mail </label>
    <input type='text'/>
    <label> To Mail </label>
    <input type='text'/>
</div>
<tabel border={4}>
 <tr> 
    <th>
        S.No
    </th>
    <th>
        Node ID
    </th>
    <th>
            Type
    </th>
    <th>
 </th>
 </tr>
<tr>
    <td> 
        1
    </td>
    <td>
        CL00987
    </td>
    <td>
    LTE    
     </td>
     <td>
        <img src={img} alt='React-images'/> 
        </td> 
</tr>
<tr>
    <td> 
        2
    </td>
    <td>
        CL00957
    </td>
    <td>
    LTE    
     </td>
     <td>
        <img src={img} alt='React-images'/> 
        </td> 
</tr>
<tr>
    <td> 
        3
    </td>
    <td>
        CL00967
    </td>
    <td>
    LTE    
     </td>
     <td>
        <img src={img} alt='React-images'/> 
        </td> 
</tr>
<tr>
    <td> 
        4
    </td>
    <td>
        CL00997
    </td>
    <td>
    LTE    
     </td>
     <td>
        <img src={img} alt='React-images'/> 
        </td> 
</tr>

</tabel>
    </div>   
    
  )
}
