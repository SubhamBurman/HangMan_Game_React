import level1 from "../../assets/1.svg";
import level2 from "../../assets/2.svg";
import level3 from "../../assets/3.svg";
import level4 from "../../assets/4.svg";
import level5 from "../../assets/5.svg";
import level6 from "../../assets/6.svg";
import level7 from "../../assets/7.svg";
import level8 from "../../assets/8.svg";

const HangMan = ({step}) => {
    const images = [level1, level2, level3, level4, level5, level6, level7, level8];
  return (
    <div className="w-[300px] h-[300px]">
      <img src={step >= images.length ? images[images.length-1] : images[step]} alt="Hangman" />
    </div>
  )
}

export default HangMan
