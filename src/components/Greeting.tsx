import { useState, type FC } from 'react';

export interface GreetingProps {
    messages: Array<string>;
}

const Greeting: FC<GreetingProps> = ({messages}) => {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}

export default Greeting;
