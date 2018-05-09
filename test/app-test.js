import React from 'react'
import App from '../js/Components/App'
import { shallow } from 'enzyme'

describe('<App/>', () => {
    it('renders exactly one <App/> component', () => {
        const component = shallow(<App />)
        expect(component).toHaveLength(1)
    })
})