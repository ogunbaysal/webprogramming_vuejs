import { shallowMount } from '@vue/test-utils'
import BannerRectAdvertisement from "@/app/components/Advertisement/BannerRectAdvertisement";

describe('BannerRectAdvertisement', () => {
  it('rendered', () => {
    const wrapper = shallowMount(BannerRectAdvertisement, {
      stubs: ['router-link'],
      propsData: {
        title: 'Test',
        image: 'Test.img',
        link: 'test.com'
      }
    })
    expect(wrapper).toBeTruthy();
  })
  it('BannerRectAdvertisement Props Testing', () => {
    const wrapper = shallowMount(BannerRectAdvertisement, {
      stubs: ['router-link'],
      propsData: {
        title: 'Test',
        image: 'Test.img',
        link: 'test.com'
      }
    })
    expect(wrapper.find('img').attributes('src')).toBe('Test.img');
    expect(wrapper.find('.name').text()).toBe('Test');
  })
})
