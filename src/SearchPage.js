import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import { Link } from 'react-router-dom';
import Search from './Search';
// import Response from './response'

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

//   const data = Response;
  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to='/'>
        <img 
            className="searchPage_logo"
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            alt=''
            />
        </Link>

        <div className='searchPage_headerBody'>
            <Search hideButtons />
        </div>

      </div>

      <div className="searchPage_results"></div>
    </div>
  );
}

export default SearchPage;
