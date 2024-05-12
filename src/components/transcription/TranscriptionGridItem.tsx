"use client";

import { useStore } from "@/store/date";
import AOS from "aos";
import clsx from "clsx";
import type { TranscriptionInt } from "../../interfaces/transcription.interface";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface TranscriptionItemProps {
	transcription: TranscriptionInt[];
}

export const TranscriptionItem = ({
	transcription,
}: TranscriptionItemProps) => {
	const setTime = useStore((state) => state.setTime);

	// AOS init
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: false,
		});
	}, []);

	return (
		<div
			className="flex-1 overflow-y-auto p-4"
			data-aos="zoom-in-up"
			data-testid="trascription-item"
		>
			<div className="flex flex-col space-y-2">
				{transcription.map((transc, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className={clsx(
							"flex",
							transc.role === "agent" ? "justify-end" : "",
						)}
					>
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<div
							className={clsx("flex cursor-pointer", {
								" bg-emerald-200 text-black p-2 rounded-lg max-w-xs transition-colors hover:bg-emerald-300":
									transc.role === "agent",
								" bg-zinc-300 text-black p-2 rounded-lg max-w-xs transition-colors hover:bg-gray-400":
									transc.role === "user",
							})}
							onClick={() => {
								transc.start !== undefined && setTime(transc.start);
							}}
						>
							<span className="uppercase font-semibold">{transc.role}: </span>

							{transc.content}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
