import { config } from 'config'; // eslint-disable-line
import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import Tags from '../../src/components/Tags';

const projects = [
  {
    name: 'Khanh Quoc Press',
    tags: ['inprogress', 'gatsby', 'react', 'node'],
    imageUrl: './images/project1.jpg',
    description: 'A website (this website) to aggregate all my stuff',
    actions: [
      { message: 'Explore project\'s information', url: 'https://khanhquoc.press/about/#about-khanh-quoc-press' },
      { message: 'See the code', url: 'https://github.com/bkdev98/bkdev98.github.io' },
    ],
  }, {
    name: 'Ipeedy',
    tags: ['reactnative', 'graphql', 'redux', 'node'],
    imageUrl: './images/project2.jpg',
    description: 'Market for the people, by the people',
    actions: [
      { message: 'Go to project\'s website', url: 'https://ipeedy.com' },
      { message: 'Read the blog post on how Ipeedy was built', url: 'https://khanhquoc.press/blog/thuc-hien-du-an-full-stack-dau-tien/' },
      { message: 'See the code', url: 'https://github.com/ipeedy/ipeedy-mobile' },
    ],
  }, {
    name: 'Innoteq CI',
    tags: ['inprogress', 'electron', 'react', 'node'],
    imageUrl: './images/project5.jpg',
    description: 'A continuous integration, delivery and deployment tool for internal use at Innoteq company.',
    actions: [
      { message: 'Available soon', url: '#' },
    ],
  }, {
    name: 'React Native Boilerplate',
    tags: ['reactnative', 'redux', 'styledcomponents'],
    imageUrl: './images/project3.jpg',
    description: 'A React Native boilerplate with Expo, Redux, React Navigation, Styled Components and some 💕 included.',
    actions: [
      { message: 'See the code', url: 'https://github.com/ipeedy/react-native-boilerplate' },
    ],
  }, {
    name: 'SU...LE*',
    tags: ['inprogress', 'electron', 'react', 'redux', 'graphql'],
    imageUrl: './images/project4.jpg',
    description: 'Enterprise solution for chain store management.',
    actions: [
      { message: 'Another picture from Instagram', url: 'https://www.instagram.com/p/BjLIf5-Hox6/' },
      { message: 'Available soon', url: '#' },
    ],
  },
];

const Project = ({ project }) => (
  <div style={{ marginTop: 40 }}>
    <h4 style={{ marginBottom: 5 }}>{project.name}</h4>
    <Tags tags={project.tags} />
    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 10 }}>
      <div style={{ maxWidth: 200, marginBottom: 7, marginRight: 24 }}>
        <img src={project.imageUrl} alt={project.name} style={{ borderRadius: 7, width: '100%', maxWidth: '100%' }} />
      </div>
      <div style={{ flex: '1 0 350px' }}>
        <p style={{ paddingBottom: 0 }}>{project.description}</p>
        {project.actions && project.actions.map(action => (
          <div key={action.url}>
            {!action.url.includes('khanhquoc.press')
            ? <a
              href={action.url}
              target={action.url.includes('#') ? '_self' : '_blank'}
              rel='noopener noreferrer'
              style={{ marginTop: 7 }}
            >
              {action.message}
            </a>
            : <Link style={{ marginTop: 7 }} to={action.url}>
              {action.message}
            </Link>}
            <br />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function Portfolio() {
  return (
    <section className='content'>
      <Helmet title='Portfolio' />
      <header>
        <h2>My Projects</h2>
      </header>
      {projects.map(project => <Project key={project.name} project={project} />)}
    </section>
  );
}
