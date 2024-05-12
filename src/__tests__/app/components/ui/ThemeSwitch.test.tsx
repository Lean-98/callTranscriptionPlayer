import { render, fireEvent } from "@testing-library/react";
import { ThemeSwitch } from "@/components";
import { useTheme } from "next-themes";

// Mock del hook useTheme
const mockSetTheme = jest.fn();
jest.mock("next-themes", () => ({
	useTheme: jest.fn(() => ({
		resolvedTheme: "dark",
		setTheme: mockSetTheme,
	})),
}));

// Este test verifica el funcionamiento del componente ThemeSwitch asegurándose de que cambia el tema de la UI de oscuro a claro y viceversa.
// Utiliza un mock del hook useTheme para simular el estado del tema y la función setTheme.
// Luego, simula clics en los iconos del sun y la moon para cambiar el tema y verifica que la fn setTheme se llame con los argumentos correctos (‘light’, ‘dark’ ).
describe("ThemeSwitch Component", () => {
	it("cambia el tema de oscuro a claro", () => {
		const { getByTestId } = render(<ThemeSwitch />);
		const sunIcon = getByTestId("sun-icon");
		fireEvent.click(sunIcon);

		// Verifica que setTheme ha sido llamado con 'light'
		expect(mockSetTheme).toHaveBeenCalledWith("light");
	});

	it("cambia el tema de claro a oscuro", () => {
		// Actualiza el mock para simular el tema 'light'
		(useTheme as jest.Mock).mockImplementation(() => ({
			resolvedTheme: "light",
			setTheme: mockSetTheme,
		}));

		const { getByTestId } = render(<ThemeSwitch />);
		const moonIcon = getByTestId("moon-icon");
		fireEvent.click(moonIcon);

		// Verifica que setTheme ha sido llamado con 'dark'
		expect(mockSetTheme).toHaveBeenCalledWith("dark");
	});
});
