import BasicLayout from '@/layouts';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

describe('Layout: BasicLayout', () => {
  it('Render correctly', () => {
    const wrapper = renderer.create(<MemoryRouter><BasicLayout/></MemoryRouter>);
    expect(wrapper.root.children.length).toBe(1);
    const outerLayer = wrapper.root.children[0];
    expect(outerLayer.type).toBe('div');
    const title = outerLayer.children[0];
    expect(title.type).toBe('h1');
    expect(title.children[0]).toBe('Yay! Welcome to umi!');
  });
});
