import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BookDetailPage.css';
import Footer from '../components/Footer'

const BookDetailPage = () => {
  const { bookId } = useParams();

  const bookDetails = {
    'El Principito': {
      title: 'El Principito',
      author: 'Antoine de Saint-Exupéry',
      description: 'Un niño conoce a un aviador en medio del desierto, comenzando una serie de reflexiones sobre la vida, el amor y la amistad...',
      rating: 4.8,
      price: '$15.99',
      discountPrice: '$12.99',
      review: 'Una obra maestra de la literatura...',
      imageUrl: 'https://nidodelibros.com/wp-content/uploads/2024/02/9789877979015-.jpeg',
      stock: 10, // Nueva propiedad para la cantidad en stock
    },
    'Cien años de soledad': {
      title: 'Cien años de soledad',
      author: 'Gabriel García Márquez',
      description: 'La historia de la familia Buendía a través de varias generaciones en el pueblo ficticio de Macondo, explorando temas como el amor, la muerte y el destino.',
      rating: 4.8,
      price: '$19.99',
      discountPrice: '$16.99',
      review: 'Un clásico de la literatura mundial, lleno de realismo mágico...',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6eTagQR_2oRnIyVj-BHpM5paFFqY65lNsLP0VK3m7AfFMqov6sChVuEWqbitZDJKDxFs&usqp=CAU',
      stock: 5, // Nueva propiedad para la cantidad en stock
    },
    // Agrega la propiedad stock a todos los demás libros de manera similar...
  };

  const [quantity, setQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState('');
  const [comments, setComments] = useState([
    'Este libro me hizo reflexionar mucho sobre la vida.',
    'Un clásico increíble, la historia es simplemente conmovedora.',
  ]);
  const [newComment, setNewComment] = useState('');
  const [cartItems, setCartItems] = useState(0); // Carrito

  const handleAddToCart = () => {
    if (quantity <= book.stock) {  // Verificar si hay suficiente stock
      setCartItems(cartItems + quantity); // Incrementar cantidad de artículos
      setCartMessage(`¡${quantity} copia(s) de "${book.title}" añadida(s) al carrito!`);
    } else {
      setCartMessage(`Lo siento, solo hay ${book.stock} copia(s) de "${book.title}" disponibles.`);
    }
  };

  const book = bookDetails[bookId];

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  if (!book) {
    return <div>Libro no encontrado</div>;
  }

  return (
    <>
      <Navbar cartItems={cartItems} />
      <div className="book-detail-page">
        <div className="book-detail-page__content">
          {/* Imagen del libro */}
          <div className="book-detail-page__image">
            <img src={book.imageUrl} alt={book.title} />
          </div>

          {/* Detalles del libro */}
          <div className="book-detail-page__info">
            <h1 className="book-detail-page__title">{book.title}</h1>
            <p className="book-detail-page__author"><strong>Autor:</strong> {book.author}</p>
            <p className="book-detail-page__description">
              <strong>Descripción:</strong> {book.description}
            </p>

            {/* Precio y descuento */}
            <div className="book-detail-page__price">
              <p><strong>Precio:</strong> <span className="original-price">{book.price}</span></p>
              {book.discountPrice && <p className="discount-price"><strong>¡Oferta Especial!</strong> {book.discountPrice}</p>}
            </div>

            {/* Calificación y reseña */}
            <p className="book-detail-page__rating"><strong>Calificación:</strong> {book.rating} ⭐</p>
            <p className="book-detail-page__review"><strong>Reseña:</strong> {book.review}</p>

            {/* Stock y cantidad */}
            <p className="book-detail-page__stock"><strong>Stock disponible:</strong> {book.stock} copia(s)</p>

            {/* Selector de cantidad y botón de añadir al carrito */}
            <div className="book-detail-page__add-to-cart">
              <label htmlFor="quantity">Cantidad:</label>
              <input 
                type="number" 
                id="quantity" 
                value={quantity} 
                min="1" 
                max={book.stock}  // Limitar cantidad a la disponibilidad en stock
                onChange={(e) => setQuantity(Number(e.target.value))} 
              />
              <button onClick={handleAddToCart} className="btn-add-to-cart">Añadir al carrito</button>
            </div>

            {/* Mensaje de confirmación de carrito */}
            {cartMessage && <p className="cart-message">{cartMessage}</p>}
          </div>
        </div>

        {/* Sección de comentarios */}
        <div className="book-detail-page__comments">
  <h2>Comentarios de los usuarios</h2>
  {comments.length === 0 ? (
    <p>No hay comentarios todavía.</p>
  ) : (
    comments.map((comment, index) => (
<div className="book-detail-page__comment">
  <div className="book-detail-page__comment-avatar">
    <img src={`https://i.pravatar.cc/50?img=${index + 1}`} alt="Avatar" className="comment-avatar-img" />
    <span className="comment-author-name">Usuario {index + 1}</span> {/* Agregar el nombre de usuario */}
  </div>
  <p className='book-detail-page__comment-coments'>{comment}</p>
</div>
    ))
  )}

  {/* Formulario para agregar un comentario */}
  <form onSubmit={handleCommentSubmit} className="book-detail-page__comment-form">
    <textarea
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}
      placeholder="Escribe tu comentario..."
      rows="4"
    />
    <button type="submit" className="btn-submit-comment">Enviar comentario</button>
  </form>
</div>

<Footer />

      </div>
    </>
  );
};

const Navbar = ({ cartItems }) => {
  return (
    <nav className="navbar">
      <Link to="/main" className="navbar__logo">LibroStore</Link>
      <div className="navbar__user">
        <div className="navbar__cart">
          <Link to="/cart" className="navbar__cart-link">
            <span className="navbar__cart-icon">🛒</span>
            {cartItems > 0 && <span className="navbar__cart-count">{cartItems}</span>}
          </Link>
        </div>
        <img src="https://i.pravatar.cc/50" alt="Usuario" className="navbar__user-avatar" />

      </div>
    </nav>
  );
};


export default BookDetailPage;
