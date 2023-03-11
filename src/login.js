import React from 'react';
import Group from './Group.webp';
import frame3 from './frame3.webp'
import lock from './lock.webp'
function Surya()

{

return(
  <div id='d1'>
  <center>
  <img  id='i1' src={Group} alt='React-images'/> 
  <p> Login to BOT361 </p> 
<div id='d2'>
<img id='i2' src={frame3} alt='React-images'/>
 <input type='text' placeholder='enter your username'/>
 </div>
 <br/>
 <div id='d3'>
 <img id='i3' src={lock} alt='React-images'/>
 <input type='password' placeholder='enter your password'/>
 </div>
 <a href='#' id='s1'> Forget Password? </a> <br/> 
 <button> Next </button>
  </center>
  </div>
)
}
export default Surya