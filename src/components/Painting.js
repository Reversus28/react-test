import PropTypes from 'prop-types';

function Painting({ id, url, title }) {
  console.log('url', url);
  return (
    <div>
      <img src={url} alt="" width="480" />
      <p>Автор: {title}</p>
      <p>Ціна: </p>
      <p>Доступність</p>
      <button></button>
    </div>
  );
}

Painting.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Painting;
