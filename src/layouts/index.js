import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import FullPage from '../components/FullPage';
import './index.css';

const TemplateWrapper = ({ children }) => (
  <FullPage>
    <Helmet
      title="WebDuck"
      meta={[
        {
          name: 'description',
          content:
            'WebDuck is een in 2012 begonnen bedrijf gefocust op web-development, opgericht door Kees Kluskens.',
        },
        { name: 'keywords', content: 'webdevelopment, kees kluskens' },
      ]}
    />
    {children()}
  </FullPage>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
