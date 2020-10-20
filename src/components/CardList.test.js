import { shallow} from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'JohnHohn',
            email: 'john@gmail.com',
            imgUrl: 'https://robohash.org/AGP.png?set=set4'
        }
    ]
    expect(shallow(<CardList  robots={mockRobots}/>).debug()).toMatchSnapshot();
})