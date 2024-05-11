"use client";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

interface TranscriptionAudioPlayerProps {
	src: string;
}

export const TranscriptionAudioPlayer = ({
	src,
}: TranscriptionAudioPlayerProps) => {
	return (
		<div className="container mx-auto p-4">
			<AudioPlayer src={src} />
		</div>
	);
};
