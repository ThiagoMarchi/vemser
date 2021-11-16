import PropTypes from 'prop-types';

function Item({menu, url}) {
  return (
    <>
      <li>{menu}, {url}</li>
    </>
  )
}

Item.propTypes = {
  menu: PropTypes.string.isRequired,
  url: PropTypes.number.isRequired
}

// Item.defaultProps = {
//   url: 0,
//   menu: 'Teste'
// }

export default Item;
