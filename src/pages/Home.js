
import Header from '../components/Header';
import Blogs_Content from './Blogs_Content';
import './home.css'
import { useEffect, useState } from 'react'
import { getDocs,doc,collection,deleteDoc } from 'firebase/firestore'
import {db} from '../firebase-config'

const Home = () => {

  let refF=collection(db,'users');
  let [data,setData]=useState([]);
  let arr=[];
  

  useEffect(()=>{
    getDocs(refF).then((d)=>{
      setData(d)
    })
  },[])

  function handleDelete(id){
    console.log("delte item home")
    console.log(id)
   let ref=doc(db,'users',id);
  
   deleteDoc(ref).then((result)=>{
    console.log(result);
    console.log("delted itm")
    alert("delted itm from firestore");
    
// refresh the page
window.location.reload(false);

   })
 
console.log("not delted itme")

  }

//  console.log("aaaaaaa")

data.forEach((data)=>{
  arr.push({...data.data(),id:data.id})
// console.log(data.id,data.length)
})


  return (
    <div>
      <Header />
      {

       arr &&
        arr.map((element,i) => (
          <div key={i}>
          <Blogs_Content doc={element} delteItem={handleDelete}/>
          </div>
        ))
      
        
      }
     
    </div>
  )
}

export default Home;