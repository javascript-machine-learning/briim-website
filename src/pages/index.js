import React from 'react';

import Footer from '../components/Footer';
import Page from '../components/Page';
import Landing from '../components/Landing';
import Section from '../components/Section';
import Aside from '../components/Aside';
import Caption from '../components/Caption';
import Button from '../components/Button';
import { Anchor } from '../components/Link';
import { ImageFadeIn } from '../components/Image';
import { ButtonButAnchor } from '../components/Button';

import neuralStyleTransfer from '../assets/neural-style-transfer.jpg';
import mnistNeuralNetwork from '../assets/mnist-neural-network.jpg';

const IndexPage = ({ header, subheader }) => (
  <Page>
    <Landing
      header={'BRIIM'}
      subheader={'A Machine Learning in JavaScript Movement'}
    />

    <div>
      <Section isAlternating={true}>
        <Aside>
          <h3>
            Learn Machine Learning. But in JavaScript.
          </h3>
          <p>
            Learn about artificial intelligence and data science, two fields which are governed by machine learning, in JavaScript. Take it right to your browser with WebGL. BRIIM is a movement to enable JavaScript enthusiasts and web developers in machine learning.
          </p>
        </Aside>
        <Aside>
          <ImageFadeIn src={neuralStyleTransfer} alt="neural-style-transfer" />
          <Caption>Neural Style Transfer</Caption>
        </Aside>
      </Section>

      <Section isAlternating={true}>
        <Aside>
          <h3>
            Dig into the Learning Material
          </h3>
          <p>
            Explore curated learning material for machine learning in JavaScript. Contribute to it yourself by providing useful resources.
          </p>

          <ButtonButAnchor href={'/learn'}>
            Learn
          </ButtonButAnchor>
        </Aside>
        <Aside>
          <p>
            Screenshot
          </p>
        </Aside>
      </Section>

      <Section isAlternating={true}>
        <Aside>
          <h3>
            Become Productive
          </h3>
          <p>
            Work with machine learning in JavaScript libraries to become efficient and productive. The recent ones are running with WebGL in the browser to give your algorithms the required power.
          </p>

          <ButtonButAnchor href={'/libraries'}>
            Libraries
          </ButtonButAnchor>
        </Aside>

        <Aside>
          <h3>
            Probe Yourself
          </h3>
          <p>
            Challenges are waiting for you at the interactive machine learning in JavaScript playground. Exercise your skills on a recurring basis in applied machine learning in JavaScript.
          </p>

          <ButtonButAnchor href={'https://www.getrevue.co/profile/briim'}>
            [WIP: 2018]
          </ButtonButAnchor>
        </Aside>
      </Section>

      <Section isAlternating={true}>
        <Aside>
          <h3>
            Visualize Algorithms in Motion
          </h3>
          <p>
            Explore machine learning in JavaScript projects! Experience neural networks, support vector machines, and neuroevolution in your browser. Become curious and learn about machine learning in JavaScript too.
          </p>

          <ButtonButAnchor href={'/projects'}>
            Projects
          </ButtonButAnchor>
        </Aside>
        <Aside>
          <ImageFadeIn src={mnistNeuralNetwork} alt="mnist-neural-network" />
          <Caption>MNIST Digit Recognition</Caption>
        </Aside>
      </Section>

      <Section isAlternating={true}>
        <Aside>
          <h3>
            Create a Movement
          </h3>
          <p>
            Machine learning is pushed forward from several programming languages but JavaScript. Let's take it on a next level for web developers and JavaScript enthusiasts as well. It's not an effort of an individual but of a community.
          </p>
        </Aside>
        <Aside>
          <ul>
            <li>Join our Newsletter for <Anchor href="https://www.getrevue.co/profile/briim">Updates</Anchor></li>
            <li>Join our Slack for <Anchor href="http://slack.bri.im/">Discussions</Anchor></li>
            <li>Join us for <Anchor href="https://github.com/javascript-machine-learning">Contributions</Anchor></li>
          </ul>
        </Aside>
      </Section>
    </div>

    <Footer />
  </Page>
);

export default IndexPage;
