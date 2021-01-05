import Header from "./Header";
import TinderCard from "./Tinder_Cards";
import SwipeButtons from "./SwipeButtons";
function App() {
  return (
    //BEM class naming convection

    <div className="app">
      <Header />
      <TinderCard />
      <SwipeButtons />
    </div>
  );
}

export default App;
