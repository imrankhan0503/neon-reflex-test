'use client'
type SquareProps = {
    id: number,
    isSelected: boolean,
    isCorrect: boolean,
    gameFinished: boolean,
    clickFunction: (id: number) => void
}

const Square = ({id, isSelected, isCorrect, gameFinished, clickFunction}: SquareProps) => {

    let backgroundColor = "bg-purple-950"

    if(isSelected && isCorrect) {
        backgroundColor = "bg-green-500"
    }

    if(isSelected && !isCorrect) {
        backgroundColor = "bg-red-500"
    }

    return(
        <button disabled={gameFinished} onClick={() => clickFunction(id)} 
                className={`${backgroundColor} w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl`}></button>
    )
}

export default Square