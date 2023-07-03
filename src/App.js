//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";

//component
import Temp from "./Components/temp";

function App() {
  console.log('hiug');
  return (
    <>
      <HomeLayoutHOC path='/' exact component={Temp} />
    </>
  );
}

export default App;
