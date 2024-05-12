import { TranscriptionAudioPlayer } from "@/components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("renderiza correctamente el reproductor de audio con la fuente(src) proporcionada", () => {
	const audioSrc = "/audio/TestCall.mp3";
	render(<TranscriptionAudioPlayer src={audioSrc} />);

	const audioPlayer = screen
		.getByTestId("trascription-audio")
		.querySelector("audio");

	expect(audioPlayer).toBeInTheDocument();
	expect(audioPlayer).toHaveAttribute("src", audioSrc);
});

test("interactúa correctamente con el reproductor de audio", () => {
	render(<TranscriptionAudioPlayer src="/audio/TestCall.mp3" />);

	// Simula eventos de reproducción, pausa, avance rápido, retroceso, etc.
	const playButton = screen.getByRole("button", { name: /play/i });
	userEvent.click(playButton);
});
