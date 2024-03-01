function App() {
  return (
    <div className="App">
        <h1 className="title">WELCOME!</h1>
        <h1 className="title2">Your tasks:</h1>
        <div className="todos">
            <div className="todo">
                <div className="check"></div>
                <div className="text">task1</div>
                <button className="deleteTodo">del</button>
            </div>
            
        </div>

    </div>
  );
}

export default App;
