import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "huh",
      ":) what is this",
      "You trynna die ?",
      "Darling comeon..",
      "how can you..",
      "*Starts crying..",
      "hmmm...ig i dont matter...",
      "just another lonely girl in the deadly world...",
      "so..sad..",
      "ig my hearts breaking or is it just...me...",
      "you dont love me afterall...",
      "After all those years...",
      "i thought i meant something...",
      "your enjoying my misery...",
      "Is that your final answer?...",
      "ig ill just leave....;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <a
        href="https://media.tenor.com/2Aito04axUYAAAAM/kermit-vibing.gif"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        GitHub
      </a>
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://c.tenor.com/s--312__jnoAAAAC/tenor.gif" />
            <div className="text-container">Heheeeeeee</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://media.tenor.com/2Aito04axUYAAAAM/kermit-vibing.gif"
            />
            <h1 className="text-container">
              Do you like raisins? How about a date? i heard valentine's around
              corner 😉{" "}
            </h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
