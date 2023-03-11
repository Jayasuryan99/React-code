
import img from './assests/img.png'
function surya()
{

return(
    <>
    <div className="table">
       <p> UTRAN Dashboard </p>   
        <a href="#"> Dashboard </a>
          <div className="insidetable"> 
            <table border={3}>
             <tr>
                 <th> Date  </th>
                 <th> SiteID </th>
                 <th> Planned SoW </th>
                 <th> Estimated time</th>
                 <th> Progress </th> 
                 <th> GC Contact number </th>
                 <th> login time </th>
                 <th> Logut time </th>
                 <th> Pre check Engineer </th>
                 <th> Post check Report </th>
             </tr>
             <tr>
                <td> 11.03.2023 </td>
                <td> ALLO0020 </td>
                <td> Antenna Swap </td>
                <td> 8 </td>
                <td> </td>
                <td> jayasuryan </td>
                <td> 12.43am </td>
                <td>  10.00pm </td>
                <td> mohanthi </td>
                <td> <button type="button" class="btn btn-danger"> Action </button> </td>
             </tr>
             <tr>
                <td> 12.03.2023 </td>
                <td> ALLO0020 </td>
                <td> Antenna Swap </td>
                <td> 1 </td>
                <td> </td>
                <td> raghul </td>
                <td> 12.00am </td>
                <td>  5.00pm </td>
                <td> mohanthi </td>
                <td> <button type="button" class="btn btn-danger"> Action </button> </td>
             </tr>
             <tr>
                <td> 13.03.2023 </td>
                <td> ALLO0020 </td>
                <td> Antenna Swap </td>
                <td> 2 </td>
                <td> </td>
                <td> gokul </td>
                <td> 12.40am </td>
                <td>  3.00pm </td>
                <td> mohanthi </td>
                <td> <button type="button" class="btn btn-danger"> Action </button> </td>
             </tr>
             <tr>
                <td> 14.03.2023 </td>
                <td> ALLO0020 </td>
                <td> Antenna Swap </td>
                <td> 8 </td>
                <td> </td>
                <td> sudhakar </td>
                <td> 11.43am </td>
                <td>  2.00pm </td>
                <td> mohanthi </td>
                <td> <button type="button" class="btn btn-danger"> Action </button> </td>
             </tr>
</table>
             <div className='GC Login'> 
                  <a href='#'> GC Login </a>
                  <br/>
                    <label> SiteID </label> <br/> 
                  <select> 
                        <option className='select'>
                                ALLO0020
                                </option>
                    </select>
                    
                    <label> Account </label> <br/>
                    <select> 
                        <option className='select'>
                                HDFC Bank
                                </option>
                    </select> 
                    <label> GC Contact Name </label> <br/>
                    <select> 
                        <option className='select'>
                                Hawkings
                                </option>
                    </select>
                      <label> Planned SoW </label> <br/>
                    <select> 
                        <option className='select'>
                            Cx
                         </option>
                    </select>
                    <label> DTO </label> <br/>
                    <select> 
                        <option className='select'>
                               Yes
                                </option>
                    </select>
                    <label> Market </label> <br/>
                    <select> 
                        <option className='select'>
                                Dellas
                                </option>
                    </select>
                    <label> GC Contact Number </label> <br/>
                    <select> 
                        <option className='select'>
                                123-456-7890
                                </option>
                    </select>
                    <label> GC Contact Name </label> <br/>
                    <select> 
                        <option className='select'>
                                jayasuryan
                                </option>
                    </select>
                    <label> GC Mail ID </label> <br/>
                    <select> 
                        <option className='select'>
                                jayasuryan99@gmail.com
                                </option>
                    </select>

            </div>
            <button type='button'> Submit </button>  
          </div> 

<div className='Health-Check'>
   
   <a href='#'> Health Check </a> <br/>
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
    </>
)

}
export default surya