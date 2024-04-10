import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconName } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import "./scss/app.scss";

library.add(far);

const App: React.FC = () => {
  const [randomIcon, setRandomIcon] = useState<IconName>();

  const handleClick = (): void => {
    const index = Math.floor(Math.random() * Object.keys(far).length);
    const icon = far[Object.keys(far)[index]].iconName;
    setTimeout(() => setRandomIcon(icon), 3000);
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
};

export default App;
