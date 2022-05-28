
import {Navigate} from 'react-router-dom'
import {isAuthenticated } from '../Pages/Private/Auth/APIs'

const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
    const auth = isAuthenticated();
    return auth ? children : <Navigate to="/" replace />;
  };

export default PrivateWrapper