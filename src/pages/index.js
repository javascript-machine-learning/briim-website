import React from 'react';

import Section from '../components/Section';
import Aside from '../components/Aside';
import Button from '../components/Button';
import Link from '../components/Link';
import { ImageFadeIn } from '../components/Image';

import neuralStyleTransfer from '../assets/neural-style-transfer.jpg';

const IndexPage = () => (
  <div>
    <Section>
      <Aside>
        <h3>
          Learn Machine Learning, but in JavaScript
        </h3>
        <p>
          Learn about Artificial Intelligence and Data Science, governed by Machine Learning and Deep Learning. Take it right to your browser with JavaScript and WebGL.
        </p>
      </Aside>
      <Aside>
        <ImageFadeIn src={neuralStyleTransfer} alt="neural-style-transfer" />
      </Aside>
    </Section>

    <Section>
      <Aside>
        <h3>
          Dig into the Learning Material
        </h3>
        <p>
          Explore curated and free learning material for Machine Learning in JavaScript curated
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
          Explore in Motion
        </h3>
        <p>
          Get motivated to learn Machine Learning as web developer.
        </p>

        <Button type="button" onClick={() => {}}>
          Projects
        </Button>
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
          Learn about AI and Data Science, combined with Machine Learning and the latest buzz around Deep Learning in JavaScript and in your browser.
        </p>

        <Button type="button" disabled="true" onClick={() => {}}>
          Soon [Early 2018]
        </Button>
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
