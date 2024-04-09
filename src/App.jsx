import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import "./css/app.css";

library.add(far);

function App() {
  const [randomIcon, setRandomIcon] = useState();
  const icons = Object.keys(far);

  const handleClick = () => {
    const index = Math.floor(Math.random() * icons.length);
    for (const key in far) {
      if (key === icons[index]) {
        const icon = far[key].iconName;
        setTimeout(() => setRandomIcon(icon), 3000);
      }
    }
  };

  return (
    <div className="app">
      <div className="app__body">
        {randomIcon && (
          <FontAwesomeIcon
            icon={["far", `${randomIcon}`]}
            className="app__body__icon"
          />
        )}
        <button onClick={handleClick}>Нажми меня</button>
      </div>
    </div>
  );
}

export default App;
