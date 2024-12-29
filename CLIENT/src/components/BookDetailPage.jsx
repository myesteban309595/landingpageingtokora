import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BookDetailPage.css';
import Footer from '../components/Footer';
import useCart from '../components/useCartCustomHook'; // Importar el custom hook

const BookDetailPage = () => {
  const { bookId } = useParams();
  const { cartItems, updateCart } = useCart(); // Usar el hook aquí

  const bookDetails = {
    'El Principito': {
      title: 'El Principito',
      author: 'Antoine de Saint-Exupéry',
      description: 'Un niño conoce a un aviador en medio del desierto, comenzando una serie de reflexiones sobre la vida, el amor y la amistad...',
      rating: 4.9,
      price: '$15.99',
      discountPrice: '$12.99',
      review: 'Una obra maestra de la literatura...',
      imageUrl: 'https://nidodelibros.com/wp-content/uploads/2024/02/9789877979015-.jpeg',
      stock: 5,
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
      stock: 10,
    },
    '1984': {
      title: '1984',
      author: 'George Orwell',
      description: 'La distopía más influyente sobre el control totalitario, la vigilancia y la manipulación de la verdad.',
      rating: 4.7,
      price: '$14.99',
      discountPrice: '$12.49',
      review: 'Una novela que sigue siendo un referente en el análisis social y político...',
      imageUrl: 'https://images.cdn2.buscalibre.com/fit-in/360x360/85/64/8564963be6e21ee55d0bd7b532c3a9bb.jpg',
      stock: 10,
    },
    'Harry Potter y la piedra filosofal': {
      title: 'Harry Potter y la piedra filosofal',
      author: 'J.K. Rowling',
      description: 'El comienzo de la saga mágica sobre un niño huérfano que descubre que es un mago.',
      rating: 4.9,
      price: '$18.99',
      discountPrice: '$15.99',
      review: 'Una historia mágica llena de aventuras y personajes inolvidables...',
      imageUrl: 'https://imagessl6.casadellibro.com/a/l/s5/06/9788419275806.webp',
      stock: 10,
    },
    'Matar a un ruiseñor': {
      title: 'Matar a un ruiseñor',
      author: 'Harper Lee',
      description: 'Una reflexión sobre la justicia, la moral y la humanidad en el sur de los Estados Unidos.',
      rating: 4.8,
      price: '$17.99',
      discountPrice: '$14.99',
      review: 'Una obra sobre el racismo y la lucha por la equidad...',
      imageUrl: 'https://images.gr-assets.com/books/1553383690l/2657.jpg',
      stock: 10,
    },
    'El gran Gatsby': {
      title: 'El gran Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'Una historia de amor y ambición en los años 20, en el contexto de la alta sociedad estadounidense.',
      rating: 4.5,
      price: '$16.99',
      discountPrice: '$13.99',
      review: 'Un clásico sobre la ilusión del sueño americano...',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoetdOeIQqR4Aq7Blat5XTgGSve_qxNkzwCqXQDmKF7Qr_Nw8qvaWRbgQqz8lrsaV2alI&usqp=CAU',
      stock: 10,
    },
    'Orgullo y prejuicio': {
      title: 'Orgullo y prejuicio',
      author: 'Jane Austen',
      description: 'La historia de Elizabeth Bennet y su relación con el arrogante pero encantador Sr. Darcy.',
      rating: 4.7,
      price: '$13.99',
      discountPrice: '$11.99',
      review: 'Una novela clásica sobre las relaciones humanas y el orgullo...',
      imageUrl: 'https://images.gr-assets.com/books/1320399351l/1885.jpg',
      stock: 10,
    },
    'El Alquimista': {
      title: 'El Alquimista',
      author: 'Paulo Coelho',
      description: 'Un joven pastor emprende un viaje para encontrar un tesoro, en busca de su leyenda personal.',
      rating: 4.7,
      price: '$14.99',
      discountPrice: '$12.99',
      review: 'Una fábula sobre la importancia de seguir nuestros sueños...',
      imageUrl: 'https://images.cdn3.buscalibre.com/fit-in/360x360/04/1f/041faab83743751d96b0b362733f33f4.jpg',
      stock: 10,
    },
    'La sombra del viento': {
      title: 'La sombra del viento',
      author: 'Carlos Ruiz Zafón',
      description: 'Un joven encuentra un libro en el cementerio de los libros olvidados, lo que lo lleva a descubrir secretos oscuros.',
      rating: 4.8,
      price: '$17.99',
      discountPrice: '$15.99',
      review: 'Un relato misterioso y lleno de giros inesperados...',
      imageUrl: 'https://images.cdn2.buscalibre.com/fit-in/360x360/4a/f8/4af862174ba709db62744f988c62e3b6.jpg',
      stock: 10,
    },
    'El código Da Vinci': {
      title: 'El código Da Vinci',
      author: 'Dan Brown',
      description: 'Un thriller que mezcla arte, religión y misterio sobre un código secreto escondido en famosas obras de arte.',
      rating: 4.5,
      price: '$18.99',
      discountPrice: '$16.99',
      review: 'Un relato intrigante y emocionante...',
      imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_900443-MLU69466218611_052023-O.webp',
      stock: 10,
    },
    'Los hombres que no amaban a las mujeres': {
      title: 'Los hombres que no amaban a las mujeres',
      author: 'Stieg Larsson',
      description: 'El primer libro de la saga Millennium, un thriller sobre investigación y secretos familiares.',
      rating: 4.6,
      price: '$17.99',
      discountPrice: '$14.99',
      review: 'Un thriller apasionante que mantiene al lector al borde de su asiento...',
      imageUrl: 'https://m.media-amazon.com/images/I/71XszQkOZwL._AC_UF894,1000_QL80_.jpg',
      stock: 10,
    },
    'Cumbres Borrascosas': {
      title: 'Cumbres Borrascosas',
      author: 'Emily Brontë',
      description: 'Una historia trágica de amor y venganza entre dos familias en la Inglaterra del siglo XIX.',
      rating: 4.4,
      price: '$15.99',
      discountPrice: '$12.99',
      review: 'Una obra compleja sobre pasiones destructivas...',
      imageUrl: 'https://images.cdn1.buscalibre.com/fit-in/360x360/85/16/8516d825f44f192528d673955df2bc99.jpg',
      stock: 10,
    },
    'El retrato de Dorian Gray': {
      title: 'El retrato de Dorian Gray',
      author: 'Oscar Wilde',
      description: 'La historia de un hombre cuya juventud y belleza se mantienen intactas mientras su retrato envejece.',
      rating: 4.6,
      price: '$16.99',
      discountPrice: '$14.99',
      review: 'Un relato sobre la decadencia moral y la obsesión con la belleza...',
      imageUrl: 'https://images.cdn1.buscalibre.com/fit-in/360x360/fc/c4/fcc4472cce4e4322ba48a81b1a313bfc.jpg',
      stock: 10,
    },
    'Fahrenheit 451': {
      title: 'Fahrenheit 451',
      author: 'Ray Bradbury',
      description: 'Una distopía sobre un futuro donde los libros están prohibidos y los bomberos queman toda la literatura.',
      rating: 4.5,
      price: '$15.99',
      discountPrice: '$12.99',
      review: 'Una novela que reflexiona sobre la censura y la libertad de expresión...',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZlh5OImpU6ruF8f0Zzhf9HcLClbS0mUYHjpAlAnnfMnFsSwPNBMStwCa12i8Bod3nKU&usqp=CAU',
      stock: 10,
    },
    'Crimen y castigo': {
      title: 'Crimen y castigo',
      author: 'Fyodor Dostoevsky',
      description: 'La historia de un joven estudiante que comete un crimen y lidia con las consecuencias morales y psicológicas.',
      rating: 4.8,
      price: '$19.99',
      discountPrice: '$17.99',
      review: 'Una profunda exploración de la moralidad y la psicología humana...',
      imageUrl: 'https://images.cdn3.buscalibre.com/fit-in/520x520/1d/c7/1dc7efb8101e02d6196c79c2c2518346.jpg',
      stock: 10,
    },
    'El diario de Ana Frank': {
      title: 'El diario de Ana Frank',
      author: 'Ana Frank',
      description: 'El testimonio de una niña judía que vivió escondida durante la Segunda Guerra Mundial.',
      rating: 4.9,
      price: '$16.99',
      discountPrice: '$14.99',
      review: 'Una obra conmovedora sobre el sufrimiento humano durante el Holocausto...',
      imageUrl: 'https://m.media-amazon.com/images/I/61BSarKvI0L._AC_UF1000,1000_QL80_.jpg',
      stock: 10,
    }
  };

  const [quantity, setQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState('');
  const [comments, setComments] = useState([
    'Este libro me hizo reflexionar mucho sobre la vida.',
    'Un clásico increíble, la historia es simplemente conmovedora.',
  ]);
  const [newComment, setNewComment] = useState('');

  const handleAddToCart = () => {
    const book = bookDetails[bookId];

    if (quantity <= book.stock) {  // Verificar si hay suficiente stock
      const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
  
      const existingItemIndex = storedCart.findIndex(item => item.id === bookId);
  
      if (existingItemIndex > -1) {
        storedCart[existingItemIndex].quantity += quantity; // Actualizar cantidad
      } else {
        storedCart.push({ 
          id: bookId, 
          title: book.title, 
          price: book.discountPrice || book.price,
          quantity: quantity, 
          image: book.imageUrl 
        });
      }
  
      sessionStorage.setItem('cart', JSON.stringify(storedCart));

      updateCart(); // Llamamos a `updateCart` para actualizar el contador de elementos únicos en el carrito
  
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
                max={book.stock} 
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
              <div className="book-detail-page__comment" key={index}>
                <div className="book-detail-page__comment-avatar">
                  <img src={`https://i.pravatar.cc/50?img=${index + 1}`} alt="Avatar" className="comment-avatar-img" />
                  <span className="comment-author-name">Usuario {index + 1}</span> 
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
      </div>
      <Footer />
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
