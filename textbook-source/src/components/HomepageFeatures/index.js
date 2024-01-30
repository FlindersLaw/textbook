import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Mark Ferraretto',
    postnominals: 'BSc (Math Sc), LLB, GDLP',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    headshot: '/img/headshot_mjf.jpg',
    description: (
      <>
        Mark is a Senior Lecturer in Law at Flinders University. Mark
        worked as an IT professional for over 20 years before returning
        to study law in 2011 and graduating in 2016.  Mark has taught
        law and technology topics at Flidners University since 2019.

        In his private time Mark enjoys running, cycling and is a
        private pilot.
      </>
    ),
  },
  {
    title: 'Dr James Scheibner',
    postnominals: 'LLB GDLP PhD',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    headshot: '/img/headshot_jks.jpg',
    description: (
      <>
        This layout comes from the Docusaurus default classic theme.
        It looks nice and I think we should keep this layout but with
        relevant text in each of these parts.
      </>
    ),
  },
];

function Feature({headshot, title, description}) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={headshot} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
      </div>
      <div className="text--justified padding-horiz--md">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
