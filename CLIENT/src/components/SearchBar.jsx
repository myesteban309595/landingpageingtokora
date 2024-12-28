// src/components/SearchBar.jsx
import { useState } from 'react';
import './SearchBar.css'; // Asegúrate de importar el archivo CSS si es necesario

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Llama a la función de búsqueda desde el componente padre
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar por título"
        value={searchTerm}
        onChange={handleChange}
        className="search-bar__input" // Clase para aplicar los estilos
      />
    </div>
  );
};

export default SearchBar;
