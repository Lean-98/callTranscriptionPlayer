"use client";

import clsx from "clsx";
import type { TranscriptionInt } from "../../interfaces/transcription.interface";

interface TranscriptionItemProps {
	transcription: TranscriptionInt[];
}

export const TranscriptionItem = ({
	transcription,
}: TranscriptionItemProps) => {
	return (
		<div className="flex-1 overflow-y-auto p-4">
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
						<div
							className={clsx("flex", {
								" bg-emerald-200 text-black p-2 rounded-lg max-w-xs":
									transc.role === "agent",
								" bg-gray-300 text-black p-2 rounded-lg max-w-xs ":
									transc.role === "user",
							})}
						>
							<span className="uppercase">{transc.role}: </span>

							{transc.content}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
