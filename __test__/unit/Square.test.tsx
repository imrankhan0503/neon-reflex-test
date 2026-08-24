import { render, screen, fireEvent } from '@testing-library/react'
import Square from '@/components/Square'

describe("Square testing", () => {
    test("The square is displayed as a button", () => {
        render(
            <Square
                id={1}
                isSelected={false}
                isCorrect={false}
                gameFinished={false}
                clickFunction={() => { }}
            />
        )
        const square = screen.getByRole("button")
        expect(square).toBeInTheDocument()
    })

    test("The square calls the function when clicked", () => {
        const mockClick = jest.fn()

        render(
            <Square
                id={1}
                isSelected={false}
                isCorrect={false}
                gameFinished={false}
                clickFunction={mockClick}
            />
        )

        const square = screen.getByRole("button")

        fireEvent.click(square)

        expect(mockClick).toHaveBeenCalled()
    })

    test("The square sends its id when clicked", () => {
        const mockClick = jest.fn()

        render(
            <Square
                id={1}
                isSelected={false}
                isCorrect={false}
                gameFinished={false}
                clickFunction={mockClick}
            />
        )

        const square = screen.getByRole("button")

        fireEvent.click(square)

        expect(mockClick).toHaveBeenCalledWith(1)
    })

    test("The square is disabled when the game is finished", () => {
        const mockClick = jest.fn()

        render(
            <Square
                id={1}
                isSelected={false}
                isCorrect={false}
                gameFinished={true}
                clickFunction={mockClick}
            />
        )

        const square = screen.getByRole("button")

        expect(square).toBeDisabled()
    })

    test("The square is enabled when the game is not finished", () => {
        const mockClick = jest.fn()

        render(
            <Square
                id={1}
                isSelected={false}
                isCorrect={false}
                gameFinished={false}
                clickFunction={mockClick}
            />
        )

        const square = screen.getByRole("button")

        expect(square).toBeEnabled()
    })

    test("The unselected square has the default purple style", () => {
        render(
            <Square
                id={1}
                isSelected={false}
                isCorrect={false}
                gameFinished={false}
                clickFunction={() => { }}
            />
        )

        const square = screen.getByRole("button")

        expect(square).toHaveClass("bg-purple-950")
    })

    test("The correct selected square becomes green", () => {
        render(
            <Square
                id={1}
                isSelected={true}
                isCorrect={true}
                gameFinished={true}
                clickFunction={() => { }}
            />
        )

        const square = screen.getByRole("button")

        expect(square).toHaveClass("bg-green-500")
    })

    test("The incorrect selected square becomes red", () => {
        render(
            <Square
                id={1}
                isSelected={true}
                isCorrect={false}
                gameFinished={true}
                clickFunction={() => { }}
            />
        )

        const square = screen.getByRole("button")

        expect(square).toHaveClass("bg-red-500")
    })

    
})