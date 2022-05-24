import react,{useState,useEffect} from 'react'
import AdminLayout from '../../../../Components/AdminLayout'
import CreateBlogForm from './CreateBlogForm'

const CreateBlog = () => {
    return(
        <AdminLayout>
            <CreateBlogForm/>
        </AdminLayout>
    )
}

export default CreateBlog