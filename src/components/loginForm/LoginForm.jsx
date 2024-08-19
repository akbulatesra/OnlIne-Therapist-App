import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate, NavLink } from 'react-router-dom';
import LoginButtons from '../google&facebook/LoginButtons';
import { credentialsSigninHandler } from '../../features/user/userSlice';

const LoginForm = () => {
  const { t } = useTranslation();
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const user = useSelector((state) => state.user);
  const { error } = user;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const navigation = () => {
    navigate('/');
  };

  const handleLogin = () => {
    dispatch(
      credentialsSigninHandler({
        email: loginInfo.email,
        password: loginInfo.password,
        navigation,
      })
    );
  };

  const styles = {
    form: 'flex flex-col gap-8 shadow-xl justify-center items-center pb-20 py-20 mb-10 px-10',
    input: 'w-full h-auto border-2 border-gray-200 px-2 py-4',
    loginButton:
      'w-full py-2 rounded text-lg sm:text-base font-medium shadow-md bg-cyan-400',
    signupButton:
      'w-full py-2 rounded text-lg sm:text-base font-medium shadow-md border-2 border-cyan-400 text-cyan-400',
  };

  return (
    <div data-testid="loginForm" className="w-1/3 sm:w-10/12">
      <form className={`${styles.form}`}>
        <input
          className={`${styles.input} ${error ? 'border-red-300' : 'null'}`}
          data-testid="emailInput"
          type="text"
          placeholder={t('yourEmail')}
          name="email"
          value={loginInfo.email}
          onChange={handleChange}
        />
        <input
          className={`${styles.input} ${error ? 'border-red-300' : 'null'}`}
          data-testid="passwordInput"
          type="password"
          placeholder={t('YourPassword')}
          name="password"
          value={loginInfo.password}
          onChange={handleChange}
        />
        {error ? (
          <p data-testid="loginError" className=" text-red-400 -my-4">
            {t('wrong')}
          </p>
        ) : null}
        <div className="flex gap-8 w-full justify-center">
          <button
            data-testid="loginButton"
            className={`${styles.loginButton}`}
            type="button"
            onClick={handleLogin}
          >
            {t('login2')}
          </button>
          <button className={`${styles.signupButton}`} type="button">
            <NavLink to="/signup">{t('signup')}</NavLink>
          </button>
        </div>
      </form>
      <LoginButtons />
    </div>
  );
};

export default LoginForm;
