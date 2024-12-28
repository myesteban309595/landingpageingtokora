import { IconButton, Badge } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './BookList.css'; // Importamos el archivo CSS para los estilos

const BookList = ({ books, onBookClick, handleAddToCart }) => {

  const AddToCartFunction = (event, book) => {
    event.stopPropagation(); // Esto evitará que el clic en el carrito se propague al div principal

    // Obtener los productos actuales del carrito
    const currentCart = JSON.parse(sessionStorage.getItem('cart')) || [];

    // Verificar si el libro ya está en el carrito
    const existingBook = currentCart.find(item => item.id === book.id);

    if (existingBook) {
      // Si ya está en el carrito, solo actualizamos la cantidad
      existingBook.quantity += 1;
    } else {
      // Si no está en el carrito, lo añadimos
      currentCart.push({ ...book, quantity: 1 });
    }

    // Guardar los productos en el sessionStorage
    sessionStorage.setItem('cart', JSON.stringify(currentCart));
    handleAddToCart(currentCart.length); // Actualiza la cantidad total de artículos en el carrito
  };

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

  return (
    <div className="book-list">
      {books.map((book) => (
      <div key={book.id} className="book-list__item" onClick={() => onBookClick(book.title)}>
      <img className="book-list__image" src={book.image} alt={book.title} />
    
      <div className="book-list__info">
        <h3 className="book-list__title">{book.title}</h3>
        <p className="book-list__author">Autor: {book.author}</p>
        <p className="book-list__subtitle">{book.subtitle}</p>
        <p className="book-list__pages">Páginas: {book.pages}</p>
        <p className="book-list__language">Idioma: {book.language}</p>
    
        {/* Mostrar la calificación y stock */}
        <p className="book-list__rating">
          {renderStars(book.rating)} {book.rating} ⭐
        </p>
        <p className="book-list__stock">Stock: {book.stock} disponibles</p>
      </div>
    
      {/* Botón de carrito de compras */}
      <div className="book-list__cart">
        <IconButton
          color="primary"
          sx={{
            position: 'absolute',
            bottom: 10,
            right: 10,
          }}
          onClick={(event) => AddToCartFunction(event, book)} // Pasamos el libro al hacer clic
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
