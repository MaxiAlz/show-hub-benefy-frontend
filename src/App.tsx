import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkUserSession } from './redux/slices/auth/authThunk';
import { AppDispatch, RootState } from './redux/store';
import RouteIndex from './routes/RouterIndex';
import Loader from './components/Loader';
import { AuthStatus } from './modules/Auth/types/authTypes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { pathname } = useLocation();
  const dispatch: AppDispatch = useDispatch();
  const { status } = useSelector((state: RootState) => state.auth);
  const verifySession = async () => {
    dispatch(checkUserSession());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    verifySession();
  }, [dispatch]);

  return status === AuthStatus.CHECKING ? (
    <Loader />
  ) : (
    <>
      <RouteIndex />
      {/* <ToastContainer /> */}
      {/* <Toaster /> */}
    </>
  );
}

export default App;
