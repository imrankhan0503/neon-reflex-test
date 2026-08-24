import { render, screen } from '@testing-library/react'
import Subtitle from '@/components/SubTitle'

describe("Subtitle testing", () => {
    test("The subtitle renders correctly", () => {

        render(<Subtitle text="Click the correct square" />)

        const subtitle = screen.getByRole("heading",
            {
                level: 2,
                "name": /click the correct square/i
            })

        expect(subtitle).toBeInTheDocument()
    })
})