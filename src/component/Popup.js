import React from 'react';
import Navbar from '../component/Navbar.js';

function Popup(){
  const [hidden, setHidden] = useState(false);

return(
<>
    <div className="popup-wrapper">
  <Navbar/>
    <div className="popup-container" hidden={hidden}>
    <p>Enter your email to see your photos and videos</p>
    <form>
<div className="text-input-div">
<input type="text" placeholder="youremail@email.com"/>
<a href="#">Reset</a>
</div>    
<div className="check-box-div">

<input type="checkbox" name="terms" />
<label for="terms"> I accept the <strong>TCU</strong></label>

</div>
    <button onClick={() => setHidden(!hidden)}>submit</button>    
        
    </form> 
    </div>    
        

    </div>
</>
)


}
export default Popup;
