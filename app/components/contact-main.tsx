import { useTranslation } from 'react-i18next';

export let handle = { i18n: 'common' };

export function ContactMain() {
  let { t } = useTranslation();
  
  return (
    <div className="mr-4 hidden md:flex md:justify-between md:w-full">
      <h1 className='text-7xl text-black pt-32'>{t('greeting')}</h1>
    </div>
  );
}
