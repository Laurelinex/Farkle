import useSound from 'use-sound';
 
import rollSound from '../sounds/roll.mp3';
 
const BoopButton = () => {
  const [play] = useSound(rollSound);
 
  return <button onClick={play}>Boop!</button>;
};

export default BoopButton;