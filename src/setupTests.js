/** Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output.   */
/**Finally, you need to configure enzyme to use the adapter you want it to use. To do this, you can use the top level configure(...) API. */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
