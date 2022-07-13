import "./App.css";
import Contacts from "./pages/Contacts";
import { ReactComponent as BackArrow } from "./assets/icons/BackArrow.svg";
import { ReactComponent as LightMode } from "./assets/icons/LightMode.svg";
import { ButtonIconSecondary } from "./components/StyledButtons/StyledButtons";
export default function App() {
  return (
    <div className="AppContainer">
      <ButtonIconSecondary className="AppControll">
        <BackArrow />
      </ButtonIconSecondary>
      <Contacts className="AppControll" />
      <ButtonIconSecondary className="AppControll">
        <LightMode />
      </ButtonIconSecondary>
    </div>
  );
}
