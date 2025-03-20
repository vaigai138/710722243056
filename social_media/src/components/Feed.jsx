import React, { useEffect, useState } from "react";
import apiConfig from "../api";
const TopUsers = () => {
  const [users, setUsers] = useState([]);
  const [apiError, setApiError] = useState(false);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNDU4MTAwLCJpYXQiOjE3NDI0NTc4MDAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjJlMjI3Y2E5LWI2YWItNDBmOS1hNjRlLWZmMjgzOTE1MGNhMyIsInN1YiI6InZhaWdhaXZlbmRoYW4xMzhAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiU2FtcGxlIiwiY2xpZW50SUQiOiIyZTIyN2NhOS1iNmFiLTQwZjktYTY0ZS1mZjI4MzkxNTBjYTMiLCJjbGllbnRTZWNyZXQiOiJob2VHbHlCT2ZDbnNheEJsIiwib3duZXJOYW1lIjoiVmFpZ2FpIHZlbmRoYW4iLCJvd25lckVtYWlsIjoidmFpZ2FpdmVuZGhhbjEzOEBnbWFpbC5jb20iLCJyb2xsTm8iOiI3MTA3MjIyNDMwNTYifQ.3J4eoMKz7tECadnSWTYgaS1HEJani9jKzFXS1_ELD9c"

  useEffect(() => {
    fetch("http://20.244.56.144/test/users", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        const userArray = Object.entries(data.users).map(([id, name]) => ({
          id,
          name,
        }));
        setUsers(userArray);
      })
      .catch(() => {
        setApiError(true);
        setUsers([
          { id: 1, name: "John Doe" },
          { id: 2, name: "Jane Doe" },
          { id: 3, name: "Alice Smith" },
          { id: 4, name: "Bob Johnson" },
          { id: 5, name: "Charlie Brown" },
        ]);
      });
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Top Users</h2>
      {apiError && <p className="text-red-500 text-center mb-4">⚠️ API is not working. Showing sample users.</p>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="flex items-center gap-4 bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <img
              src={`https://picsum.photos/50/50?random=${user.id}`}
              alt="User Avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <p className="text-lg font-medium text-gray-700">{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUsers;
