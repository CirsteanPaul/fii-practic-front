import autoLogin from './auth-service';

const loadServices = async (): Promise<void> => {
  const services = [autoLogin()];
};

export default loadServices;
