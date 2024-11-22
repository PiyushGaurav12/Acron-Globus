import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import QuestionList from "./components/QuestionList";
import BlogSection from "./components/BlogSection";
import "./App.css";

const App = () => (
  <div className="app">
    <Navbar />
    <div className="main-content">
      <Sidebar />
      <div className="questions-section">
        <QuestionList />
      </div>
      <BlogSection />
    </div>
  </div>
);

export default App;
