import useAsyncOnMount from './hooks/useAsyncOnMounts';
import loadServices from './services/load-services';
import AppRouter from './router/AppRouter';
import './theme/reset.css';

const App = () => {
  const isReady = useAsyncOnMount(loadServices);

  if (!isReady) {
    return null;
  }

  return <AppRouter />;
};

export default App;
