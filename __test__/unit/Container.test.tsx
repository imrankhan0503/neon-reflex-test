import { render, screen, fireEvent } from '@testing-library/react'
import Container from '@/components/Container'

describe("Container testing", () => {
    test("The game displays three square buttons", () => {
        render(<Container />)

        const squares = screen.getAllByRole("button")

        expect(squares).toHaveLength(3)
    })

    test("The restart button is not displayed before a square is selected", () => {
        render(<Container />)

        const restart = screen.queryByRole("button",
            {
                name: /restart game/i,
            })

        expect(restart).not.toBeInTheDocument()
    })

    test("The winning result is not displayed before a square is selected", () => {
        render(<Container />)

        const result = screen.queryByText(/you won!/i)

        expect(result).not.toBeInTheDocument()
    })

    test("The losing result is not displayed before a square is selected", () => {
        render(<Container />)

        const result = screen.queryByText(/you lost!/i)

        expect(result).not.toBeInTheDocument()
    })

    test("The restart button is displayed after a square is selected", () => {
        render(<Container />)

        const squares = screen.getAllByRole("button")

        fireEvent.click(squares[0])

        const restart = screen.getByRole("button", {
            name: /restart game/i,
        })

        expect(restart).toBeInTheDocument()
    })
})