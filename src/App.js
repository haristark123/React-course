import Todo from "./components/Todo";
// import Modal from "./components/modal";
// import Backdrop from "./components/Backdrop";
function App() {
  return (
    <div>
      <h2>Todos</h2>
      <Todo text="react"/>
      <Todo text="Master React"/>
      <Todo text="Expert React"/>
      {/* <Modal />
      <Backdrop /> */}
    </div>
  );
}

export default App;
