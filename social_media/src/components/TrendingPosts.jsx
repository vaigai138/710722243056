import React, { useEffect, useState } from "react";
import apiConfig from "../api";
const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);
  const [apiError, setApiError] = useState(false);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNDU4MTAwLCJpYXQiOjE3NDI0NTc4MDAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjJlMjI3Y2E5LWI2YWItNDBmOS1hNjRlLWZmMjgzOTE1MGNhMyIsInN1YiI6InZhaWdhaXZlbmRoYW4xMzhAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiU2FtcGxlIiwiY2xpZW50SUQiOiIyZTIyN2NhOS1iNmFiLTQwZjktYTY0ZS1mZjI4MzkxNTBjYTMiLCJjbGllbnRTZWNyZXQiOiJob2VHbHlCT2ZDbnNheEJsIiwib3duZXJOYW1lIjoiVmFpZ2FpIHZlbmRoYW4iLCJvd25lckVtYWlsIjoidmFpZ2FpdmVuZGhhbjEzOEBnbWFpbC5jb20iLCJyb2xsTm8iOiI3MTA3MjIyNDMwNTYifQ.3J4eoMKz7tECadnSWTYgaS1HEJani9jKzFXS1_ELD9c"

  useEffect(() => {
    fetch("http://20.244.56.144/test/users/1/posts", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts.slice(0, 5));
      })
      .catch(() => {
        setApiError(true);
        setPosts([
          { id: 101, content: "Sample post about technology", userid: 1 },
          { id: 102, content: "Sample post about space", userid: 2 },
          { id: 103, content: "Sample post about AI", userid: 3 },
          { id: 104, content: "Sample post about music", userid: 4 },
          { id: 105, content: "Sample post about gaming", userid: 5 },
        ]);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Trending Posts</h2>
      {apiError && <p className="text-red-500 text-center mb-4">⚠️ API is not working. Showing sample posts.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={`https://picsum.photos/400/250?random=${post.id}`}
              alt="Post"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-600 text-sm mb-2">User {post.userid}</p>
              <p className="text-gray-800 font-medium">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
