import HelloWorld from "./components/HelloWorld";
import TodoListAdvanced from "./components/TodoListAdvanced";

function App() {
  return (<>
    <HelloWorld />
    <div className="w-full border-t border-black my-4"></div>
    <TodoListAdvanced />
  </>
  );
}

export default App;
