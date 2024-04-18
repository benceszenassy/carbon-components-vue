/**
 * NOTE: This test needs to be converted to use the new library `@testing-library/vue`. See CvCheckbox test for example.
 */
import { shallowMount } from '@vue/test-utils';
import { render } from '@testing-library/vue';
import { carbonPrefix } from '../../../global/settings';
import { CvAspectRatio, CvAspectRatioConsts } from '..';

describe('CvAspectRatio', () => {
  it('default', () => {
    const wrapper = shallowMount(CvAspectRatio);

    const divTag = wrapper.find('div');
    expect(new Set(divTag.classes())).toEqual(
      new Set([
        `${carbonPrefix}--aspect-ratio`,
        `${carbonPrefix}--aspect-ratio--1x1`,
      ])
    );
  });

  it('ratios', async () => {
    const wrapper = shallowMount(CvAspectRatio);

    const divTag = wrapper.find('div');

    for (const ratio of CvAspectRatioConsts.aspectRatios) {
      await wrapper.setProps({ ratio });
      expect(new Set(divTag.classes())).toEqual(
        new Set([
          `${carbonPrefix}--aspect-ratio`,
          `${carbonPrefix}--aspect-ratio--${ratio}`,
        ])
      );
    }
  });

  it('as', async () => {
    const wrapper = shallowMount(CvAspectRatio);
    expect(wrapper.element.tagName.toLowerCase()).toEqual('div');

    await wrapper.setProps({ as: 'p' });
    expect(wrapper.element.tagName.toLowerCase()).toEqual('p');
  });

  it('ratio validator', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation();

    for (const ratio of CvAspectRatioConsts.aspectRatios) {
      expect(CvAspectRatio.props.ratio.validator(ratio)).toEqual(true);
    }

    expect(spy).not.toBeCalled();

    expect(CvAspectRatio.props.ratio.validator('any other string')).toEqual(
      true
    );

    expect(spy).toBeCalled();
  });

  it('accessible', async () => {
    const main = document.createElement('main');
    const result = render(CvAspectRatio, {
      container: document.body.appendChild(main),
    });
    await expect(result.container).toBeAccessible('cv-aspect-ratio');
  }, 10000);
});
