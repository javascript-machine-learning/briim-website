import React from 'react';

import ArticleType from '../components/References/ArticleType';
import ArticleLink from '../components/References/ArticleLink';
import DateDisplay from '../components/References/DateDisplay';
import Level from '../components/References/Level';
import LearningType from '../components/References/LearningType';
import LearnLink from '../components/References/LearnLink';
import Language from '../components/References/Language';
import Power from '../components/References/Power';
import LibraryLink from '../components/References/LibraryLink';
import DemoLink from '../components/References/DemoLink';
import SourceLink from '../components/References/SourceLink';

import { BLOG_MAIN, BLOG_LIST } from './blog';
import { LEARN_MAIN, LEARN_LIST } from './learn';
import { LIBRARIES_MAIN, LIBRARIES_LIST } from './libraries';
import { PROJECTS_MAIN, PROJECTS_LIST } from './projects';

const blogReferences = [
  ({ values }) => <ArticleType articleType={values.articleType} />,
  ({ values }) => <ArticleLink articleLink={values.articleLink} />,
  ({ values }) => <DateDisplay date={values.releaseDate} />,
];

const learnReferences = [
  ({ values }) => <Level level={values.level} />,
  ({ values }) => <LearningType type={values.type} />,
  ({ values }) => <Language language={values.language} />,
  ({ values }) => <LearnLink learn={values.learn} linkType={values.linkType} />,
];

const librariesReferences = [
  ({ values }) => <Power power={values.power} />,
  ({ values }) => <LibraryLink library={values.library} />,
];

const projectsReferences = [
  ({ values }) => <DemoLink demo={values.demo} />,
  ({ values }) => <SourceLink source={values.source} />,
];

export const BLOG = { ...BLOG_MAIN, list: BLOG_LIST.map(item => ({ ...item, references: blogReferences })), };
export const LEARN = { ...LEARN_MAIN, list: LEARN_LIST.map(item => ({ ...item, references: learnReferences })), };
export const LIBRARIES = { ...LIBRARIES_MAIN, list: LIBRARIES_LIST.map(item => ({ ...item, references: librariesReferences })), };
export const PROJECTS = { ...PROJECTS_MAIN, list: PROJECTS_LIST.map(item => ({ ...item, references: projectsReferences })), };
