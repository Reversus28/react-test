import Painting from './Painting';

function PaintingList({ items }) {
  console.log('items', items);
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            <Painting url={item.url} title={item.title} />;
          </li>
        );
      })}
    </ul>
  );
}

export default PaintingList;
