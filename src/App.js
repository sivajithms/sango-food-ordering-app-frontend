//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";

//component
import Temp from "./Components/temp";
import Master from "./Components/master";

function App() {
  console.log('hiug');
  return (
    <>
      <HomeLayoutHOC path='/' exact component={Temp} />
      <HomeLayoutHOC path='/:type' exact component={Master} />
    </>
  );
}

export default App;
