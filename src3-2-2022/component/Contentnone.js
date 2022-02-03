import {React,useState} from 'react';

import image_1 from '../images/image-1.jpg';
import image_2 from '../images/image-2.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes , faDownload } from "@fortawesome/free-solid-svg-icons";
import ImageGallery from '../component/ImageGallery';



function Contentnone() {
  
  const handleClick = (e) => {
    //handleClick(e) {
    e.preventDefault()
    console.log(e.target.getAttribute('data-id'));
    //alert(e.target.getAttribute('data-id'));
    var active_id = e.target.getAttribute('data-id');
    var element_galp = document.getElementById('gallery_list');
    element_galp.classList.add('active');
    
    var element_gal = document.getElementById(active_id);
    element_gal.classList.add('active-gal');
    var prev_elem = document.getElementById("main_content_modify");
    prev_elem.classList.remove("active");
    //var prev_elem = document.getElementById("main_content_modify");
    prev_elem.classList.add("hidden");
  }

  
const usersObject = [
  {
      id: 'img-1',
      userAvatar: image_2,
      class_txt: ""
  },
  {
    id: 'img-2',
    userAvatar: image_1,
    class_txt: ""
},
{
  id: 'img-3',
  userAvatar: image_2,
  class_txt: ""
},
{
  id: 'img-4',
  userAvatar: image_1,
  class_txt: ""
},
{
  id: 'img-5',
  userAvatar: image_2,
  class_txt: ""
},
]

const [users, setUsers] = useState({
  activeMark: null,
  allUsers: usersObject
});

const toggleCheck = (index) => {
  setUsers({...users, activeMark: users.allUsers[index]});
};

const toggleCheckMark = (index) => {
  if(users.allUsers[index] === users.activeMark){
      return users.activeMark = true;
  }
}

    return (
    <>
     <div className="main-content" id="main_content_modify">
      <div className="container">
        <h1>Select Any Photo or Video and Modify</h1>
        <div className="row">
          {users.allUsers.map((user, index) => (
            <div className="col-sm-4 col-4">
              <img src={user.userAvatar} alt="waseem" data-id={'popupg-'+user.id} class="open-gallary" onClick={handleClick}/>
 
              <div data-id={'img-'+index} className="image-click"></div>
                <div id={'img-'+index} className="close-and-download-btn-wrapper hidden">
                  <ul>
                    <li><FontAwesomeIcon icon={faDownload} /></li>
                    <li ><FontAwesomeIcon icon={faTimes}/></li>
                  </ul>
                </div>
              </div>
          ))}
     </div>
    </div>
    </div> 
    <ImageGallery/>
   </>
    );
  }
  
  export default Contentnone;