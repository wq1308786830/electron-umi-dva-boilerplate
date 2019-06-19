import Index from '@/pages';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';


describe('Page: index', () => {
  it('Render correctly', () => {
    const wrapper = renderer.create(<MemoryRouter><Index/></MemoryRouter>);
    expect(wrapper.root.children.length).toBe(1);
    const outerLayer = wrapper.root.children[0];
    expect(outerLayer.type).toBe('div');
    expect(outerLayer.children.length).toBe(2);

  });
});
