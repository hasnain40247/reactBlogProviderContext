import React, { useState,useReducer } from "react";
import { State } from "react-native-gesture-handler";
import jsonServer from "../api/jsonServer";
import createContext from "./createContext";



const blogReducer=(data,action)=>{
    console.log("inside blog reducer");

    switch(action.type){

    case 'get_blogposts':
        return action.payload;

    case 'delete_blog':
        return data.filter(blogpost=>blogpost.id !== action.payload
        );
    case 'edit_blog': 
    return data.map((blogpost)=>{
        if (blogpost.id=== action.payload.id){
            return action.payload;
        }
        else{
            return blogpost;
        }
    })
   
    default:
        return data;
    }
    };
    
 const getBlogPosts= dispatch =>{
     return async ()=>{
const response=await jsonServer.get("/blogPost")
dispatch({type:'get_blogposts', payload: response.data})
     }
 }
    const addBlogPost=(dispatch)=>{
      return async (title,content, callback)=>{
    //     dispatch({type:'add_blog',payload:{title,content}});
   

    await jsonServer.post('/blogPost',{
        title,content
    })

    callback();
    }
    }

    const editBlogPost=(dispatch)=>{
        return async (id,title,content, callback)=>{
            await jsonServer.put(`blogPost/${id}`,{title,content})
      callback();
      }
      }

    const deleteBlogPost=dispatch=>{
      
        return async (id)=>{
            console.log("inside functionss");
            console.log(id);
       
            await jsonServer.delete(`/blogPost/${id}`)
                 dispatch({type:'delete_blog',payload:id})
        }
    }


export const {Context,Provider}=createContext(blogReducer,{addBlogPost,deleteBlogPost, editBlogPost, getBlogPosts},[])
