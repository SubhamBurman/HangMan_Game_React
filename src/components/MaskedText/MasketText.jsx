import { getAllCharecters } from "./MasketTextUtility";

const MasketText = ({text,usedLetters}) => {
  const letters = getAllCharecters(text,usedLetters).split('');
  return (
    <>
      {letters.map((letter,index) => {
        return (
        <span key={`letter-${index}`} className="inline-block mx-1">{letter}</span>
        )
      })}
    </>
  )
}



export default MasketText
