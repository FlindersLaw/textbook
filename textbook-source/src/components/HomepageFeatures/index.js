import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Mark Ferraretto',
    headshot: '/img/headshot_mjf.jpg',
    description: (
      <>
        Mark is a Senior Lecturer in Law at Flinders University. Mark
        worked as an IT professional for over 20 years before returning
        to study law in 2011 and graduating in 2016.  Mark has taught
        law and technology topics at Flinders University since 2019.

        In his private time Mark enjoys running, cycling and is a
        private pilot.
      </>
    ),
  },
  {
    title: 'James Scheibner',
    headshot: '/img/headshot_jks.jpg',
    description: (
      <>
        James is a Lecturer in Law at Flinders University. He joined
        the College of Business, Government and Law in 2021 after an
        overseas appointment. James specialises in data privacy, copyright,
        patent and human rights law, with a particular focus on
        information technology and health technologies.
      </>
    ),
  },
];

function Feature({headshot, title, description}) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={useBaseUrl(headshot)} />
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
