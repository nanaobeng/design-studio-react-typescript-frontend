import react from 'react'
import { ExternalLink} from 'react-external-link'

const Footer = () => {
 
    return(

        <div className='row  pt-4 justify-content-center'>
                 <div className='col-8 pt-4 pb-4 text-center'>
                <hr />
                </div>
            <div className='col-12 '>
            <div className='row'>
                <div className='col-12'style={{paddingLeft:'15%',paddingRight:'15%'}}>
                    <div className='row'>
                    <div className='col-12 pt-4' >
                    <span  style={{lineHeight:'8vh',color:'black',fontSize:'7vh',fontWeight:'bold',fontFamily: "'Friz Quadrata Std', sans-serif"}}>Don't Be A Stranger.</span>
                </div>
               
              
                <div className='col-12 pt-4' >
                    <div className='row '>

                        <div className='col-12 pb-4'>
                            <div className='row '>
                            <ExternalLink href="mailto:jean@herestranger.com" style={{textDecoration:'none'}}>

                                <div className='col-lg-4 col-sm-12 p-4 '>
                                            <i style={{color:'black',fontSize:'3vh',cursor:'pointer'}} className='icofont-ui-message'/>
                                </div>
                                </ExternalLink>
                                <ExternalLink href="https://www.linkedin.com/company/dont-be-a-stran-ger/" style={{textDecoration:'none'}}>

                                <div className='col-lg-4 col-sm-12 p-4 '>
                                            <i style={{color:'black',fontSize:'3vh',cursor:'pointer'}} className='icofont-linkedin'/>
                                </div>
                                </ExternalLink>
                                <ExternalLink href="https://www.instagram.com/1strangergram/" style={{textDecoration:'none'}}>

                             
                                <div className='col-lg-4 col-sm-12 p-4 '>
                                            <i style={{color:'black',fontSize:'3vh',cursor:'pointer'}} className='icofont-instagram'/>
                                </div>
                                </ExternalLink>
                            </div>
                        </div>

                    </div>
                </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='col-8 pb-4 text-center'>
             
                    <span style={{color:'black',fontFamily: "'Libre Baskerville', serif"}}>
                    © {new Date().getFullYear()} Don't Be A Stranger.
                    </span>
            </div>
        </div>

    )
}
export default Footer