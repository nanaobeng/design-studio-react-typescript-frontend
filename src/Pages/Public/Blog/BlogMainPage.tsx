import react,{useState,useEffect} from 'react'
import Layout from '../../../Components/Layout'


import BlogItems from './BlogItems';

const BlogMainPage = () => {
 

    
    return(
            <Layout>
              <div className='row'>
                  <div className='col-12 d-block d-sm-none ' style={{paddingTop:'20%'}}>

                  </div>
                  
                  <div className='col-12' style={{paddingRight:'5%',paddingLeft:'15%'}}>
                      <div className='row'>
                          <div className='col-lg-5 col-md-12'>
                              <div className='row'>
                              <div className='col-12 '>
                    <span  style={{lineHeight:'8vh',color:'black',fontSize:'7vh',fontWeight:'bold',fontFamily: "'Friz Quadrata Std', sans-serif"}}>STRNGR</span>
                </div>
                <div className='col-lg-9 col-md-12 pt-2'>
                    <span style={{fontSize:'2vh',color:'black',fontFamily: "'Libre Baskerville', serif"}}>
                    A curation of thoughts inspired by design, art, fashion & photography. <br/>Updated bi-weekly. 
                    </span>
                
                </div>
                              </div>
                          </div>
                          <BlogItems/>
                      </div>
                  </div>
              </div>
               
                
            
            </Layout>
    )
}
export default BlogMainPage