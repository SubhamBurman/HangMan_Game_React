import getButtonStyling from "./getButtonStyleType"
function Button({text,type,styleType,onClickHandler}){

    

  return (
        <button 
            type={type}
            onClick={onClickHandler}
            className={`px-4 py-2 ${getButtonStyling(styleType)}  text-white  rounded-md transition-all`}
        >
            {text}
        </button>
        
   )
}

export default Button
