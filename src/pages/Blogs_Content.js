// import { deleteDoc,doc } from "firebase/firestore";

function Blogs_Content(props) {

     
    
    function delteItem(){
         props.delteItem(props.doc.id);
    }

     return (
          <div>

               <div className='home_blogs'>

                    <div className='home-title'>
                       Title:&nbsp;  {props.doc.title}
                       <div className="delete-icon" onClick={delteItem}>&#10060;</div>
                    </div>

                    <div className='blogs-home'>
                         {props.doc.blogs}
                    </div>

                    <div className='author_details'>
                    <div className="author-name">
                        Author Name:&nbsp;
                        {
                         props.doc.author?
                        <div>{props.doc.author}</div>
                        :<div> Not Specified</div>
                        }
                        </div>
                        
                        {
                         props.doc.image?
                        <img src={props.doc.image}  className='image-home' alt="/"/>
                        :<img src= 'https://c4.wallpaperflare.com/wallpaper/645/701/152/pen-book-ink-wallpaper-preview.jpg' className='image-home' alt="/"/>
                        }
                    </div>
               </div>

          </div>
     )
}

export default Blogs_Content