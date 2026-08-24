import { render, screen } from "@testing-library/react"
import Header from '@/components/Header'

describe("Header testing", () => {
    test("The header displays two headings", () => {
        render(<Header />)

        const headings = screen.getAllByRole("heading")

        expect(headings).toHaveLength(2)
    })
})