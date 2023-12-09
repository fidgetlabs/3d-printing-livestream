// src/App.tsx
import VideoPlayer from './VideoPlayer';

const App = () => {
  return (
    <div>
      <h1>Fidget Labs 3d Printing</h1>
      <VideoPlayer src="http://localhost:8000/live/my-video-stream.flv" />
    </div>
  );
};

export default App;