
type TitleProps = {
     text: string
}

const Title = ({text}: TitleProps) => {

    return (
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">{text}</h1>
    )
}

export default Title