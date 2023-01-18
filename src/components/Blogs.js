import React, { useState } from 'react'
import { db,storage } from '../firebase-config';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { ref,uploadBytes,getDownloadURL } from 'firebase/storage';

const Blogs = () => {
let navigate=useNavigate();

     
let [imgUrl,setImgUrl]=useState(null);
let [image,setImage]=useState(null);
     let [blog,setBlog]=useState({
          title:"",
          blogs:"",
          author:""
          
     });

     let userRef=collection(db,'users');
      
     
  function handleBlogs(){

     let refStorage=ref(storage , `images/${image.name}`)
     getDownloadURL(refStorage).then((result)=>{
          setImgUrl(result);
          console.log("imageurl");
     })
   
     // console.log(imgUrl,"mmm")
     if(!blog.title || !blog.blogs || !blog.author || !imgUrl){
          alert("fill the arguments")
          return;
     } 

     addDoc(userRef,{...blog,"image":imgUrl }).then((result)=>{
          console.log(result);
          console.log("saved sucessfully");
          alert("saved sucessfully");
          navigate("/");
     })
  
  }

  function handleData(e){

  let data=e.target.value;
  let name=e.target.name;
  
   setBlog({...blog,[name]:data});  

  }

  function handleImage(e){

     let img=e.target.files[0];
console.log("handleImage")
setImage(img);
let refStorage=ref(storage , `images/${img.name}`)


   uploadBytes(refStorage,img).then((result)=>{
     alert("image uploaded");
     console.log("image uploaded to the storage");
})

  }

  console.log(blog)
  console.log(blog.title)
  console.log(imgUrl)

  return (
    <div className='blogs'>
    <h3  className='blogs-title'>Title</h3>
    <input type='text' className='input-title' name='title' onChange={handleData} />
   
    

    <div className='write-blogs-parent' >
    Blogs
    <br/>
    <textarea className='write-blogs' name='blogs' onChange={handleData}/>
    </div>

    <div className='autherName'>
    <div>
    <spam className='author-image'>Image:</spam>
    <input  type='file' className='imageInput' name='images' onChange={handleImage}/>
    <br />
    Auther Name :
    <input type='text'   className='author' name='author' onChange={handleData} />
    </div>

    <div className='userImage'>
    <img src='https://c4.wallpaperflare.com/wallpaper/645/701/152/pen-book-ink-wallpaper-preview.jpg'
//     onClick={handleImage}
alt='/'
    className='imageTag' />
    </div>
    </div>
    <button onClick={handleBlogs}  className='saveButton'> save</button>
    </div>
  )
}

export default Blogs;