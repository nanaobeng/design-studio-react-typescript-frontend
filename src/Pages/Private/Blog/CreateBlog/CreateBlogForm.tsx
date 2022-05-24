import react,{useState,useEffect,useRef,FC} from 'react'
import { RichTextEditor } from '@mantine/rte';
import { Result} from 'antd';
import { TextInput } from '@mantine/core';
import { Notes } from 'tabler-icons-react';
import { Select } from '@mantine/core';
import { useMutation } from "@apollo/client";
import { CREATE_BLOG } from "../../../../graphQL/mutations";
import CircularProgress from '@mui/material/CircularProgress';

import { LoadingOverlay, Button, Group } from '@mantine/core';
const CreateBlogForm:FC = () => {
    const [visible, setVisible] = useState(false);
    const [createBlog, { error  }] = useMutation(CREATE_BLOG);
    const [formError,setError] = useState()
    const [loading,setLoading] = useState(false)
    const [requestSent,setRequest] = useState(false)
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

const [category,setCategory] = useState<any>('Design')
    const [values,setValues] = useState({
        title : '',
        
        
    })


    const {
        title
    } = values

    const [value, onChange] = useState('');
    const details = () =>{
        return(
            <div className='row ' >
                <div className='col-12 py-4 form-group'>

                    <div className='row' style={{paddingLeft:'3%',paddingRight:'3%'}}>


                        <div className='col-6'>
                      
                            <TextInput label="Blog Title" placeholder="Blog Title..." onChange={(e)=> {setValues({...values, title: e.target.value})}} value={title} icon={<Notes size={14} />} />
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
                      
                        <RichTextEditor style={{minHeight:'50vh'}}value={value} onChange={onChange} />
                        </div>


                    </div>

                </div>
            </div>
        )
    }

    const submitBlog = () => {
        setVisible(true)
        createBlog({
            variables: {
              title: title,
              author: "Jean Quarcopomme",
              category:category,
              body: value,
              user_id:1,
              thumbnail:'',
              timestamp : new Date()
            },
          })
          .then((data:any) => {
            if (data.error) {
                setError(data.error)
            }
            else {
                
                setRequest(true)
                setTimeout(function () {

                    window.location.href="/admin/manage/blogs"

                    }, 2000);
                
            }
        })

    }
   
    return(
        <div className='row p-4'>

            
            <div className='col-12 ' style={{paddingLeft:'15%',paddingRight:'15%',paddingTop:'5%'}}>

                <div className='row px-4'>

                
                    <div className='col-12 shadow' style={{backgroundColor:'white',borderTopRightRadius:'2vh',borderTopLeftRadius:'2vh'}}>
                    
                    
                    <LoadingOverlay visible={visible} />

                    <div className='row p-0'>
                        <div className='col-12  shadow text-center' style={{backgroundColor:'#DC002E ',borderTopRightRadius:'2vh',borderTopLeftRadius:'2vh',borderBottomRightRadius:'2vh',borderBottomLeftRadius:'2vh'}}> 

                        <span  style={{lineHeight:'6vh',color:'white',fontSize:'2vh',fontWeight:'bold',fontFamily: "'Abril Fatface', cursive ,'Merriweather Sans', sans-serif"}}>Create Blog Post</span>

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12 overflow-auto' >
                        {details()}
       
       {blogBody()}

       <div className='row ' style={{paddingLeft:'3%',paddingRight:'3%'}}>
           <div className='col-12 py-4 text-right'>

              
<span className='btn btn-danger'
                           onClick={() => {
                              submitBlog()
                             }}
               
           
                             >Create
                             </span>


           </div>
       </div>

                        </div>
                    </div>
                 
                    

                            </div>
                </div>
        
        
       
        
    
            </div>
                    
          
    
        </div>
    )
}

export default CreateBlogForm