import { render, screen, fireEvent } from '@testing-library/react'
import RestartButton from '@/components/RestartButton'

describe("Restart button testing", () => {
    test("The restart button is displayed", () => {
        render(<RestartButton clickFunction={() => { }} />)

        const restart = screen.getByRole(
            "button",
            {
                "name": /restart game/i
            }
        )

        expect(restart).toBeInTheDocument()
    })

    test("The restart button calls the function when clicked", () => {
        const mockRestart = jest.fn()

        render(<RestartButton clickFunction={mockRestart} />)

        const restart = screen.getByRole("button",
            {
                "name": /restart game/i
            }
        )

        fireEvent.click(restart)

        expect(mockRestart).toHaveBeenCalled()
    })
})