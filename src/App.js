import './App.css';
import CharacterProvider from 'context/CharacterContext';
import Character from 'components/character';

function App() {
  return (
    <CharacterProvider>
      <Character />
    </CharacterProvider>
  );
}

export default App;
