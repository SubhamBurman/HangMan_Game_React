// container component for TextInputForm

import { useState } from "react";
import TextInputForm from "./TextInputForm";

const TextInputFormContainer = (onSubmit) => {
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
    <TextInputForm
    handelFormSubmit={handelFormSubmit}
    handelTextInputChange={handelTextInputChange}
    value={value}
    InputType={InputType}
    setInputType={setInputType}
    />
  )  
}

export default TextInputFormContainer
