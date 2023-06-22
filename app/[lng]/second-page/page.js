import Link from 'next/link'

export default function Page({ params: { lng } }) {
  return (
    <>
      <h1>{t('hi-from-second-page')}</h1>
      <Link href={`/${lng}`}>
        back
      </Link>
    </>
  )
}