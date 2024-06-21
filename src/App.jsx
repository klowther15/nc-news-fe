import { useState } from 'react'
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Homepage from './homepageComponents/Homepage'
import ArticlesList from '../src/Articles/ArticlesList'
import './App.css'
import SingleArticlePage from './Articles/SingleArticle';
import CommentsList from './Comments/CommentsList';
import UsersList from './Users/UsersList';


function App() {
  
  return (
    
      <div className="App">
        <Routes>
    <Route path="/" element= {<Homepage />}/>
    <Route path="/articles" element= {<ArticlesList/>}/>
    <Route path="/articles/:article_id" element={<SingleArticlePage/>}/>
    <Route path="/articles/:article_id/comments" element={<CommentsList/>}/>
    <Route path="/users" element={<UsersList/>}/>
    </Routes>
    </div>
   
  )
}

export default App
