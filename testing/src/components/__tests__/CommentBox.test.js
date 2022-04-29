import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root'
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(<Root><CommentBox/></Root>);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {

    const value = 'New Comment';

    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: {value: value}
        });

        wrapped.update();
    });

    it('has a text area that users can type in to', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual(value);
    });

    it('clears the textarea when form is submitted', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual(value);
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
})
