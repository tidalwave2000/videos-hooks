import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, search] = useVideos("buildings");

	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos]);

	return (
		<div className="ui container">
			{/* call SearchBar with onFormSubimt callback function as pararmeter */}{" "}
			<SearchBar onFormSubmit={search} />
			{/* call VideoDetails with selected video data stored in video*/}
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
						{/* call VideoList with onVideoSelect callback and current videos as parameters*/}
					</div>
					<div className="five wide column">
						<VideoList onVideoSelect={setSelectedVideo} videos={videos} />
						{/* tells you how many videos have been searched for */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
