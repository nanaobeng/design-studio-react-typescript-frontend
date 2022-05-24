import { gql } from "@apollo/client";

// mutations

export const CREATE_BLOG = gql`
  mutation createBlog($title: String!,$thumbnail: String!, $user_id: Int!, $body: String!, $author: String!, $category: String!, $timestamp: String!) {
    createBlog(title: $title, thumbnail: $thumbnail, user_id: $user_id, body: $body ,author: $author, category : $category, timestamp : $timestamp) {
      id
      
    }
  }
`;


export const UPDATE_BLOG = gql`
  mutation updateBlog($id: ID!,$body: String!, $title: String!, $category: String!,  $timestamp: String!) {
    updateBlog(id: $id, body: $body, title: $title, category: $category , timestamp : $timestamp) {
      message
      
    }
  }
`;


export const DELETE_BLOG = gql`
  mutation deleteBlog($id: ID!) {
    deleteBlog(id: $id) {
      message
    }
  }
`;
