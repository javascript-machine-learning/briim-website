import React from 'react';

import Section from '../components/Section';
import Aside from '../components/Aside';
import Button from '../components/Button';
import Centered from '../components/Centered';

const IndexPage = () => (
  <div>
    <Section>
      <Aside>
        <h3>
          Learn Machine Learning, but in JavaScript
        </h3>
        <p>
          Learn about AI and Data Science, combined with Machine Learning and the latest buzz around Deep Learning in JavaScript and in your browser.
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
          Find free Learning Material
        </h3>
        <p>
          Learn about AI and Data Science, combined with Machine Learning and the latest buzz around Deep Learning in JavaScript and in your browser.
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
          Learn about AI and Data Science, combined with Machine Learning and the latest buzz around Deep Learning in JavaScript and in your browser.
        </p>

        <Centered>
          <Button type="button" onClick={() => {}}>
            Soon
          </Button>
        </Centered>
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
          Experience Projects in Motion
        </h3>
        <p>
          Get motivated to learn Machine Learning as web developer.
        </p>

        <Centered>
          <Button type="button" onClick={() => {}}>
            Projects
          </Button>
        </Centered>
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
          Make it a Movement
        </h3>
        <p>
          Machine Learning is pushed from all other programming languages but JavaScript. Let's make it a movement rather than an effort by individuals.
        </p>
      </Aside>
      <Aside>
        <ul>
          <li>Join Slack for discussions.</li>
          <li>Join Facebook for sharing.</li>
          <li>Join Newsletter for updates.</li>
        </ul>
      </Aside>
    </Section>
  </div>
);

export default IndexPage;
