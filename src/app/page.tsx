import Form from '_components/Chat/Chat'
import Image from 'next/image'
import './globals.scss'

export default function Home() {
  return (
    <section className="layout">
      <div className="layout__bar">
        <Image
          className="layout__bar-image"
          src={'/boss.png'}
          alt={'BOSS'}
          width={169}
          height={91}
        />
      </div>
      <div className="container">
        <div className="row">
          <Form />
        </div>
      </div>{' '}
    </section>
  )
}
