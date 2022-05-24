import react,{useState} from 'react'
import Layout from '../../../Components/Layout'
import  {GET_BLOG_ITEM} from '../../../graphQL/queries'
import { useQuery } from "@apollo/client";
import {useParams} from 'react-router-dom'

const SingleBlogItem = () => {
    let { id} = useParams();
    let blog_id:any = id
    

    const { data, loading } = useQuery(GET_BLOG_ITEM, { 
        variables: {
        id : parseInt(blog_id)}

          
    
    });

    return(
        <Layout>
            <div className='row'>
            <div className='col-12 d-block d-sm-none ' style={{paddingTop:'20%'}}>

</div>
<div className='col-12' style={{paddingRight:'15%',paddingLeft:'15%'}}>
<div className='row'>
                          <div className='col-lg-4 col-md-12'>
                              <div className='row'>
                              <div className='col-12 '>
                    <span  style={{lineHeight:'8vh',color:'black',fontSize:'7vh',fontWeight:'bold',fontFamily: "'Friz Quadrata Std', sans-serif"}}>{data && data.getBlog.title}</span>
                </div>
                <div className='col-lg-9 col-md-12 pt-2'>
                    <span style={{fontSize:'1.6vh',color:'black',fontFamily: "'Libre Baskerville', serif"}}>
                    Author : {data && data.getBlog.author}<br/>
                    Category : {data && data.getBlog.category} <br/>

                    {data && new Date(data.getBlog.timestamp).getMonth()}{data && `/${new Date(data.getBlog.timestamp).getFullYear()}`}
                    </span>
                
                </div>
                              </div>
                          </div>

                          <div className='col-lg-8 col-md-12 ' style={{paddingTop:'5%'}}>
                          <span style={{fontSize:'1.8vh',color:'black',fontFamily: "'Libre Baskerville', serif"}} dangerouslySetInnerHTML={{ __html: data && data.getBlog.body }}>
                       
                          </span>
                          </div>

                          
                          
                      </div>
</div>
            </div>

        </Layout>
    )
}

export default SingleBlogItem