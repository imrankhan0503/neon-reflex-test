import { render, screen } from '@testing-library/react'
import Title from '@/components/Title'

describe("Title testing", () => {
    test("The title renders correctly", () => {

        render(<Title text="Neon Reflex" />)

        const title = screen.getByRole("heading",
            {
                level: 1,
                "name": /neon reflex/i
            })

        expect(title).toBeInTheDocument()
    })
})