import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import FormComp from '../../components/FormComp'
interface formStateInt {
  blogTitle: string;
  category: string;
  featured: string;
  imageUrl: string;
  content: string;
  date: string;
}

type creatBlogPropTypes ={
  formState:formStateInt,
  handleChange: (e: {target: { name: any; value: any } }) => void,
  handleSubmit: (e: { preventDefault: () => void }) => void
}

const CreateBlog = ({formState, handleChange, handleSubmit}:creatBlogPropTypes) => {
  let navigate = useNavigate()
  const isAuth = localStorage.getItem('isLogIn')

  useEffect(()=> {
      if(!isAuth){
        navigate('/login')
      }
  },[isAuth, navigate])
  return (
    <div className=' py-5'>
      <h2 className='text-center text-lg lg:text-xl font-bold text-[#0F344E]'>Create a New Blog</h2>
      <FormComp formState={formState} handleChange={handleChange} handleSubmit={handleSubmit}/>
     
    </div>
  )
}

export default CreateBlog
