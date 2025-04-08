import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <div className="bg-gray-900 p-4 w-64 min-h-screen">
      <ul className="space-y-4">
        <li>
          <Link to="/" className="hover:text-gray-900 text-4xl font-bold">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-900 text-4xl font-bold">About</Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-gray-900 text-4xl font-bold">Projects</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-900 text-4xl font-bold">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
