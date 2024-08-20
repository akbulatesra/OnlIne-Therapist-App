import { useTranslation } from 'react-i18next';
import img from './SignupImage.svg';
import SignupForm from '../../components/signupForm/SignupForm';

const Signup = () => {
  const { t } = useTranslation();
  return (
    <div className="flex w-full lg:flex-row lg:items-center justify-between flex-col-reverse max:h-middle lg:px-32 lg:py-16 p-8 pt-24">
      <img
        src={img}
        alt="signup"
        className="w-4/5 mx-auto lg:mx-0 pt-20 lg:w-3/6 lg:mr-4"
      />
      <section className="lg:w-3/5">
        <h1 className="font-normal lg:text-5xl text-3xl">{t('SIGNUP NOW')}</h1>
        <SignupForm />
      </section>
    </div>
  );
};
export default Signup;
