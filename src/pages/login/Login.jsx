import React from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from '../../components/loginForm/LoginForm';
import img from './LoginImg.svg';

const Login = () => {
  const { t } = useTranslation();
  return (
    <div className="font-poppins px-32 pb-16 pt-8">
      <h1 className="text-3xl font-middle uppercase mb-10">{t('login2')}</h1>
      <div className="flex justify-center gap-24 items-center mt-auto ">
        <LoginForm />
        <img className="w-3/6" src={img} alt="login Img" />
      </div>
    </div>
  );
};

export default Login;
