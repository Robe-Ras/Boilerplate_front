import { useSetAtom } from 'jotai';
import { userAtom } from '../app/atoms';

const noUser = null; // Define noUser

const Logout = () => {
  const setUser = useSetAtom(userAtom);

  const handleLogout = () => {
    setUser(noUser);
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
