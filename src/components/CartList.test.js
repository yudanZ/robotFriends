import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

const mockRobots = [
    {
        id : 1,
        name: 'John Snow',
        username: 'JohnJohn',
        email: 'john@gmail.com'
    }
]

it('expect to render <CardList /> component', () => {
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})