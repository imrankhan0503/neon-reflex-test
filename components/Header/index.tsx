import Title from "../Title"
import SubTitle from "../SubTitle"

const Header = () => {

    return (
        <header className="flex flex-col text-center w-[calc(100%-16px)] max-w-3xl mx-auto mt-6 px-4 py-6 sm:px-6 md:py-8
                           rounded-2xl border border-purple-500">
            <Title  text = "Neon Reflex" />
            <SubTitle text = "Click the correct square"/>
        </header>
    )
}

export default Header