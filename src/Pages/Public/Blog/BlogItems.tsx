import react from 'react'
import { GET_ALL_BLOGS} from '../../../graphQL/queries'
import { useQuery } from "@apollo/client";
import {ExternalLink} from 'react-external-link'
const BlogItems = () => {
    const { data , loading } = useQuery(GET_ALL_BLOGS);


    return(
        <div className='col-lg-7 col-md-12'>
            <div className='row overflow-auto' style={{paddingTop:'10%',height:'70vh'}}>

            {data && data.getAllBlogs.map((item:any,i:number)=>{
                let date = (new Date(item.timestamp).getMonth() < 10 ? `0${new Date(item.timestamp).getMonth()}` : new Date(item.timestamp).getDay()) + '/' + new Date(item.timestamp).getFullYear()
                return(
                    <div className='col-12 py-4' key={i}>
                        <div className='row'>

                            <div className='col-3'>
                            <span style={{color:'black',fontWeight:'bold',fontSize:'1.7vh',fontFamily: "'Libre Baskerville', serif"}}>{date}</span>
                            </div>
                            <div className='col-7'>
                                <div className='row'>
                                    <div className='col-12'>
                                    <span style={{color:'black',fontWeight:'bold',fontSize:'2.2vh',fontFamily: "'Libre Baskerville', serif"}}>{item.title}</span>
                                    </div>
                                    <div className='col-12 pt-2' style={{color:"black",fontSize:'1.3vh',fontFamily: "'Libre Baskerville', serif"}}  >
                                    {((item.body).replace(/<[^>]+>/g, '')).substr(0,150)} {(item.body).length > 150 && '...'}

                                    </div>

                                </div>
                           
                            </div>
                            <div className='col-2'>
                                <ExternalLink href={`/story/${item.id}`} target="_self">

                               
                            <a  style={{color:'black',fontWeight:'bold',fontSize:'1.7vh',fontFamily: "'Libre Baskerville', serif"}}>Read More</a>
                            </ExternalLink>
                            </div>
                            <div className='col-12 pt-4'>
                            <hr style={{backgroundColor:'#eeee'}}/>
                            </div>

                        </div>

                    </div>
                )
            })}

        </div>
        </div>
    )
}
export default BlogItems