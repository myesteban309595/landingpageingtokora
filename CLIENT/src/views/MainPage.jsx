import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './MainPage.css';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartMessage, setCartMessage] = useState('');
  const [cartItemCount, setCartItemCount] = useState(0); // Número de productos diferentes en el carrito
  
  const navigate = useNavigate();

  useEffect(() => {
    // Recuperar los elementos del carrito desde sessionStorage
    const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    
    // Contar la cantidad de productos diferentes (libros diferentes)
    const uniqueItemsCount = new Set(storedCart.map(item => item.id)).size;
    setCartItemCount(uniqueItemsCount); // Actualizar el estado con el número de productos diferentes
  }, []); // Se ejecuta una vez cuando el componente se monta

  const handleAddToCart = (book) => {
    const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];

    // Verificar si el libro ya está en el carrito
    const existingItemIndex = storedCart.findIndex(item => item.id === book.id);

    if (existingItemIndex > -1) {
      // Si el libro ya está en el carrito, actualizar la cantidad
      storedCart[existingItemIndex].quantity += 1; // Puede ser cualquier cantidad que se agregue
    } else {
      // Si no está en el carrito, agregarlo
      storedCart.push({ ...book, quantity: 1 });
    }

    sessionStorage.setItem('cart', JSON.stringify(storedCart)); // Guardamos el carrito actualizado

    // Recalcular la cantidad de productos diferentes
    const uniqueItemsCount = new Set(storedCart.map(item => item.id)).size;
    setCartItemCount(uniqueItemsCount); // Actualizamos el contador de productos diferentes

    setCartMessage(`¡1 copia de "${book.title}" añadida al carrito!`);
  };

  // Lista de libros con más detalles (simulada)
  const books = [
    { 
      id: 1, 
      title: 'El Principito', 
      subtitle: 'Un cuento de hadas para adultos',
      author: 'Antoine de Saint-Exupéry', 
      rating: 4.9, 
      pages: 96, 
      language: 'Español', 
      image: 'https://nidodelibros.com/wp-content/uploads/2024/02/9789877979015-.jpeg',
      stock: 5,
    },
    { 
      id: 2, 
      title: 'Ana Frank', 
      subtitle: 'Diario de una joven',
      author: 'Ana Frank', 
      rating: 4.8, 
      pages: 450, 
      language: 'Español', 
      image: 'https://m.media-amazon.com/images/I/91u5F9SHBOL._AC_SY679_.jpg',
      stock: 10,
    },
    // Otros libros...
  ];

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-page">
      {/* Navbar principal */}
      <Navbar cartItemCount={cartItemCount} />
      {/* Navbar con los libros más populares */}
      <nav className="main-page__navbar">
        <div className="main-page__offer-text main-page__offer-text--left">
          <img 
            src="https://static.vecteezy.com/system/resources/thumbnails/008/880/263/small_2x/discount-50-percent-red-offer-in-3d-png.png" 
            alt="Icono de oferta" 
            className="main-page__offer-icon" 
          />
          Ofertas de fin de año
        </div>

        <div className="main-page__popular-books-list">
          {filteredBooks.map((book) => (
            <img
              key={book.id}
              className="main-page__popular-book-image"
              src={book.image}
              alt={book.title}
              onClick={() => navigate(`/book/${book.id}`)}
            />
          ))}
        </div>

        <div className="main-page__offer-text main-page__offer-text--right">
          Ofertas de fin de año
          <img 
            src="https://static.vecteezy.com/system/resources/thumbnails/008/880/263/small_2x/discount-50-percent-red-offer-in-3d-png.png" 
            alt="Icono de oferta" 
            className="main-page__offer-icon" 
          />
        </div>
      </nav>

      {/* Barra de búsqueda */}
      <SearchBar onSearch={handleSearch} />
      {/* Lista de libros */}
      <BookList 
        books={filteredBooks} 
        onBookClick={(bookId) => navigate(`/book/${bookId}`)} 
        handleAddToCart={handleAddToCart} // Aquí pasamos la referencia de la función
      />
      {/* Footer */}
      <Footer />
    </div>
  );
};

const Navbar = ({ cartItemCount }) => {
  return (
    <nav className="navbar">
      <Link to="/main" className="navbar__logo">LibroStore</Link>
      <div className="navbar__user">
        <div className="navbar__cart">
          <Link to="/cart" className="navbar__cart-link">
            <span className="navbar__cart-icon">🛒</span>
            {cartItemCount > 0 && <span className="navbar__cart-count">{cartItemCount}</span>}
          </Link>
        </div>
        <img src="https://i.pravatar.cc/50" alt="Usuario" className="navbar__user-avatar" />
      </div>
    </nav>
  );
};

export default MainPage;
