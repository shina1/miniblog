import React ,{useState}from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import {addDoc, collection} from 'firebase/firestore'
import Login from './components/Auth/Login';
import Header from './components/Header/HeaderComp';
import CreateBlog from './pages/CreateBlog/CreateBlog';
import Home from './pages/Home/Home';
import ReadABlog from './pages/ViewBlog/ReadABlog';
import { db, auth } from './store/firebas-config';


type authurType = {
  name: string,
  id: string
}
function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  const [blogObject, setBlogObject] = useState<any>();
  let navigate = useNavigate()

  const [formState, setFormState] = useState({
    blogTitle: "",
    blogAuthor: {},
    category: "",
    featured: "false",
    imageUrl: "",
    content: "",
    date: `${new Date()}`,
  });
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormState({...formState, [e.target.name]: e.target.value})
  }

  const blogCollectionRef = collection(db, 'blogs')
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    await addDoc(blogCollectionRef, {blogTitle:formState.blogTitle,category:formState.category,featured: formState.featured, imageUrl:formState.imageUrl,content:formState.content, date:formState.date, blogAuthor:{name:auth.currentUser?.displayName, id: auth.currentUser?.uid} });
    navigate('/')
  }
 
  
  return (
  <>
  <Header setIsLogIn={setIsLogIn}/>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/create' element={<CreateBlog formState={formState} handleChange={handleChange} handleSubmit={handleSubmit}/>} />
          <Route path='/blog/:id' element={<ReadABlog />} />
          <Route path='/login' element={<Login setIsLogIn={setIsLogIn}/>} />
    </Routes>
  </>
  );
}

export default App;
