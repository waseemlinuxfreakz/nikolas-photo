import {React,useState} from 'react';

import image_1 from '../images/image-1.jpg';
import image_2 from '../images/image-2.jpg';
import vector_3 from '../images/Vector-3.png';
import vector_4 from '../images/Vector-4.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes , faDownload } from "@fortawesome/free-solid-svg-icons";




function Content() {
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    //handleClick(e) {
    e.preventDefault()
    console.log(e.target.getAttribute('data-id'));
    //alert(e.target.getAttribute('data-id'));
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
     <div className="main-content modify_hidden" id="modify_hidden_ap">
     <div className="container">
      <h1>Click to modify</h1>

       <ul className="share-list">
       <li><a href="#"><img src={vector_3}alt=""/><span>Share</span></a></li>
       <li><a href="#"><img src={vector_4}alt=""/><span>Email</span></a></li>

       </ul>

       <div className="row card_row">
          {users.allUsers.map((user, index) => (
            <div className="col-sm-4 col-4">
              <div className="cardImage"><img src={user.userAvatar} alt="waseem" data-id={'popupg-'+user.id} class="open-gallary" onClick={handleClick}/></div>
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
   </>
  
    );
  }
  
  export default Content;