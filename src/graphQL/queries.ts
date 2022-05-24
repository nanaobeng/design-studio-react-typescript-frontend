import { gql } from "@apollo/client";


export const GET_ALL_BLOGS = gql`
  query getAllBlogs {
    getAllBlogs {
      id
      title
      timestamp
      body
      category
      
    }
  }
`;


export const GET_BLOG_ITEM = gql`
query getBlog($id: Int!) {
  getBlog(id: $id){
      
      id
      title
      author
      timestamp
      body
      category
  }
}
`;

export const SIGN_IN = gql`
query signInUser($email: String!,$password: String!) {
  signInUser(email: $email,password: $password){
      
      successful
      message
  }
}
`;