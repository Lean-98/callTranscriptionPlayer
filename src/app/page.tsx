import { Footer, Title, TranscriptionGrid } from "@/components";

export default function Home() {
	return (
		<>
			<main className="relative">
				<Title
					title="Transcription Call"
					className="mb-2 md:mb-5"
					subTitle="Challlenge Next.js"
				/>

				<TranscriptionGrid />

				<Footer />
			</main>
		</>
	);
}
