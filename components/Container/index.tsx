'use client'
import { useState } from "react"
import Square from "../Square"
import RestartButton from "../RestartButton"
import Result from "../Result"

const getRandomSquare = () => Math.floor(Math.random() * 3) + 1

const Container = () => {

    const [correctSquare, setCorrectSquare] = useState(1)
    const [selectedSquare, setSelectedSquare] = useState<number | null> (null)
    const [gameFinished, setGameFinished] = useState(false)
    const [result, setResult] = useState('')

    const handleClick = (id: number) => {
        setSelectedSquare(id)
        setGameFinished(true)

        if (id === correctSquare){
            setResult("You Won!")
        }
        else{
            setResult("You lost!")
        }
    }

     const restartGame = () => {
        setCorrectSquare(getRandomSquare())
        setSelectedSquare(null)
        setGameFinished(false)
        setResult('')
     }

    return (
        <main className="flex flex-col items-center gap-5 mt-5">
            <div className="flex justify-center gap-5 sm:gap-4 md:gap-5">
                    <Square id={1}
                            isSelected={selectedSquare === 1}
                            isCorrect={correctSquare === 1}
                            gameFinished={gameFinished}
                            clickFunction={handleClick} />

                    <Square id={2}
                            isSelected={selectedSquare === 2}
                            isCorrect={correctSquare === 2}
                            gameFinished={gameFinished}
                            clickFunction={handleClick} />

                    <Square id={3}
                            isSelected={selectedSquare === 3}
                            isCorrect={correctSquare === 3}
                            gameFinished={gameFinished}
                            clickFunction={handleClick} />

            </div>
                            {result && <Result result={result}/>} 
                            {gameFinished && (<RestartButton clickFunction={restartGame}/>)}
        </main>
    )
}

export default Container