import { render, screen } from '@testing-library/react'
import Result from '@/components/Result'

describe("Result testing", () => {
    test("The result displays the provided winning message ", () => {
        render(<Result result="You won!" />)

        const result = screen.getByText(/you won!/i)

        expect(result).toBeInTheDocument()
    })

    test("The result displays the provided losing message ", () => {
        render(<Result result="You lost!" />)

        const result = screen.getByText(/you lost!/i)

        expect(result).toBeInTheDocument()
    })
})