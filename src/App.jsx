import { Route, Routes } from "react-router-dom";
import StartGame from "./Pages/StartGame/StartGame";
import PlayGame from "./Pages/PlayGame/PlayGame";

function App(){
  return (
    // <div>
    //   <h1 className="font-semibold text-3xl">Welcome to HnagMan</h1>
    //   <TextInputForm onSubmit={(value)=> console.log("value coming from the hidden form is", value)
    //   }/>
    // </div>

    <Routes>
      <Route path="/play" element={<PlayGame/>} />
      <Route path="/start" element={<StartGame/>} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default App;