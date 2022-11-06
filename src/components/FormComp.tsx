import React, {useState} from 'react';
import { Button, Form, Input, Select, Checkbox ,Col, Row} from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};

/* eslint-enable no-template-curly-in-string */
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
const FormComp = ({formState, handleChange, handleSubmit}:creatBlogPropTypes) => {

 
  return (
  //  <div className='w-[80%] lg:w-[50%] mr-auto ml-auto mt-10 mb-5 pb-5'>
  //    <form>
  //     <div>
  //       <input type="text" name='blogTitle' value={formState.blogTitle}
  //             onChange={(e) => handleChange(e)}
  //       />
  //     </div>
  //     <div >
  //       <input type="text" name='blogAuthor' value={formState.blogTitle}
  //             onChange={(e) => handleChange(e)}/>
  //     </div>
  //     <div>
  //    <label htmlFor="category">Choose a category:</label>
  //       <select id="category" name="category" value={formState.category}
  //             onChange={(e) => handleChange(e)}>
  //             <option value="sports">Sports</option>
  //             <option value="anime">Anime</option>
  //             <option value="technology">Technology</option>
  //       </select>
  //     </div>
  //     <div className='flex flex-col gap-2  items-center'>
  //       <div className='flex flex-row gap-5 items-center'>
  //         <div >
  //             <label htmlFor="featured">Featured Post</label>
  //       <select id="featured" name="featured" value={formState.featured}
  //             onChange={(e) => handleChange(e)}>
  //             <option value="true">True</option>
  //             <option value="false">False</option>
  //       </select>
  //         </div>
  //      </div>
  //     </div>
  //     <div>
  //       <input type="text" name='imageUrl' value={formState.imageUrl}
  //             onChange={(e) => handleChange(e)}/>
  //     </div>
  //     <div>
  //             <textarea id="content" name='content' rows={30} cols={50} value={formState.content}
  //             onChange={(e) => handleChange(e)}>
  //             </textarea>
  //     </div>
     
  //       <button className='bg-[#FF7606]/80 text-white flex w-[50%] items-center justify-center gap-2 py-2 rounded-full border-none' onClick={(e) => handleSubmit(e)}>
  //         Submit
  //       </button>
  //   </form>
  //  </div>
  <div className='w-[80%] lg:w-[50%] mr-auto ml-auto mt-10 mb-5 pb-5'>
  <form className="w-full max-w-lg" onSubmit={(e) => handleSubmit(e)}>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="blogTitle">
        Blog Title
      </label>
      <input name='blogTitle' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="blogTitle" type="text" 
      value={formState.blogTitle}
      onChange={(e) => handleChange(e)}
        />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Image Url
      </label>
      <input name='imageUrl' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" 
      value={formState.imageUrl}
      onChange={(e) => handleChange(e)}
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="featured">
        Featured Post?
      </label>
      <div className="relative">
        <select name='featured' className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="featured"
        value={formState.featured}
        onChange={(e) => handleChange(e)}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category">
        Category
      </label>
      <div className="relative">
        <select name='category' className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="category"
        value={formState.category}
        onChange={(e) => handleChange(e)}
        >
          <option>Select</option>
          <option value="sports">Sports</option>
          <option value="anime">Anime</option>
          <option value="technology">Technology</option>
        </select>
      </div>
    </div>
    <div className="flex flex-wrap  mb-6 w-full mt-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="content">
        Content
      </label>
      <textarea rows={30} name="content" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="content"
       value={formState.content}
       onChange={(e) => handleChange(e)}  
      />
    </div>
  </div>
  <button className='bg-[#FF7606]/80 text-white flex w-[50%] items-center justify-center gap-2 py-2 rounded-full border-none'>
          Submit
  </button>
  </div>
</form>
</div>
  );
};

export default FormComp;

