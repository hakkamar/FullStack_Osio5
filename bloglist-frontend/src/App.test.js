import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
jest.mock('./services/blogs')
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'

const user = {
  username: 'hakkamar',
  password: 'salainen',
  token: 'bearer 1231231214',
  name: 'Hakkis'
}

class Wrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formInput: '',
      blogs: []
    }
  }
  onChange = (e) => {
    this.setState({ formInput: e.target.value })
  }
  render() {
    return (
      <LoginForm
        username={user.username}
        password={user.password}
        handleChange={this.onChange}
        handleSubmit={this.props.onSubmit}
      />
    )
  }
}

describe('<App />', () => {
  let app

  beforeAll(() => {
    app = mount(<App />)
  })

  describe('when user is not logged', () => {
    it('only login form is rendered', () => {
      app.update()
      const kokoSivuComponent = app.find('.kokoSivu')

      expect(kokoSivuComponent.text()).toContain('Herra Hakkaraisen blogisivut')
      expect(kokoSivuComponent.text()).toContain('Kirjaudu')
      expect(kokoSivuComponent.text()).not.toContain('url')
  
      //console.log(kokoSivuComponent.html())
    })
  })
  describe('when user is logged', () => {
    beforeEach(() => {
      localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
    })

    it('LoginFormi toimii', () => {

      app.update()
      const onSubmit = jest.fn()

      const wrapper = mount(
        <Wrapper onSubmit={onSubmit} />
      )

      const input = wrapper.find('input')
      const button = wrapper.find('button')

      input.at(0).simulate('change', { target: { value: user.username } })
      input.at(1).simulate('change', { target: { value: user.password } })
      button.simulate('submit')

      expect(wrapper.state().formInput).toBe(user.password)
      expect(onSubmit.mock.calls.length).toBe(1)
      //console.log(wrapper.html())

      /*      
      console.log(blogService.blogs.length)

      app.update()
      const blogComponents = app.find(Blog)
      console.log(blogComponents.blogs.length)

      const kokoSivuComponent = app.find('.kokoSivu')
      console.log(kokoSivuComponent.html())
      */
    })
  })
})