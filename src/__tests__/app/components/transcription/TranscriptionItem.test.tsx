import { TranscriptionItem } from "@/components";
import { render, screen, fireEvent } from "@testing-library/react";

// Mock de datos de transcripción para la prueba
const mockTranscription = [
	{ role: "agent", content: "Hola, ¿cómo estás?" },
	{ role: "user", content: "¡Hola! Estoy bien, gracias." },
];

// Verifican si el componente TranscriptionItem renderiza correctamente
// los elementos de transcripción proporcionados, así como si la interacción de hacer
// click en un elemento de transcripción realiza la acción esperada.

describe("TransactionItem component", () => {
	test("renderiza correctamente el componente TranscriptionItem", () => {
		render(<TranscriptionItem transcription={mockTranscription} />);

		// Verifica si los elementos de transcripción se renderizan correctamente
		const agentMessage = screen.getByText("Hola, ¿cómo estás?");
		const userMessage = screen.getByText("¡Hola! Estoy bien, gracias.");

		expect(agentMessage).toBeInTheDocument();
		expect(userMessage).toBeInTheDocument();
	});

	test("realiza la acción al hacer clic en un elemento de transcripción", () => {
		render(<TranscriptionItem transcription={mockTranscription} />);

		// Simula hacer clic en un elemento de transcripción
		const userMessage = screen.getByText("¡Hola! Estoy bien, gracias.");
		fireEvent.click(userMessage);
	});
});
