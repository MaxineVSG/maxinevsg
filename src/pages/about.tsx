import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";
import work from '../components/WorkExperience';
import education from '../components/EducationExperience';
import skills from '../components/skills';

export default function About() {
  return (
    <Layout>
      <Head>
        <script src="bower_components/aos/dist/aos.js" />
        <title>{siteTitle} - About Me</title>
      </Head>
      <section className="boxed boxed--large boxed--highlight container slide-in bounce">
        <h1 className="text-heading">Summary</h1>
        <div>
          Experienced UX Designer & Front End Developer with a demonstrated history of working in the information technology industry. Accomplished in front-end technologies including HTML, CSS, and JavaScript as well as design programs, such as Figma & Adobe Creative, with a hobby for photography. Strong communication skills and great at working with back-end developers, product mangers and clients to achieve desired outcomes.
        </div>
      </section>
      <section className="section--highlight__pink">
        <article className="container my-none py-large">
          <h1 className="text-heading pb-small slide-up">Skills</h1>
          <div className="flex flex--space-between">
            {skills.images.map((image) => {
              return <Image
                src={image.link}
                height={150}
                width={100}
                alt={image.alt}
              />
            })}
          </div>
          <div className="flex flex--space-between mt">
            {skills.more.map((skill) => {
              return <div className="boxed">
                <span>{skill}</span>
              </div>
            })}
          </div>
        </article>
      </section>
      <section className="section--highlight">
        <article className="container my-none py">
          <h1 className="text-heading pb-tiny slide-up">My Work</h1>
          {work.map((job) => {
            return <div key={job.name} className="py slide-up">
              <h4 className="about--title">{job.title}</h4>
              <div className="about--details">
                <Link href={job.worklink} target="_blank">{job.name}</Link> <span className="text-light ml-tiny">{job.year}</span>
              </div>
              <div className="about--desc">{job.desc}</div>
              {job.companies && "Some examples are:"}
              {job.companies && job.companies.map((company) => {
                  return <div key={company.name} className="section--highlight my-tiny p-tiny">
                    <Link href={company.link} target="_blank">{company.name}</Link> <em>- {company.desc}</em>
                  </div>
              })}
            </div>
          })}
        </article>
      </section>
      <section className="container my">
        <h1 className="text-heading pb" data-aos="fade-up">Education</h1>
        <div className="flex">
          {education.map((item) => {
            return <div key={item.name} className="py slide-up boxed boxed--large boxed--highlight mx-small flex flex--column text-center flex--center one-half">
              {item.desc}
              <h4 className="flex flex--grow my flex--center">{item.title}</h4>
              <div>
                <Link href={item.worklink} target="_blank">{item.name}</Link> <span className="text-light ml-tiny">{item.year}</span>
              </div>
            </div>
          })}
        </div>
      </section>
    </Layout>
  );
}
