import { useEffect } from "react";
import storiesUrls from "../utils/gallery-stories";
import {Story} from "react-insta-stories/dist/interfaces";

function StoriesGenerator(): Story[] {
  useEffect(() => {
    //document.querySelector("story")!.parentElement!.style.overflow = "visible !important";
    const box = document.querySelector('.story') as HTMLDivElement | null;
    const box1 = box?.parentElement
    if(box1!==undefined){
      box1?.classList.add("gallery__story-container");
    }
    const boxStyle = box1?.style
    if(boxStyle!==undefined)
      boxStyle.overflow = "visible !important";
    
    
  }, []);
  return storiesUrls.map((url) => ({
    content: (props) => {
      return(
      <div className={"story"} style={{overflow: "visible !important"}}>
        <img src={url} alt="Story" />
      </div>
      
    )},
    styles: {
      overflow: "visible !important",
    }

  }));
}

export default StoriesGenerator
