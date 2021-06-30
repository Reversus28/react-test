import PaintingList from './components/PaintingList';
import painters from './paintings.json';

export default function App() {
  return (
    <div>
      <PaintingList items={painters} />
    </div>
  );
}
