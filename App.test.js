import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON()
  expect(rendered).toBeTruthy()
})

it('always renders an input button', () => {
  const wrapper = shallow(<App />)
  const button = wrapper.find('TextInput')
  expect(button.length).toBeGreaterThan(0)
})
