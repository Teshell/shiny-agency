import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/freelances">Freelances</Link>
      <Link to="/survey/1">Questionnaire</Link>
    </nav>
  );
};

export default Header;
