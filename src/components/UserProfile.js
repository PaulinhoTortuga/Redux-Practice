import { useSelector } from 'react-redux';
import { authActions } from '../store';

import classes from './UserProfile.module.css';

const UserProfile = () => {
  const auth = useSelector(state => state.auth.isAuthenticated);

  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
    </main>
  );
};

export default UserProfile;
