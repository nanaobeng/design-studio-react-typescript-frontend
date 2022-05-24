import react, {FC} from 'react'
import Footer from './Footer'

import Navbar from './Navbar'

interface Props {
    children : any
}

const AdminLayout:FC<Props> = ({children}) => {

    return(
<div>

    

<div className='row' >



 <div className='col-12 px-0'>

     <Navbar/>
     </div>
   ]
     <div className='col-12 p-4' style={{backgroundColor:'#eeee'}} >
     {children}
     </div>
     <div className='col-12 '>
    <Footer/>
     </div>
</div>
        
</div>
    )

}

export default AdminLayout