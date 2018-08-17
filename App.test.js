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

it('always renders the logo', () => {
  const wrapper = shallow(<App />)
  const logo = wrapper.find('Image')
  expect(logo.length).toBeGreaterThan(0)
})

it('renders the user input', () => {
  const wrapper = shallow(<App />)
  const logo = wrapper.find('TextInput')
  logo.props().onChangeText('Matthew Wareing')
  expect(wrapper.find('Text').props().children).toEqual("Hello, my name is Matthew Wareing")
})