import Title from "../Title"
import SubTitle from "../SubTitle"

const Header = () => {

    return (
        <header className="flex flex-col text-center w-full max-w-3xl mx-auto mt-6 px-4 py-6 sm:px-6 md:py-8
                rounded-2xl border border-[purple]">
            <Title  text = "Neon Reflex" />
            <SubTitle text = "Click the correct square"/>
        </header>
    )
}

export default Header