const ALPHABETS = new Array(26).fill('').map((e,index)=> String.fromCharCode(65 + index));

const LetterButtons = ({text, usedLetters, onLetterClick}) => {
    const originalCharcters = new Set(text.toUpperCase().split(''));
    const selectedLetters = new Set(usedLetters.join('').toUpperCase().split(''));

    const buttonStyle = function(letter){
        if(selectedLetters.has(letter)){
            return `${originalCharcters.has(letter) ? 'bg-green-600 border-green-700 hover:bg-green-700' : 'border-[#000] border-4 bg-red-600 hover:bg-red-700'}  cursor-not-allowed`
        }else
        return 'bg-blue-600 border-blue-700  hover:bg-blue-700'
    }

    const handleClick = (e) => {
        const charecter = e.target.value;
        onLetterClick?.(charecter);
    }

    const buttons = ALPHABETS.map((letter) => {
        return (
        <button 
        key={`button-${letter}`} 
        value={letter}
        disabled={selectedLetters.has(letter)}
        className={`h-12 w-12 m-1 rounded-md focus:outline-none text-white  ${buttonStyle(letter)} `}
        onClick={handleClick}
        >
            {letter}
        </button>
        )
    })

  return (
    <div>
      {buttons}
    </div>
  )
}

export default LetterButtons
