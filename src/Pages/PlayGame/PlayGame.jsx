import { Link, useLocation } from "react-router-dom";
import MasketText from "../../components/MaskedText/MasketText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../../components/HangMan/HangMan";
function PlayGame() {
  const [usedLetters, setUsedLetters] = useState([]);

  const [step, setStep] = useState(1);

  const location = useLocation();
  const wordSelected = location.state?.wordSelected; //if teh state is not present it will return undefined, otherwise it will return the value of the wordSelected

  function handleLetterClick(letter) {
    if (wordSelected.toUpperCase().includes(letter)) {
      console.log("Correct Letter");
    } else {
      console.log("Wrong Letter");
      setStep(step + 1);
    }
    setUsedLetters([...usedLetters, letter]);
  }

  return (
    <div>
      <h1>Play Game</h1>

      <MasketText text={wordSelected} usedLetters={usedLetters} />
      <hr />
      <div className="flex justify-between items-center">    
        <div className="basis-2/4">
          <LetterButtons
            text={wordSelected}
            usedLetters={usedLetters}
            onLetterClick={handleLetterClick}
          />
        </div>
        <div className="basis-2/4 flex justify-center items-center"> 
          <HangMan step={step} />
        </div>
      </div>

      <hr />

      <Link to="/start" className="text-blue-600 underline hover:text-blue-700">
        {" "}
        Start Game{" "}
      </Link>
    </div>
  );
}
export default PlayGame;
