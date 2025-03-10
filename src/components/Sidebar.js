import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {


  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

 
  // Early Return pattern
  if (!isMenuOpen) return null;



  return (
    
    <div className="p-5 bg-white text-black shadow-lg w-40 h-auto">
      
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/demo">Demo</Link>
        </li>
        <li> Shorts</li>
        <li>Search</li>
        <li> Live</li>
      </ul>
      <h1 className="font-bold pt-5">Category{'>'}</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
      <h1 className="font-bold pt-5">You{'>'}</h1>
      <ul>
        <li> Watch Later</li>
        <li> History</li>
        <li> Your Purchases</li>
        <li> Liked Videos</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions{'>'}</h1>
      <ul>
        <li> ABP News</li>
        <li> Accio Job</li>
        <li> LallanTop</li>
        <li> T-Series</li>
        <li> ABP News</li>
        <li> Accio Job</li>
        <li> LallanTop</li>
        <li> T-Series</li>
      </ul>

    </div>

  );
};

export default Sidebar;