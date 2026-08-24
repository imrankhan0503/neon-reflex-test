type SubTitleProps = {
    text: string
}

const SubTitle = ({text}: SubTitleProps) => {
    
    return (
        <h2 className="mt-2 text-base sm:text-lg md:text-xl">{text}</h2>
    )
}

export default SubTitle