// import { deleteDoc,doc } from "firebase/firestore";

function Blogs_Content(props) {



     function delteItem() {
          props.delteItem(props.doc.id);
     }

     return (
          <div>

               <div className='home_blogs'>

                    <div className='home-title'>
                         Title:&nbsp;  {props.doc.title}
                         <div className="delete-icon" onClick={delteItem}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                   <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                              </svg>
                         </div>
                    </div>

                    <div className='blogs-home'>
                         {props.doc.blogs}
                    </div>

                    <div className='author_details'>
                         <div className="author-name">
                              Author Name:&nbsp;
                              {
                                   props.doc.author ?
                                        <div>{props.doc.author}</div>
                                        : <div> Not Specified</div>
                              }
                         </div>

                         {
                              props.doc.image ?
                                   <img src={props.doc.image} className='image-home' alt="/" />
                                   : <img src='https://c4.wallpaperflare.com/wallpaper/645/701/152/pen-book-ink-wallpaper-preview.jpg' className='image-home' alt="/" />
                         }
                    </div>
               </div>

          </div>
     )
}

export default Blogs_Content