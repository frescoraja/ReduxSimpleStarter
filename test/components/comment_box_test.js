import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has correct class', () => {
    expect(component).have.class('comment-box');
  });

  it('has a textarea', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });
    
    it('shows up in textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('on submit, clears input text', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
