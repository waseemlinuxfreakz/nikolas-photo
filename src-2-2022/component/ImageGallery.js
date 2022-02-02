import React from 'react';
import Navbar from '../component/Navbar.js';
import image_3 from '../images/image-3.jpg';
import { useState } from 'react';


function ImageGallery(){
    const usersObject_gal = [
        {
            id: 'img-1',
            userAvatar: image_3,
            class_txt: ""
        },
        {
          id: 'img-2',
          userAvatar: image_3,
          class_txt: ""
      },
      {
        id: 'img-3',
        userAvatar: image_3,
        class_txt: ""
      },
      {
        id: 'img-4',
        userAvatar: image_3,
        class_txt: ""
      },
      {
        id: 'img-5',
        userAvatar: image_3,
        class_txt: ""
      },
      ]
      
      const [users_gal, setUsers_gal] = useState({
        activeMark: null,
        allUsers: usersObject_gal
      });
  
     

   
return(
<>
<div className="image-gallery-wrapper">


<div className="container">
<div className="image-gallery-inner-wrapper">
<h2>Click to modify</h2>

<figure className="gallery-main-image"  ><img className="galery-main-img" src={image_3} alt=""/></figure>
<h3>PICK A FILTER</h3>
<div className="filter-wrapper">
<div className="row">
<div className="col-sm-2"><h3>Sepia</h3><figure  className="sepia"><img src={image_3} alt=""/></figure></div>    
<div className="col-sm-2"><h3>Classic</h3><figure className="classic"><img src={image_3} alt=""/></figure></div>
<div className="col-sm-2"><h3>Lark</h3><figure className="lark"><img src={image_3} alt=""/></figure></div>
<div className="col-sm-2"><h3>Black and White</h3><figure className="baw-effect"><img src={image_3} alt=""/></figure></div>
<div className="col-sm-2"><h3>Bokeh</h3><figure className="bokeh"><img src={image_3} alt=""/></figure></div>
<div className="col-sm-2"><h3>Street</h3><figure className="street"><img src={image_3} alt=""/></figure></div>
</div>

<button>OK</button>

</div>


</div>
</div>
</div>
</>
)


}
export default ImageGallery;
