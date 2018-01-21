import React from 'react';
import Link from 'gatsby-link';
import meImg from '../img/me.jpg';
import {
  IconLink,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
} from '../components/SocialMedia';
import Container from '../components/Container';
import TextWrapper from '../components/TextWrapper';
import { Heading, Subheading } from '../components/Heading';
import { ExternalLink } from '../components/Link';
import P from '../components/Paragraph';

const IndexPage = () => (
  <Container>
    <div>
      <img src={meImg} />
    </div>
    <TextWrapper>
      <Heading>Hoi, ik ben Kees Kluskens</Heading>
      <Subheading>
        Ik ben software engineer met een focus op web applicaties.
      </Subheading>
      <P>
        Sinds januari 2018 heb ik met anderen het bedrijf{' '}
        <ExternalLink href="https://volst.nl/">Volst</ExternalLink> opgericht,
        waar ik nu full-time aan werk.
      </P>
      <P>
        Met Volst, maar ook in mijn vrije tijd, werk ik verder zoveel mogelijk
        aan{' '}
        <ExternalLink href="https://github.com/SpaceK33z/">
          open-source software
        </ExternalLink>.
      </P>
      <P>
        <IconLink href="https://twitter.com/keeskluskens">
          <Twitter />
        </IconLink>
        <IconLink href="http://nl.linkedin.com/in/keeskluskens">
          <LinkedIn />
        </IconLink>
        <IconLink href="https://www.facebook.com/kees.kluskens">
          <Facebook />
        </IconLink>
        <IconLink href="https://github.com/SpaceK33z/">
          <GitHub />
        </IconLink>
      </P>
    </TextWrapper>
  </Container>
);

export default IndexPage;
