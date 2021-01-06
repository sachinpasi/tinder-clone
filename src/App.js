import { ReactComponent as Logo } from "./tinder-logo.png";
import Header from "./Header";
import TinderCard from "./Tinder_Cards";
import SwipeButtons from "./SwipeButtons";

document.title = "Tinder-Clone";

function App() {
  return (
    //BEM class naming convection

    <div className="app">
      <Logo />
      <Header />
      <TinderCard />
      <SwipeButtons />
    </div>
  );
}

export default App;
