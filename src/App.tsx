import Card from './components/Card';
import Counter from './components/Counter/';  // Importando o componente Counter

function App() {
  return (
    <>
      <p>Prova 02 (28/02/25)</p>
      <Card title="Título do Card" description="Esta é uma descrição detalhada do card." />
      <Counter />  {/* Adicionando o componente Counter */}
    </>
  );
}

export default App;
