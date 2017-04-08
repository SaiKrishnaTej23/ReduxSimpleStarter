import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
const VideoItems = props.videos.map((video) => {   
  return ( 
  <VideoListItem
   key={video.etag} 
   video={video} 
   onVideoSelect={props.onVideoSelect}
   /> );


});
    return (
          <div className="col-lg-4 col-md-4 col-sm-12">
            <ul className="list-group">
                {VideoItems}
            </ul>
          </div>
    );
}

export default VideoList;