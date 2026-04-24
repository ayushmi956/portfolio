import React from 'react';
import profile from "../images/profile.jpg";

const Home = () => {
  return (
    <div className="home">
      <img src={profile} alt="Profile" width="150" />
      <h1>About Me</h1>
      <p>Pavani Ayushmi, 3rd year B.Tech student from Mahindra University, Hyderabad, Telangana, India. Intrested in Gamedevlopment and Immersive technology</p>
      
      <h2>Research Interests</h2>
      <ul>
        <li>Immersive technology</li>
        <li>Game devlopment</li>
        <li>Machine Learning</li>
        <li>Prompt Engineering</li>
      </ul>
      
      <h2>Personal Details</h2>
      <ul>
        <li><strong>Name:</strong> Pavani Ayushmi</li>
        <li><strong>Phone:</strong> 8790930202</li>
        <li><strong>Email:</strong> pavani13846@gmail.com (personal) | se23ucse196@mahindrauniversity.edu.in (college)</li>
      </ul>
      
      <h2>Skills</h2>
      <ul>
        <li>C, C#,Java,Python</li>
        <li>Data Structures</li>
       
      </ul>
    </div>
  );
};

export default Home;