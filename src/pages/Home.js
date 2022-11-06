import React from "react";
import { useSearchParams } from "react-router-dom";
import Insta from '../assets/svg/instagram.svg'

// "start": "set HTTPS=true&&react-scripts start",
const Home = () => {
          const [searchParams, setSearchParams] = useSearchParams();
          const code = searchParams.get("code")

          return (
                    <div className="h-screen  w-screen flex justify-center items-center ">

                              {code ? <p className="text-xl font-mono sm:text-2xl underline cursor-pointer text-sky-800 hover:text-sky-600"> go to Profile view page </p> : <button className="flex justify-center outline  outline-pink-500 rounded  m-4 p-2 drop-shadow-md" >
                                        <img className="my-2" src={Insta} alt="icon" width={"12%"} />
                                        <p className="text-xl font-mono my-4 px-2 text-pink-500  sm:my-8" >connect to Instagram account</p>
                              </button>}

                    </div>
          );
};

export default Home;
