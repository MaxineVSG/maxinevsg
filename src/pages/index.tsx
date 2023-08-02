import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'
import Image from 'next/image';
import IllustratedMe from "../components/IllustratedMe";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex--space-between container">
        <section className="flex flex--column flex--start flex--justify-center intro">
          <p className="intro--hi color--light">Hi, my name is Maxine<strong className="color--highlight">.</strong></p>
          <div className="intro--content">
            <div className="intro--content__container color--dark">
              <p className="intro--content__container__text">
                I'm a 
              </p>
              <ul className="intro--content__container__list">
                <li className="intro--content__container__list__item">designer</li>
                <li className="intro--content__container__list__item">developer</li>
                <li className="intro--content__container__list__item">photographer</li>
                <li className="intro--content__container__list__item">creative</li>
              </ul>
            </div>
          </div>
        </section>
        <IllustratedMe view="desktop" height="400" width="400"/>
      </section>
      <IllustratedMe view="mobile" height="400" width="400" classes="one-whole"/>
    </Layout>
  )
}