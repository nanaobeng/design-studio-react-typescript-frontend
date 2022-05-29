import React,{FC} from 'react';
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import './App.css';
import CreateBlog from './Pages/Private/Blog/CreateBlog/CreateBlog';
import BlogMainPage from './Pages/Public/Blog/BlogMainPage';
import BlogDashBoard from './Pages/Private/Blog/BlogDashboard/BlogDashBoard';
import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client'
import ManageBlogItem from './Pages/Private/Blog/ManageBlog/ManageBlogItem';
import SingleBlogItem from './Pages/Public/Blog/SingleBlogItem';
import SignIn from './Pages/Private/Auth/SignIn';
import 'antd/dist/antd.css';
import PrivateWrapper from './Components/PrivateWrapper'
import { isAuthenticated } from './Pages/Private/Auth/APIs'
import {API} from './config'
import NotFoundPage from './Components/404/NotFoundPage';


interface IApp {

}

const App:FC<IApp> = (props) => {
  
  const client = new ApolloClient({
    uri: API,
    cache: new InMemoryCache()
  });
  return(
    <>
     <ApolloProvider client={client}>

     <BrowserRouter>
    <Routes>

      <Route path="/strngr" element={<BlogMainPage/>} />
      {/* <Route path="/" element={()=> {
        window.location.replace('https://example.com/1234'),
        return null

      }} />
       */}
      <Route  path="/auth/signin" element={ isAuthenticated() ? <PrivateWrapper><BlogDashBoard/></PrivateWrapper> : <SignIn/> } />

      <Route path="/strngr/:id" element={<SingleBlogItem/>} />
      <Route path="/admin/create/blog" element={<CreateBlog/>} />
      <Route path="/admin/manage/blogs" element={(<PrivateWrapper><BlogDashBoard/></PrivateWrapper>)}/>
      <Route path="/admin/manage/blog/:id" element={<ManageBlogItem/>} />
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
    </BrowserRouter>

     </ApolloProvider>
    </>
 
  )
}

export default App;
