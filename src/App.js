import Header from "./component/Header";
import Todolist from "./component/Todolist";
import Reduser from "./Reduser";
import Wrapper_Subnote  from "./component/Wrapper_Subnote";
const App=()=>{
    return (
      <div>
       <Header/>
      <Reduser>
        <Todolist/>
        <Wrapper_Subnote/>
      </Reduser>
      </div>
    
    );
}

export default App;