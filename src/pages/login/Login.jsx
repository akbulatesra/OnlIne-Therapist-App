import React from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from '../../components/loginForm/LoginForm';
import img from './LoginImg.svg';

const Login = () => {
  const { t } = useTranslation();
  return (
    <div className="font-poppins lg:px-32 lg:py-16 lg:pt-24 p-8 pt-16">
      <h1 className="text-3xl font-middle uppercase lg:mb-10 mb-4">
        {t('login2')}
      </h1>
      <div className="flex flex-col md:flex-row justify-center lg:gap-24 gap-8 lg:items-center mt-auto ">
        <LoginForm />
        <img
          className="lg:w-3/6 w-3/4 mx-auto lg:mx-0"
          src={img}
          alt="login Img"
        />
      </div>
    </div>
  );
};

export default Login;
