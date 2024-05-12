"use client";

import { useEffect, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useStore } from "@/store/date";

interface TranscriptionAudioPlayerProps {
	src: string;
}

export const TranscriptionAudioPlayer = ({
	src,
}: TranscriptionAudioPlayerProps) => {
	const playerRef = useRef<AudioPlayer>(null);
	const time = useStore((state) => state.time);

	useEffect(() => {
		if (playerRef.current?.audio?.current) {
			playerRef.current.audio.current.currentTime = time;
		}
	}, [time]);

	return (
		<div className="container mx-auto p-4" data-testid="trascription-audio">
			<AudioPlayer ref={playerRef} src={src} />
		</div>
	);
};
