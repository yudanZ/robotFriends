import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots : jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage { ...mockProps} />)
})
it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters Robots correctly' , () => {
    const mockProps2 = {
        onRequestRobots : jest.fn(),
        robots: [{
            id:3,
            name:'John',
            email: 'john@gmail.com'
        }],
        searchField: 'john',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage { ...mockProps2} />)

    expect(wrapper2.instance().filteredRobots()).toEqual([{
        id:3,
        name:'John',
        email: 'john@gmail.com'
    }])
})

it('filters Robots empty',() => {
    const mockProps3 = {
        onRequestRobots : jest.fn(),
        robots: [{
            id:3,
            name:'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }
    const wrapper3 = shallow(<MainPage { ...mockProps3} />)
    expect(wrapper3.instance().filteredRobots()).toEqual([])
})

it('isPending is true',() => {
    const mockProps4 = {
        onRequestRobots : jest.fn(),
        robots: [{
            id:3,
            name:'John',
            email: 'john@gmail.com'
        }],
        searchField: '',
        isPending: true
    }
    const wrapper4 = shallow(<MainPage { ...mockProps4} />)
    expect(wrapper4.find('h1')).toHaveLength(1);
})