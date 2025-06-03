import { useState } from 'react';

function CounterButton() {
  const [count, setCount] = useState(90);
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
    setShowText(!showText);
  };

  return (
    <>
      <div>
Hello - {count}
      </div>
      

      <button onClick={handleClick}>
        Count
      </button>
      {showText && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis facilis natus doloremque inventore sapiente a fugit molestiae eveniet ut! Deleniti atque unde ex repellat quia quis ipsa, ea maxime itaque.
        </p>
      )}
    </>
  );
}

export default CounterButton;