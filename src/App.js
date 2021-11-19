import logo from './logo.svg';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  //  let name="vinod naid"
  //   if(name=="vinod"){
  //     return <h1>vinod</h1>
  //   }else{
  //     return <h2>vinodnaid</h2>
  //   }
  let tableCOntent = ["name", "age", "gender"];
  let arr = []
  tableCOntent.forEach(data => {
    arr.push(<th>{data}</th>)
  })
  let tableCOntent1 = ["vinod ", "24", "m"];
  let arrData = [];
  tableCOntent1.forEach(data => {
    arrData.push(<td>{data}</td>)
  })


  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {arr}
        </tr>
      </thead>
      <tbody>
        <tr>
          {arrData}
        </tr>
      </tbody>
    </table>
  )

}


export default App;