import { IconButton, Badge } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './BookList.css'; // Importamos el archivo CSS para los estilos

const BookList = ({ books, onBookClick }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < Math.floor(rating) ? 'star-filled' : 'star-empty'}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  const handleCartClick = (event) => {
    event.stopPropagation(); // Esto evitará que el clic en el carrito se propague al div principal
    // Aquí puedes agregar la lógica para agregar el libro al carrito
  };

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-list__item" onClick={() => onBookClick(book.title)}>
          <img className="book-list__image" src={book.image} alt={book.title} />
          <h3 className="book-list__title">{book.title}</h3>
          <p className="book-list__subtitle">{book.subtitle}</p>
          <p className="book-list__author">{book.author}</p>
          <p className="book-list__pages">{book.pages} páginas</p>
          <p className="book-list__language">Idioma: {book.language}</p>
          <p className="book-list__rating">
            {renderStars(book.rating)} {book.rating}
          </p>

          {/* Botón de carrito de compras en la parte inferior derecha de cada tarjeta */}
          <div className="book-list__cart">
            <IconButton
              color="primary"
              sx={{
                position: 'absolute',
                bottom: 10,
                right: 10,
              }}
              onClick={handleCartClick} // Aquí se maneja el clic del carrito
            >
              <Badge badgeContent={0} color="secondary">
                <AddShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
