import PaintingList from './components/PaintingList';
import painters from './paintings.json';

export default function App() {
  return (
    <div>
      <h1>Привет</h1>
      <PaintingList items={painters} />
    </div>
  );
}
