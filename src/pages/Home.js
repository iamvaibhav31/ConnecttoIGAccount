import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import Insta from '../assets/svg/instagram.svg'
import { InstaCodeGenratorURL } from '../utils/URLgenrator'
// "start": "set HTTPS=true&&react-scripts start",
const Home = () => {
          const [searchParams, setSearchParams] = useSearchParams();
          const code = searchParams.get("code")

          return (
                    <div className="h-screen  w-screen flex justify-center items-center ">

                              {code ? <p className="text-xl font-mono sm:text-2xl underline cursor-pointer text-sky-800 hover:text-sky-600"> go to Profile view page </p> : <a href='https://api.instagram.com/oauth/authorize?client_id=1776611746023170&redirect_uri=https://localhost:3000/&scope=user_profile,user_media&response_type=code' className="flex justify-center outline  outline-pink-500 rounded  m-4 p-2 drop-shadow-md" >
                                        <img className="my-2" src={Insta} alt="icon" width={"12%"} />
                                        <p className="text-xl font-mono my-4 px-2 text-pink-500 cursor-pointer  sm:my-8" >connect to Instagram account</p>
                              </a>}

                    </div>
          );
};

export default Home;
