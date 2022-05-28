import react,{useState} from 'react'
import AdminLayout from '../../../../Components/AdminLayout'
import { Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { GET_ALL_BLOGS} from '../../../../graphQL/queries'
import { DELETE_BLOG} from '../../../../graphQL/mutations'
import { useQuery ,useMutation} from "@apollo/client";
import { ExternalLink } from 'react-external-link';
import { LoadingOverlay} from '@mantine/core';
import {isAuthenticated} from '../../Auth/APIs'
import { Popconfirm, message, Button } from 'antd';

const text = 'Are you sure to delete this blog post?';
const BlogDashBoard = () => {
 
    const validateAcess = isAuthenticated() 
    
    const { data , loading } = useQuery(GET_ALL_BLOGS);
    const [deleteBlog, { error }] = useMutation(DELETE_BLOG);
    const [visible, setVisible] = useState(false);
    const [formError,setError] = useState()
    const deleteBlogItem = (id:number) => {
       
            setVisible(true)
        
        deleteBlog({ variables: { id: id } })
          .then((data:any) => {
            if (data.error) {
                setError(data.error)
            }
            else {
                
                
                setTimeout(function () {

                    window.location.href='/admin/manage/blogs'

                    }, 2000);
                
            }
        })
          
        
    }
    return(
        <AdminLayout>

            <div className='row' style={{paddingRight:'10%',paddingLeft:'10%',paddingTop:'5%'}}>

                <div className='col-12'>
                    <div className='row'>
                        <div className='col-lg-6 p-4'>
                            <div className='row p-4'>
                                <div className='col-12 col-sm-12  shadow-lg' style={{height:'15vh',backgroundColor:'white'}}>
                                    <div className='row' >
                                        <div className='col-12 p-2' style={{backgroundColor:'#DC002E',height:'4vh'}}>
                                            <span style={{color:'white',fontWeight:'bold',fontSize:'1.3vh'}}>Welcome,</span>
                                        </div>
                                        <div className='col-4  text-center' style={{paddingTop:'3vh',backgroundColor:"#eeee",height:'11vh'}}>
                                        <i style={{fontSize:'4vh'}} className="icofont-ui-user"></i>
                                        </div>
                                        <div className='col-8'>
                                            <div className='row'>
                                                <div className='col-12 pt-3'>
                                                <span style={{color:'black',fontWeight:'bold',fontSize:'1.3vh'}}>Jean Quarcopoome</span><br/>
                                                <span style={{color:'black',fontWeight:'bold',fontSize:'1.3vh'}}>jean@herestranger.com</span><br/>
                                                <span style={{color:'black',fontWeight:'bold',fontSize:'1.3vh'}}>Administrator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 p-4'>
                            <div className='row p-4'>
                                <div className='col-12  shadow-lg' style={{height:'15vh',backgroundColor:'white'}}>
                                    <div className='row' >
                                        <div className='col-12 p-2' style={{backgroundColor:'#DC002E',height:'4vh'}}>
                                            <span style={{color:'white',fontWeight:'bold',fontSize:'1.3vh'}}>Blogs</span>
                                        </div>
                                        <div className='col-4  text-center' style={{paddingTop:'3vh',backgroundColor:"#eeee",height:'11vh'}}>
                                        <i style={{fontSize:'4vh'}} className="icofont-ui-note"></i>
                                        </div>
                                        <div className='col-8'>
                                            <div className='row'>
                                                <div className='col-12 text-center '>
                                                <span style={{color:'black',fontWeight:'bold',fontSize:'7vh'}}>
                                                    {data ? ((data.getAllBlogs).length < 10 ? `0${(data.getAllBlogs).length}` : (data.getAllBlogs).length ) : 0}
                                                    
                                                    </span><br/>
                                               
                                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                       

                  
                    </div>


                    <div className='row'>
                        <div className='col-12 p-4'>
                            <div className='row p-4'>
                                <div className='col-12 shadow-lg' style={{minHeight:'30vh',backgroundColor:'white'}}>

                                    <div className='row'>
                                        <div className='col-12 py-3 px-4' style={{backgroundColor:'#DC002E'}}>
                                            <div className='row'>
                                                <div className='col-8'>
                                                <span  style={{color:'white',fontSize:'2vh',fontWeight:'bold'}}>Manage Blogs</span>
                                                </div>
                                                <div className='col-4 text-right'>
                                                    <ExternalLink href="/admin/create/blog" target="_self">
                                                        <span className='btn btn-light'>
                                                            <b>Add Blog Post</b>
                                                        </span>
                                                    </ExternalLink>
                                                </div>
                                            </div>

                                        

                                        </div>
                                        <div className='col-12 px-0 overflow-auto' style={{minHeight:'30vh',backgroundColor:'white'}}>
                                        <LoadingOverlay visible={visible} />
                                            <table className='table table-striped'>
                                                <thead>
                                                    <tr style={{backgroundColor:'#eeee'}}> 
                                                        <th>
                                                            Title
                                                        </th>
                                                        <th>
                                                            Category
                                                        </th>
                                                        
                                                        <th>
                                                            Date Posted
                                                        </th>
                                                        <th>

                                                        </th>
                                                        <th>

                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody >
                                                    {data ? ((data.getAllBlogs.length > 0) ? data.getAllBlogs.map((item:any,i:number)=>{
                                                        return(
                                                            <tr key={i}>
                                                                <td>
                                                                    {item.title}
                                                                </td>
                                                                <td>
                                                                   {item.category}
                                                                </td>
                                                                
                                                                <td>
                                                                    {(new Date(item.timestamp).getMonth()) +"/"+(new Date(item.timestamp).getFullYear())}
                                                                </td>
                                                                <td>
                                                                    <ExternalLink href={`/admin/manage/blog/${item.id}`} target="_self">

                                                                
                                                                    <span className='btn btn-success btn-sm' >
                                                                    <i className='icofont-eye'/>
                                                                    </span>
                                                                    </ExternalLink>
                                                                </td>
                                                                <td>
                                                                <Popconfirm placement="topLeft" title={text} onConfirm={() => {
                                                                       deleteBlogItem(item.id)
                                                                      }} okText="Yes" cancelText="No">
                                                                <span className='btn btn-danger btn-sm'
                                                                    >
                                                                        <i className='icofont-trash'/>
                                                                    </span>
      </Popconfirm>
                                                               
                                                                    

                                                                    
                                                                </td>
                                                                
                                                            </tr>
                                                        )
                                                    })

                                                    : 
                                                    <b className='p-4'>You currently have no blog posts.</b>

                                                    )
                                                    :

                                                    <b className='p-4'>You currently have no blog posts.</b>
                                                    
                                                    
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </AdminLayout>
    )
}


export default BlogDashBoard