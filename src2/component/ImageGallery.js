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
        allUsers_list: usersObject_gal
      });
  
     

   
return(
<>
<div className="image-gallery-wrapper" id="gallery_list">


<div className="container">
<div className="image-gallery-inner-wrapper">
<h2>Click to modify</h2>
{users_gal.allUsers_list.map((users, indexs) => (
<figure className="gallery-main-image" id={'popupg-'+users.id}  ><img className="galery-mains-img" src={image_3} alt=""/></figure>
))}
<h3>PICK A FILTER</h3>
<div className="filter-wrapper">
<div className="row">
<div className="col-sm-2"><h3>Sepia</h3><figure  className="filter_img sepia"><img src={image_3} alt=""/></figure></div>    
<div className="col-sm-2"><h3>Classic</h3><figure className="filter_img classic"><img src={image_3} alt=""/></figure></div>
<div className="col-sm-2"><h3>Lark</h3><figure className="filter_img lark"><img src={image_3} alt=""/></figure></div>
<div className="col-sm-2"><h3>Black and White</h3><figure className="filter_img baw-effect"><img src={image_3} alt=""/></figure></div>
<div className="col-sm-2"><h3>Bokeh</h3><figure className="filter_img bokeh"><img src={image_3} alt=""/></figure></div>
<div className="col-sm-2"><h3>Street</h3><figure className="filter_img street"><img src={image_3} alt=""/></figure></div>
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
