import React from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
    src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
    return <ReactPlayer url={src} controls playing />;
};

export default VideoPlayer;