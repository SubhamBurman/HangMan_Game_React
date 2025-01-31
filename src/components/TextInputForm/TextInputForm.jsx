import { useState } from "react";
import Button from "../Button/Button"
import TextInput from "../TextInput/TextInput"

const TextInputForm = ({onSubmit}) => {

  const [value, setValue] = useState("")
  const [InputType, setInputType] = useState("text")

  function handelFormSubmit(e){
    e.preventDefault();
    console.log("Form Submitted", value)
    onSubmit ?. (value);
    
}

  function handelTextInputChange(e){
    console.log("text input change");
    console.log(e.target.value);
    setValue(e.target.value);
    
    
  }

  

  return (
    <form className="flex items-end" onSubmit={handelFormSubmit}>
      <div className="mr-2 flex-1">
        <TextInput 
        label="Enter a word or phrase" 
        type={InputType}
        value={value}
        onChange={handelTextInputChange}

        />
        
      </div>
      <div>
        <Button
        styleType="warning"
        text={InputType === "text" ? "Hide" : "Show"}
        onClickHandler={()=> setInputType(InputType === "text" ? "password" : "text")}

        />
      </div>
      <div>
          <Button className="flex"
            text="ok"
            type="submit"
          />
        </div>
    </form>
  )
}

export default TextInputForm
