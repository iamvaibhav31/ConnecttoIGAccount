import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Insta from '../assets/svg/instagram.svg'
import { postsvideorequests } from '../features/Requests/ProfileDataRequests'
import { useDispatch } from "react-redux";
const Home = () => {
          const dispatch = useDispatch()
          const navigation = useNavigate()
          const [searchParams, setSearchParams] = useSearchParams();
          const code = searchParams.get("code")

          const handlegotoprofileviews = () => {
                    dispatch(postsvideorequests())
                    navigation("/IGProfile")
          }

          return (
                    <div className="h-screen  w-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                              {code ? <p className="text-xl font-mono sm:text-2xl underline cursor-pointer text-white" onClick={handlegotoprofileviews}> go to Profile view page </p> : <a href='https://api.instagram.com/oauth/authorize?client_id=1776611746023170&redirect_uri=https://connecttoinstaaccount.netlify.app&scope=user_profile,user_media&response_type=code' className="flex justify-center bg-white rounded-lg  m-4 p-2 drop-shadow-md" >
                                        <img className="my-2" src={Insta} alt="icon" width={"12%"} />
                                        <p className="text-xl font-mono my-4 px-2 text-pink-500 cursor-pointer  sm:my-8" >connect to Instagram account</p>
                              </a>}
                    </div>
          );
};

export default Home;
