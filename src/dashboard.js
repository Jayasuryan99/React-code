
import Button from 'react-bootstrap/Button';
import './dasboard.css'
function Dashboard()
{


return(
       <div className="table">
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
                <td> <Button type="button" class="btn btn-danger"> Action </Button> </td>
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
                <td> <Button type="button" class="btn btn-danger"> Action </Button> </td>
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
                <td> <Button type="button" class="btn btn-danger"> Action </Button> </td>
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
                <td> <Button type="button" class="btn btn-danger"> Action </Button> </td>
             </tr>
</table>
          </div> 
          </div> 

)

}
export default Dashboard