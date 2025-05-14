import { useNavigate } from 'react-router-dom';
import './Home.css';


function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="overlay">
        <div className="content">
          <h1 className="title">
            ALESKYGYM
          </h1>
          <p className="subtitle">¡Únete a nosotros!</p>
          

          <div className="nav-buttons">
  <button onClick={() => navigate('/UserForm')} className="main-button green">Registrar Usuario</button>
  <button onClick={() => navigate('/MembershipForm')} className="main-button green">Registrar Membresía</button>
  <button onClick={() => navigate('/UserList')} className="main-button">Lista de Usuarios</button>
  <button onClick={() => navigate('/MembresiaList')} className="main-button">Lista de Membresías</button>
</div>

        </div>
      </div>
    </div>
  );
}

export default Home;
