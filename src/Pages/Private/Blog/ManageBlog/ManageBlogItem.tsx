import react,{useEffect, useState} from 'react'

import { useQuery , useMutation } from "@apollo/client";
import AdminLayout from '../../../../Components/AdminLayout';
import { useParams } from 'react-router-dom'
import { RichTextEditor } from '@mantine/rte';
import { Result} from 'antd';
import { TextInput } from '@mantine/core';
import { At } from 'tabler-icons-react';
import { Select } from '@mantine/core';
import { LoadingOverlay, Button, Group } from '@mantine/core';
import  {GET_BLOG_ITEM} from '../../../../graphQL/queries'
import {UPDATE_BLOG} from '../../../../graphQL/mutations'
import { isAuthenticated } from '../../Auth/APIs'

const ManageBlogItem = () => {

    const validateAcess = isAuthenticated() 
    console.log(validateAcess)
    let { id} = useParams();
    let blog_id:any = id
    const [updateBlog, { error }] = useMutation(UPDATE_BLOG);
    const { data, loading } = useQuery(GET_BLOG_ITEM, { 
        variables: {
        id : parseInt(blog_id)}

          
    
    });
    console.log(data)
   
   
    const [formError,setError] = useState()
    const [category,setCategory] = useState<any>('Design')
    
    const [loaded,setLoaded] = useState(false)
    const [visible, setVisible] = useState(false);
    const [values,setValues] = useState({
        title : data ? data.getBlog.title : '',
     
        initialValue: ''
        
    })


    const {
        title,
      
        initialValue
    } = values

    const [value, onChange] = useState(initialValue);
    const details = () =>{
        return(
            <div className='row ' >
                <div className='col-12 py-4 form-group'>

                    <div className='row' style={{paddingLeft:'3%',paddingRight:'3%'}}>


                        <div className='col-6'>
                      
                            <TextInput label="Blog Title" placeholder="Blog Title..." onChange={(e)=> {setValues({...values, title: e.target.value})}} value={title} icon={<At size={14} />} />
                        </div>


                        <div className='col-6'>
                         <Select label="Blog Category" data={[{ value: 'Design', label: 'Design' },{ value: 'Art', label: 'Art' },{ value: 'Fashion', label: 'Fashion' },{ value: 'Photography', label: 'Photography' }]} onChange={setCategory} value={category}  />
                        </div>

                    </div>

                </div>
            </div>
        )
    }

    const blogBody = () =>{
        return(
            <div className='row ' >
                <div className='col-12 f'>

                    <div className='row' style={{paddingLeft:'3%',paddingRight:'3%'}}>


                        <div className='col-12'>

                            {loaded && 

                              <RichTextEditor style={{minHeight:'50vh'}} value={value} onChange={onChange} />
                    
                            }
                      
                        </div>


                    </div>

                </div>
            </div>
        )
    }

    const submitBlog = () => {
        setVisible(true)
        console.log(value)
        updateBlog({
            variables: {
              title: title,
              id: parseInt(blog_id),
              category:category,
              body: value,
              timestamp : new Date()
            },
          })
          .then((data:any) => {
            if (data.error) {
                setError(data.error)
            }
            else {
                
                
                setTimeout(function () {

                    window.location.href="/admin/manage/blogs"

                    }, 2000);
                
            }
        })

    }

useEffect(()=>{

    data && setValues({...values , title : data.getBlog.title})
    data && setCategory(data.getBlog.category)
    data && onChange(data.getBlog.body)
    data && setLoaded(true)
  
    
    
    

},[data])
return(
    <AdminLayout>

<div className='row p-4'>

            
<div className='col-12 ' style={{paddingLeft:'15%',paddingRight:'15%',paddingTop:'5%'}}>

    <div className='row px-4'>

    
        <div className='col-12 shadow' style={{backgroundColor:'white',borderTopRightRadius:'2vh',borderTopLeftRadius:'2vh'}}>
        
        
        <LoadingOverlay visible={visible} />

        <div className='row p-0'>
        <div className='col-12  shadow text-center' style={{backgroundColor:'#DC002E ',borderTopRightRadius:'2vh',borderTopLeftRadius:'2vh',borderBottomRightRadius:'2vh',borderBottomLeftRadius:'2vh'}}> 

<span  style={{lineHeight:'6vh',color:'white',fontSize:'2vh',fontWeight:'bold',fontFamily: "'Abril Fatface', cursive ,'Merriweather Sans', sans-serif"}}>Update Blog Post</span>

</div>
        </div>
     
        {details()}

{blogBody()}

<div className='row ' style={{paddingLeft:'3%',paddingRight:'3%'}}>
<div className='col-12 py-4 text-right'>

  
<span className='btn btn-danger' onClick={submitBlog}
               

                 >update
                 </span>


</div>
</div>

                </div>
    </div>





</div>
        


</div>
        

    </AdminLayout>


)
}

export default ManageBlogItem
