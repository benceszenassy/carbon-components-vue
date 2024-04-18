import {
  CvBreadcrumb,
  CvBreadcrumbItem,
  CvBreadcrumbSkeleton,
  CvBreadcrumbSkeletonItem,
} from '.';

import { CvLink } from '../CvLink';
import { CvOverflowMenu, CvOverflowMenuItem } from '../CvOverflowMenu';

import {
  sbCompPrefix,
  storyParametersObject,
} from '../../global/storybook-utils';

export default {
  title: `${sbCompPrefix}/CvBreadcrumb`,
  component: CvBreadcrumb,
  argTypes: {
    ariaLabel: {
      control: { type: 'text' },
      defaultValue: CvBreadcrumb.props.ariaLabel.default,
      table: {
        defaultValue: { summary: `"${CvBreadcrumb.props.ariaLabel.default}"` },
      },
    },
    noTrailingSlash: {
      control: 'boolean',
    },
  },
};

/**
 * DEFAULT STORY
 */

const defaultTemplate = `<cv-breadcrumb v-bind="args">
  <cv-breadcrumb-item>Breadcrumb 1</cv-breadcrumb-item>
  <cv-breadcrumb-item>Breadcrumb 2</cv-breadcrumb-item>
  <cv-breadcrumb-item>Breadcrumb 3</cv-breadcrumb-item>
</cv-breadcrumb>`;
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CvBreadcrumb, CvBreadcrumbItem },
  setup() {
    return { args };
  },
  template: defaultTemplate,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = storyParametersObject(
  Default.parameters,
  defaultTemplate,
  Default.args
);

/**
 * LINK STORY
 */

const linkTemplate = `<cv-breadcrumb v-bind="args">
  <cv-breadcrumb-item><cv-link href="/?path=/story/component-cvbreadcrumb--link#">Breadcrumb 1<cv-link></cv-breadcrumb-item>
  <cv-breadcrumb-item><cv-link href="/?path=/story/component-cvbreadcrumb--link#">Breadcrumb 2<cv-link></cv-breadcrumb-item>
  <cv-breadcrumb-item><cv-link href="/?path=/story/component-cvbreadcrumb--link#">Breadcrumb 3<cv-link></cv-breadcrumb-item>
</cv-breadcrumb>`;
const LinkTemplate = args => ({
  components: { CvBreadcrumb, CvBreadcrumbItem, CvLink },
  setup() {
    return { args };
  },
  template: linkTemplate,
});
export const Link = LinkTemplate.bind({});
Link.args = {};
Link.parameters = storyParametersObject(
  Link.parameters,
  linkTemplate,
  Link.args
);

/**
 * OVERFLOW STORY
 */

const overflowTemplate = `<cv-breadcrumb v-bind="args">
  <cv-breadcrumb-item><cv-link href="/?path=/story/component-cvbreadcrumb--overflow#">Breadcrumb 1<cv-link></cv-breadcrumb-item>
  <cv-breadcrumb-item>
    <cv-overflow-menu tip-alignment="end">
      <cv-overflow-menu-item><cv-link href="/?path=/story/component-cvbreadcrumb--overflow#">Breadcrumb 2<cv-link></cv-overflow-menu-item>
      <cv-overflow-menu-item disabled>Breadcrumb 3</cv-overflow-menu-item>
      <cv-overflow-menu-item><cv-link href="/?path=/story/component-cvbreadcrumb--overflow#">Breadcrumb 4<cv-link></cv-overflow-menu-item>
    </cv-overflow-menu>
  </cv-breadcrumb-item>
  <cv-breadcrumb-item><cv-link href="/?path=/story/component-cvbreadcrumb--overflow#">Breadcrumb 3<cv-link></cv-breadcrumb-item>
</cv-breadcrumb>`;
const OverflowTemplate = args => ({
  props: ['noTrailingSlash'],
  components: {
    CvBreadcrumb,
    CvBreadcrumbItem,
    CvOverflowMenu,
    CvOverflowMenuItem,
    CvLink,
  },
  setup() {
    return { args };
  },
  template: overflowTemplate,
});
export const Overflow = OverflowTemplate.bind({});
Overflow.args = {};
Overflow.parameters = storyParametersObject(
  Overflow.parameters,
  overflowTemplate,
  Overflow.args
);

/**
 * SKELETON STORY
 */

const skeletonTemplate = `<cv-breadcrumb-skeleton v-bind="args">
  <cv-breadcrumb-skeleton-item />
  <cv-breadcrumb-skeleton-item />
  <cv-breadcrumb-skeleton-item />
</cv-breadcrumb-skeleton>`;
const SkeletonTemplate = args => ({
  props: ['noTrailingSlash'],
  components: { CvBreadcrumbSkeleton, CvBreadcrumbSkeletonItem },
  setup() {
    return { args };
  },
  template: skeletonTemplate,
});

export const Skeleton = SkeletonTemplate.bind({});
Skeleton.args = {};
Skeleton.argTypes = {
  ariaLabel: { table: { disable: true } },
};
Skeleton.parameters = storyParametersObject(
  Skeleton.parameters,
  skeletonTemplate,
  Skeleton.args
);
