import React,{useEffect, useState} from 'react'
import './youTube.css'

function YouTube() {

const [youTubeVideo, setYouTube] = useState([]);
useEffect(() => {
  fetch(
    "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCStQBLYSGJgRnMO9gtacvFywc5ESJH8Q4&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8"
  )
  
    .then((response) => response.json())
        .then((data) => {
            const Vidoes = data.items;
            setYouTube(Vidoes)
            console.log(Vidoes)
    })

}, []);





  return (
    <div>
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                <h2>Apple Latest Videos</h2>
              </div>
            </div>
            {youTubeVideo.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-6">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank">
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouTube