import React from "react";
import { getinstavideos } from '../features/Slice/ProfileDataSlice'
import { useSelector } from "react-redux";
const Displayvideos = () => {
          const Videos = useSelector(getinstavideos)

          return Videos.map((items) => {
                    return (
                              <video controls>
                                        <source src={items.media_url} type="video/webm" />
                              </video>
                    )
          })
};

export default Displayvideos;
