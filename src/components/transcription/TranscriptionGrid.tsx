"use client";

import { TranscriptionItem } from "./TranscriptionGridItem";
import { transcription } from "@/consts/transcription.const";

import { TranscriptionAudioPlayer } from "./audioPlayer/TranscriptionAudioPlayer";
const audioSrc = "/audio/TestCall.mp3";

export const TranscriptionGrid = () => {
	return (
		<>
			<div className="bg-gray-100 h-fullflex flex-col w-full md:w-6/12 xl:w-4/12 mx-auto rounded">
				<TranscriptionItem transcription={transcription} />

				<TranscriptionAudioPlayer src={audioSrc} />
			</div>
		</>
	);
};
