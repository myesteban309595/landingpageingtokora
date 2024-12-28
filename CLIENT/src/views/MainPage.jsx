// src/components/MainPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css'; // Importamos el archivo CSS
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

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
      image: 'https://nidodelibros.com/wp-content/uploads/2024/02/9789877979015-.jpeg' 
    },
    { 
      id: 2, 
      title: 'Cien años de soledad', 
      subtitle: 'La novela que marcó una época',
      author: 'Gabriel García Márquez', 
      rating: 4.8, 
      pages: 448, 
      language: 'Español', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6eTagQR_2oRnIyVj-BHpM5paFFqY65lNsLP0VK3m7AfFMqov6sChVuEWqbitZDJKDxFs&usqp=CAU' 
    },
    { 
      id: 3, 
      title: '1984', 
      subtitle: 'La distopía más influyente',
      author: 'George Orwell', 
      rating: 4.7, 
      pages: 328, 
      language: 'Inglés', 
      image: 'https://images.cdn2.buscalibre.com/fit-in/360x360/85/64/8564963be6e21ee55d0bd7b532c3a9bb.jpg' 
    },
    { 
      id: 4, 
      title: 'Harry Potter y la piedra filosofal', 
      subtitle: 'El comienzo de una saga mágica',
      author: 'J.K. Rowling', 
      rating: 4.9, 
      pages: 309, 
      language: 'Español', 
      image: 'https://imagessl6.casadellibro.com/a/l/s5/06/9788419275806.webp' 
    },
    { 
      id: 5, 
      title: 'Matar a un ruiseñor', 
      subtitle: 'Un clásico de la justicia y la moral',
      author: 'Harper Lee', 
      rating: 4.8, 
      pages: 324, 
      language: 'Inglés', 
      image: 'https://images.gr-assets.com/books/1553383690l/2657.jpg' 
    },
    { 
      id: 6, 
      title: 'El gran Gatsby', 
      subtitle: 'Una historia de amor y ambición en los años 20',
      author: 'F. Scott Fitzgerald', 
      rating: 4.5, 
      pages: 218, 
      language: 'Inglés', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoetdOeIQqR4Aq7Blat5XTgGSve_qxNkzwCqXQDmKF7Qr_Nw8qvaWRbgQqz8lrsaV2alI&usqp=CAU' 
    },
    { 
      id: 7, 
      title: 'Orgullo y prejuicio', 
      subtitle: 'El amor en tiempos de la Inglaterra victoriana',
      author: 'Jane Austen', 
      rating: 4.7, 
      pages: 279, 
      language: 'Inglés', 
      image: 'https://images.gr-assets.com/books/1320399351l/1885.jpg' 
    },
    { 
      id: 8, 
      title: 'El Alquimista', 
      subtitle: 'Un viaje de autodescubrimiento y aventura',
      author: 'Paulo Coelho', 
      rating: 4.7, 
      pages: 208, 
      language: 'Español', 
      image: 'https://images.cdn3.buscalibre.com/fit-in/360x360/04/1f/041faab83743751d96b0b362733f33f4.jpg' 
    },
    { 
      id: 9, 
      title: 'La sombra del viento', 
      subtitle: 'El misterio de un libro olvidado',
      author: 'Carlos Ruiz Zafón', 
      rating: 4.8, 
      pages: 496, 
      language: 'Español', 
      image: 'https://images.cdn2.buscalibre.com/fit-in/360x360/4a/f8/4af862174ba709db62744f988c62e3b6.jpg' 
    },
    { 
      id: 10, 
      title: 'El código Da Vinci', 
      subtitle: 'Un thriller sobre el misterio de la religión',
      author: 'Dan Brown', 
      rating: 4.5, 
      pages: 689, 
      language: 'Inglés', 
      image: 'https://http2.mlstatic.com/D_NQ_NP_900443-MLU69466218611_052023-O.webp' 
    },
    { 
      id: 11, 
      title: 'Los hombres que no amaban a las mujeres', 
      subtitle: 'El primer libro de la saga Millennium',
      author: 'Stieg Larsson', 
      rating: 4.6, 
      pages: 465, 
      language: 'Español', 
      image: 'https://m.media-amazon.com/images/I/71XszQkOZwL._AC_UF894,1000_QL80_.jpg' 
    },
    { 
      id: 12, 
      title: 'Cumbres Borrascosas', 
      subtitle: 'Una tragedia de amor y desdicha',
      author: 'Emily Brontë', 
      rating: 4.4, 
      pages: 400, 
      language: 'Inglés', 
      image: 'https://images.cdn1.buscalibre.com/fit-in/360x360/85/16/8516d825f44f192528d673955df2bc99.jpg' 
    },
    { 
      id: 13, 
      title: 'El retrato de Dorian Gray', 
      subtitle: 'La decadencia de un hombre inmortal',
      author: 'Oscar Wilde', 
      rating: 4.6, 
      pages: 255, 
      language: 'Inglés', 
      image: 'https://images.cdn1.buscalibre.com/fit-in/360x360/fc/c4/fcc4472cce4e4322ba48a81b1a313bfc.jpg' 
    },
    { 
      id: 14, 
      title: 'Fahrenheit 451', 
      subtitle: 'Una distopía sobre la censura y el control social',
      author: 'Ray Bradbury', 
      rating: 4.5, 
      pages: 249, 
      language: 'Inglés', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZlh5OImpU6ruF8f0Zzhf9HcLClbS0mUYHjpAlAnnfMnFsSwPNBMStwCa12i8Bod3nKU&usqp=CAU' 
    },
    { 
      id: 15, 
      title: 'Crimen y castigo', 
      subtitle: 'La psicología de un crimen y sus consecuencias',
      author: 'Fyodor Dostoevsky', 
      rating: 4.8, 
      pages: 430, 
      language: 'Ruso', 
      image: 'https://images.cdn3.buscalibre.com/fit-in/520x520/1d/c7/1dc7efb8101e02d6196c79c2c2518346.jpg' 
    },
    { 
      id: 16, 
      title: 'El diario de Ana Frank', 
      subtitle: 'La historia de una niña judía durante la Segunda Guerra Mundial',
      author: 'Ana Frank', 
      rating: 4.9, 
      pages: 320, 
      language: 'Inglés', 
      image: 'https://m.media-amazon.com/images/I/61BSarKvI0L._AC_UF1000,1000_QL80_.jpg' 
    }
  ];
  

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Ordenar los libros por calificación para mostrar los más populares primero
  const sortedBooks = [...books].sort((a, b) => b.rating - a.rating);
  const popularBooks = sortedBooks.slice(0, 5); // Los 5 más populares

  return (
    <div className="main-page">
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
    {popularBooks.map((book) => (
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
      <BookList books={filteredBooks} onBookClick={(bookId) => navigate(`/book/${bookId}`)} />

      <footer className="main-page__footer">
  <div className="main-page__footer-content">
    <div className="main-page__footer-links">
      <ul>
        <li><a href="#about">Acerca de</a></li>
        <li><a href="#privacy">Política de privacidad</a></li>
        <li><a href="#terms">Términos y condiciones</a></li>
        <li><a href="#contact">Contáctanos</a></li>
      </ul>
    </div>

    <div className="main-page__footer-socials">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="Facebook" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-twitter-logo-vector-png-image_9183353.png" alt="Twitter" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" alt="Instagram" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="Instagram" />
      </a>
    </div>

    <div className="main-page__footer-info">
      <p>&copy; 2024 Tu Nombre. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>

    </div>
  );
};

export default MainPage;
