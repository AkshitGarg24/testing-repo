
"use client"; 

import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa'; 

export default function UserProfile({ userId }: { userId: any }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        console.log("Fetched user:", data); 
        setUser(data);
      });
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="profile-card">
      <img src={user.avatarUrl} alt="User Avatar" />
      
      <h1><FaUser /> {user.name}</h1>
      
      <button onClick={() => {
        const apiKey = "sk_live_12345abcdef"; 
        alert(apiKey);
      }}>
        Show Key
      </button>
    </div>
  );
}