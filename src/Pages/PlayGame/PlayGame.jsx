import { Link } from "react-router-dom";
import MasketText from "../../components/MaskedText/MasketText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
function PlayGame() {
    return (
        <div>
            <h1>Play Game</h1>

            <MasketText text="humble" usedLetters={['b','e']}/>
            <hr/>
            <LetterButtons usedLetters={['b','e']}/>
            <hr />

            <Link to='/start'> Start Game </Link>
        </div>
    );
}
export default PlayGame;