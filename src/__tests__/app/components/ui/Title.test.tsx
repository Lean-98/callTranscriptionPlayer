import { render, screen } from "@testing-library/react";
import { Title, ThemeSwitch } from "@/components";

describe("Title UI", () => {
	it("renders Title component", () => {
		render(<Title title="Transcription Call" subTitle="Challlenge Next.js" />);

		render(<ThemeSwitch />);

		const titleElement = screen.getByText(/Transcription Call/i);
		const subTitle = screen.getByText(/Challlenge Next.js/i);

		expect(titleElement).toBeInTheDocument();
		expect(subTitle).toBeInTheDocument();
	});
});
