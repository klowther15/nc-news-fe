import { useState } from 'react'
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Homepage from './homepageComponents/Homepage'
import ArticlesList from '../src/Articles/ArticlesList'
import './App.css'
import SingleArticlePage from './Articles/SingleArticle';

function App() {
  

  return (
    
      <div className="App">
        <Routes>
    <Route path="/" element= {<Homepage />}/>
    <Route path="/articles" element= {<ArticlesList/>}/>
    <Route path="/articles/:article_id" element={<SingleArticlePage/>}/>
    </Routes>
    </div>
   
  )
}

export default App
