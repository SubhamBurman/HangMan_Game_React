import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";
function StartGame() {

    const navigate = useNavigate();

    function handelSubmit() {
        navigate('/play');
    }

    return (
        <div>
            <h1>Start Game</h1>
             <TextInputFormContainer onSubmit={handelSubmit}/>
        </div>
    );
}
export default StartGame;