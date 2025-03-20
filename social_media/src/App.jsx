import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TopUsers from "./components/TopUsers";
import Feed from "./components/Feed";
import TrendingPosts from "./components/TrendingPosts";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/" className="text-3xl font-bold text-gray-800 text-center mb-6">Top Users</Link> | <Link to="/trending" className="text-3xl font-bold text-gray-800 text-center mb-6">Trending Posts</Link> | <Link to="/feed" className="text-3xl font-bold text-gray-800 text-center mb-6">Feed</Link>
        </nav>

        <Routes>
          <Route path="/" element={<TopUsers />} />
          <Route path="/trending" element={<TrendingPosts />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
