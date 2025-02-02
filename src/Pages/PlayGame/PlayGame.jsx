import { Link } from "react-router-dom";
import MasketText from "../../components/MaskedText/MasketText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import { useState } from "react";
function PlayGame() {

    const [usedLetters, setUsedLetters] = useState([]);

    function handleLetterClick(letter){
        setUsedLetters([...usedLetters,letter]);
    } 

    return (
        <div>
            <h1>Play Game</h1>

            <MasketText text="humble" usedLetters={usedLetters}/>
            <hr/>
            <LetterButtons text="humble" usedLetters={usedLetters} onLetterClick={handleLetterClick}/>
            <hr />

            <Link to='/start' className="text-blue-600 underline hover:text-blue-700"> Start Game </Link>
        </div>
    );
}
export default PlayGame;