import { TranscriptionGrid } from "@/components";
import { render, screen } from "@testing-library/react";

describe("TranscriptionGrid component", () => {
	test("renderiza correctamente el reproductor de audio", () => {
		render(<TranscriptionGrid />);

		const audioPlayer = screen.getByTestId("trascription-audio");

		expect(audioPlayer).toBeInTheDocument();
	});

	test("renderiza correctamente el TransactionItem", () => {
		render(<TranscriptionGrid />);

		const transactionItem = screen.getByTestId("trascription-item");

		expect(transactionItem).toBeInTheDocument();
	});
});
