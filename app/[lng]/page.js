import Link from 'next/link'
import { useTranslation } from '../i18n'

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  return (
    <>
      <h1 className='text-4xl text-center text-blue-500 font-bold'>{t('title')}</h1>
      <Link href={`/${lng}/my-second-page`}  className="text-blue-500 hover:text-blue-800 transition duration-200 ease-in-out">
        {t('to-second-page')}
      </Link>
    </>
  )
}