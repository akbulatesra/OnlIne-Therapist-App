/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { FaRegUserCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { signoutHandler } from '../../features/user/userSlice';
import logoImg from './logo.svg';
import i18n from '../../translation/i18n';

const Navbar = ({ lang, setLang }) => {
  const { t } = useTranslation();
  const user = useSelector((state) => state.user);
  const { firestoreObject } = user;
  // eslint-disable-next-line no-unused-vars
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [userDropdown, setuserDropdown] = useState(false);
  const [burgerDropdown, setburgerDropdown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigation = () => {
    navigate('/');
  };

  const handleLogout = async () => {
    dispatch(signoutHandler({ navigation }));
  };
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  const location = useLocation();
  useEffect(() => {}, [location]);

  function handleLanChange(event) {
    setLang(event.target.value);
  }
  const styles = {
    li: 'md:text-lg hover:text-blue-300 text-base w-max ml-auto',
    aboutLi:
      'md:border-b-2 md:border-b-slate-300 hover:text-blue-300 border-0 ',
    burger: 'text-2xl cursor-pointer mr-6 md:hidden block',
    dropdownStyle:
      'md:absolute md:mt-6 bg-[#EAF8F9] md:px-2 md:text-center md:shadow px-0 mt-0 static visible shadow-none text-start ml-4 md:ml-0',
  };
  return (
    <div>
      <nav
        data-testid="currentUser"
        className="fixed w-full flex md:flex-row justify-center font-poppins bg-[#EAF8F9] md:items-center flex-col items-start shadow z-10 py-4"
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2 ml-5 items-center">
            <img className="h-[2.5rem]" src={logoImg} alt="Logo" />
            <h1 className="text-2xl font-medium">{t('healing')}</h1>
          </div>
          {!burgerDropdown ? (
            <GiHamburgerMenu
              onClick={() => setburgerDropdown(!burgerDropdown)}
              className={styles.burger}
            />
          ) : (
            <RxCross2
              onClick={() => setburgerDropdown(!burgerDropdown)}
              className={styles.burger}
            />
          )}
        </div>

        <ul
          className={`md:flex gap-6 items-center mr-8 transition-all duration-500 ease-in  ${
            burgerDropdown ? 'flex-col ml-auto text-end' : 'hidden'
          } `}
        >
          <li
            className={`${styles.li} ${
              location.pathname === '/' ? 'text-blue-300' : null
            } ml-auto`}
          >
            <NavLink to="/">{t('home')}</NavLink>
          </li>
          <li
            className={`${styles.li} ${
              location.pathname === '/blogs' ? ' text-blue-300' : null
            } ml-auto`}
          >
            <NavLink to="blogs/:1">{t('blogs')}</NavLink>
          </li>
          <li
            className="md:text-lg flex flex-col text-base"
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <div className="flex items-center justify-end relative">
              {t('about')} <MdOutlineArrowDropDown />
            </div>

            <ul
              className={`absolute sm:right-6 lg:right-auto md:mt-6 bg-[#EAF8F9] md:px-2 md:text-center md:shadow px-0 mt-0 shadow-none text-end ml-4 md:ml-0 ${
                aboutDropdown ? 'block' : 'hidden'
              }`}
            >
              <li
                className={`${styles.aboutLi} ${
                  location.pathname === '/about/overview'
                    ? 'text-blue-300'
                    : null
                } `}
              >
                <NavLink to="about/overview">{t('Overview')}</NavLink>
              </li>
              <li
                className={`${styles.aboutLi} ${
                  location.pathname === '/about/team' ? 'text-blue-300' : null
                } `}
              >
                <NavLink to="about/team">{t('meat')}</NavLink>
              </li>
              <li
                className={`hover:text-blue-300 ${
                  location.pathname === '/about/careers'
                    ? 'text-blue-300'
                    : null
                }`}
              >
                <NavLink to="about/careers">{t('Careers')}</NavLink>
              </li>
            </ul>
          </li>
          <li
            className={`${styles.li} ${
              location.pathname === '/contact' ? 'text-blue-300' : null
            }`}
          >
            <NavLink to="contact">{t('contact')}</NavLink>
          </li>
          <li className={styles.li}>
            <select className="bg-[#EAF8F9]" onChange={handleLanChange}>
              <option value="En">En</option>
              <option value="Tr">Tr</option>
              <option value="Ar">Ar</option>
            </select>
          </li>
          {firestoreObject ? (
            <li
              className="flex flex-col items-center text-lg gap-1 sm:text-base sm:items-start"
              onMouseEnter={() => setuserDropdown(true)}
              onMouseLeave={() => setuserDropdown(false)}
            >
              <div className="flex items-center gap-2 relative ml-auto">
                {firestoreObject.name} <FaRegUserCircle />
              </div>
              <ul
                className={`absolute right-6 w-max md:mt-6 bg-[#EAF8F9] md:px-2 md:text-center md:shadow px-0 mt-0 shadow-none text-end ml-4 md:ml-0 ${
                  userDropdown ? 'block' : 'hidden'
                }`}
              >
                <li className={styles.aboutLi}>
                  <NavLink to="Booking">{t('Booking Info')}</NavLink>
                </li>

                <li className={styles.aboutLi}>
                  <NavLink to="buyTicketsPage">{t('BUY TICKETS')}</NavLink>
                </li>
                <li className={styles.aboutLi}>
                  {firestoreObject.license ? (
                    <NavLink to="CounselorEditInfo">{t('View Info')}</NavLink>
                  ) : (
                    <NavLink to="editPatientProfile">{t('editInfo')}</NavLink>
                  )}
                </li>
                <li>
                  <button
                    className=" hover:text-red-700"
                    type="button"
                    onClick={handleLogout}
                  >
                    {t('logout')}
                  </button>
                </li>
              </ul>
            </li>
          ) : (
            <li className="md:text-lg bg-cyan-400 py-1 px-3 rounded text-base w-max">
              <NavLink to="login">{t('login')}</NavLink>
            </li>
          )}
        </ul>
      </nav>
      <br />
    </div>
  );
};

export default Navbar;
