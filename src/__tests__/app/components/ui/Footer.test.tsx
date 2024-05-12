import { render, screen } from "@testing-library/react";
import { Footer } from "@/components";

describe("Footer UI", () => {
	it("renders Footer component", () => {
		render(<Footer />);

		expect(screen.getByText("ContactShip")).toBeInTheDocument();
	});

	const currentYear = new Date().getFullYear();
	it("renders Footer component", () => {
		render(<Footer />);

		expect(screen.getByText(`© ${currentYear}`)).toBeInTheDocument();
	});
});
