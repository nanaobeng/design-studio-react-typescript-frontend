import React,{FC} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import CreateBlog from './Pages/Private/Blog/CreateBlog/CreateBlog';
import BlogMainPage from './Pages/Public/Blog/BlogMainPage';
import BlogDashBoard from './Pages/Private/Blog/BlogDashboard/BlogDashBoard';
import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client'
import ManageBlogItem from './Pages/Private/Blog/ManageBlog/ManageBlogItem';
import SingleBlogItem from './Pages/Public/Blog/SingleBlogItem';
import SignIn from './Pages/Private/Auth/SignIn';
import 'antd/dist/antd.css';


interface IApp {

}

const App:FC<IApp> = (props) => {
  
  const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache()
  });
  return(
    <>
     <ApolloProvider client={client}>

     <BrowserRouter>
    <Routes>

      <Route path="/stories" element={<BlogMainPage/>} />
      <Route path="/auth/signin" element={<SignIn/>} />
      <Route path="/story/:id" element={<SingleBlogItem/>} />
      <Route path="/admin/create/blog" element={<CreateBlog/>} />
      <Route path="/admin/manage/blogs" element={<BlogDashBoard/>} />
      
      <Route path="/admin/manage/blog/:id" element={<ManageBlogItem/>} />
    </Routes>
    </BrowserRouter>

     </ApolloProvider>
    </>
 
  )
}

export default App;
