import React from 'react';

import Section from '../components/Section';
import Aside from '../components/Aside';
import Button from '../components/Button';
import Link from '../components/Link';
import TextCenter from '../components/TextCenter';
import { ImageFadeIn } from '../components/Image';

import neuralStyleTransfer from '../assets/neural-style-transfer.jpg';
import mnistNeuralNetwork from '../assets/mnist-neural-network.jpg';

const IndexPage = () => (
  <div>
    <Section>
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
        <TextCenter><p>Neural Style Transfer</p></TextCenter>
      </Aside>
    </Section>

    <Section>
      <Aside>
        <h3>
          Dig into the Learning Material
        </h3>
        <p>
          Explore curated learning material for Machine Learning in JavaScript. Contribute to it yourself by providing useful resources.
        </p>
      </Aside>
      <Aside>
        <p>
          Screenshot
        </p>
      </Aside>
    </Section>

    <Section>
      <Aside>
        <h3>
          Take the JavaScript in ML Course
        </h3>
        <p>
          Take the journey as JavaScript enthusiast or Web Developer to explore Machine Learning in the Browser with WebGL. Broaded your horizon or take a leap into another professsional field.
        </p>

        <Button type="button" disabled="true" onClick={() => {}}>
          [WIP: Early 2018]
        </Button>
      </Aside>
      <Aside>
        <h3>

        </h3>
        <ul>
          <li>Train neural networks in the browser</li>
          <li>Apply SVM, K-Means and PCA</li>
          <li>Implement shallow algorithms</li>
          <li>Build a recommender system</li>
          <li>Dive into subfields of AI (e.g. NLP)</li>
        </ul>
      </Aside>
    </Section>

    <Section>
      <Aside>
        <h3>
          Visualize Algorithms in Motion
        </h3>
        <p>
          Explore machine learning in JavaScript projects. Become curious and learn machine learning in JavaScript yourself.
        </p>

        <Button type="button" onClick={() => {}}>
          Projects
        </Button>
      </Aside>
      <Aside>
        <ImageFadeIn src={mnistNeuralNetwork} alt="mnist-neural-network" />
        <TextCenter><p>MNIST Digit Recognition</p></TextCenter>
      </Aside>
    </Section>

    <Section>
      <Aside>
        <h3>
          Create a Movement
        </h3>
        <p>
          Machine Learning is pushed from all several programming languages but JavaScript. Let's take it on a next level for web development and web developers as well. It's not an effort of an individual, but of a communtiy.
        </p>
      </Aside>
      <Aside>
        <ul>
          <li>Join Newsletter for <Link href="https://www.getrevue.co/profile/briim">Updates</Link></li>
          <li>Join Slack for <Link href="#">Discussions</Link></li>
          <li>Join Facebook for <Link href="https://www.facebook.com/groups/briim/">Sharing</Link></li>
        </ul>
      </Aside>
    </Section>
  </div>
);

export default IndexPage;
