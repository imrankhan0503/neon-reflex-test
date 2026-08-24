
type RestartButtonProps = {
    clickFunction: () => void
}

const RestartButton = ({clickFunction}: RestartButtonProps) => {

    return(
        <div className="flex justify-center mt-6">
            <button onClick={clickFunction} 
                    className="bg-purple-700 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl
                     shadow-lg transition duration-200 hover:scale-105 border border-[purple]">
            Restart Game
            </button>
        </div>
    )
}

export default RestartButton