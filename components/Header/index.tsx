import Title from "../Title"
import SubTitle from "../SubTitle"

const Header = () => {

    return (
        <header className="w-full px-4 py-6 sm:px-6 md:py-8 text-center">
            <Title  text = "Neon Reflex" />
            <SubTitle text = "Click the correct square"/>
        </header>
    )
}

export default Header