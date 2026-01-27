import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    console.log("Testando");
  };

  useEffect(() => {
    getPosts();
  }, []);
  return <div>Home</div>;
};

export default Home;
