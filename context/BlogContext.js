import React, { useState,useReducer } from "react";
import { State } from "react-native-gesture-handler";
import createContext from "./createContext";



const blogReducer=(data,action)=>{
    console.log("inside blog reducer");

    switch(action.type){
    case 'delete_blog':
        return data.filter(blogpost=>blogpost.id !== action.payload
        );
    case 'add_blog': return [...data,{id:Math.floor(Math.random()*99999),title: action.payload.title,content:action.payload.content}]
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
    
 
    const addBlogPost=(dispatch)=>{
      return (title,content, callback)=>{
        dispatch({type:'add_blog',payload:{title,content}});
    callback();
    }
    }

    const editBlogPost=(dispatch)=>{
        return (id,title,content, callback)=>{
          dispatch({type:'edit_blog',payload:{id,title,content}});
      callback();
      }
      }

    const deleteBlogPost=dispatch=>{
      
        return (id)=>{
            console.log("inside functionss");
            console.log(id);
            dispatch({type:'delete_blog',payload:id})
        }
    }


export const {Context,Provider}=createContext(blogReducer,{addBlogPost,deleteBlogPost, editBlogPost},[])
