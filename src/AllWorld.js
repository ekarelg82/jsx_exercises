function All() {
    return <span>All</span>;
  }
  
  function World() {
    return <span>World</span>;
  }
  
  function AllWorld() {
    return (
      <div>
        <All /> <World />
      </div>
    );
  }
  
  ReactDOM.render(<AllWorld />, document.querySelector("#root"));