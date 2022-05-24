import react,{useState,useEffect} from 'react'
import Layout from '../../../Components/Layout'
import { useLazyQuery } from "@apollo/client";
import { SIGN_IN} from '../../../graphQL/queries'
import { Alert ,Spin } from 'antd';
import { authenticate } from './APIs'
import { LoadingOutlined } from '@ant-design/icons';

const SignIn = () => {
    
  
      
    const antIcon = <LoadingOutlined style={{ fontSize: 24,color:'white' }} spin />;
    const [load,setLoading] = useState(false)
    const [formError,setError] = useState(false)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [signInUser,{ loading, data }] = useLazyQuery(SIGN_IN);
    const validateUser = () =>{
        setError(false)
        setLoading(true)
        signInUser({
            variables: {
                email: 'test1@test.com',
                password:'test123'
                
              },
        })
        .then((data:any) => {
            if (data.data.signInUser.successful == false) {
                setLoading(false)
                setError(true)
                console.log('failure')
            }
            else {
                setLoading(false)
                console.log('success')
                console.log(data.data.signInUser.message)
                authenticate(data.data.signInUser.message,
                    () => {
                        window.location.href = "/admin/manage/blogs"
                    })
                // setTimeout(function () {

                //     success()

                //     }, 2000);
                
            }
        })
    }
    return(

        <Layout>
            <div className='row p-4' >

            <div className='col-12 d-none d-sm-block ' style={{paddingLeft:'35%',paddingRight:'35%'}}>
            <div className='row form-group'>

<div className='col-12 py-4' style={{fontFamily: "EmpiricalW01-Bold"}}>
    <label><b className="text-muted" >Email</b></label>
    <input type="text" style={{backgroundColor:'#eeee',height:'4vh',fontFamily: "EmpiricalW01-Bold"}} value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" />
</div>
<div className='col-12 pb-2' style={{fontFamily: "EmpiricalW01-Bold"}}>
    <label><b className="text-muted">Password</b></label>
    <input type="password" style={{backgroundColor:'#eeee',height:'4vh'}} value={password} onChange={(e)=> setPassword(e.target.value)} className="form-control" />
</div>

<div className='col-12 pt-4'>
    {load ? 
 <span className='btn btn-danger w-100 py-1' style={{height:'4vh'}}>
<Spin indicator={antIcon} />
</span>
    :
    <span className='btn btn-danger w-100' onClick={validateUser} style={{height:'4vh'}}>
        <b>Sign In</b>
    </span>
}
</div>

{formError &&
<div className='col-12 pt-4'>

<Alert message="Invalid Credentials" closable type="error" 

showIcon />
</div>
}

</div>
                  
        </div>
        <div className='col-12 d-block d-sm-none ' style={{paddingLeft:'5%',paddingRight:'5%'}} >
        <div className='row form-group'>

<div className='col-12 py-4'>
    <label><b className="text-muted">Email</b></label>
    <input type="text" style={{backgroundColor:'#eeee',height:'4vh'}} className="form-control" />
</div>
<div className='col-12 pb-2'>
    <label><b className="text-muted">Password</b></label>
    <input type="password" style={{backgroundColor:'#eeee',height:'4vh'}} className="form-control" />
</div>
<div className='col-12 pt-4'>
{load ? 
 <span className='btn btn-danger w-100 py-1' style={{height:'4vh'}}>
<Spin indicator={antIcon} />
</span>
    :
    <span className='btn btn-danger w-100' style={{height:'4.5vh'}}
    onClick={validateUser}
    
    
    
    >
        <b>Sign In</b>
    </span>
}
   
</div>
{formError &&
<div className='col-12 pt-4'>

<Alert message="Invalid Credentials" closable type="error" 

showIcon />
</div>
}

</div>
       
        </div>
                
            </div>
        </Layout>

    )
}

export default SignIn