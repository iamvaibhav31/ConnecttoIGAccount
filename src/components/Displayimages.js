import React from "react";
import { getinstaposts } from '../features/Slice/ProfileDataSlice'
import { useSelector } from "react-redux";
const Displayimages = () => {
          const Images = useSelector(getinstaposts)
          return Images.map((items) => {
                    return (
                              <a href={items.permalink} id={items.id} className="px-4 py-2">
                                        <img className="rounded" width={"100%"} height={"100%"} src={items.media_url} alt="profileimages" />
                              </a>
                    )
          })
};

export default Displayimages;
