
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import { ExternalLink } from 'react-external-link';
const NotFoundPage = () => {
    return(


        <Layout>
        <div className='row pt-4'>
            <div className='col-12 px-4' style={{paddingTop:'5%'}}>
                <div className='row pt-4'>
                    <div className='col-12 pt-4' style={{paddingTop:'20%'}}>
                      <div className='row pt-4'>
                      <div className='col-12 text-center pt-4' >
                    <span  style={{lineHeight:'8vh',color:'black',fontSize:'7vh',fontWeight:'bold',fontFamily: "'Friz Quadrata Std', sans-serif"}}>
                        Page Not Found
                        
                        </span>
                        <br/>
                        <ExternalLink href="/" target="_self">

                      
                        <span className='btn btn-danger'>
                            <b>Return Home</b>
                            
                        </span>
                        </ExternalLink>
                </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
        

    )
}

export default NotFoundPage;