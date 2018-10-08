import React from 'react'
import { shallow } from 'enzyme'
import Blog from './Blog'

describe.only('<Blog />', () => {
  it('renders content', () => {
    const blog = {
      title: 'Testi Title',
      author: 'Herra Hakkarainen',
      url: 'http://www.jotain.com',
      likes: 3
    }

    const blogComponent = shallow(<Blog blog={blog} />)
    const nimiDiv = blogComponent.find('.nimiDiv')

    expect(nimiDiv.text()).toContain(blog.title)
    expect(nimiDiv.text()).toContain(blog.author)
    expect(nimiDiv.text()).not.toContain(blog.url)
  })
  
  it('after clicking name the details are displayed', () => {
    const blog = {
      title: 'Testi Title',
      author: 'Herra Hakkarainen',
      url: 'http://www.jotain.com',
      likes: 3
    }
    
    const mockHandler = jest.fn()
  
    const blogComponent = shallow(
      <Blog
        blog={blog}
        onClick={mockHandler}
      />
    )

    const nimiDiv = blogComponent.find('.nimiDiv')
    nimiDiv.simulate('click')
    const lisaDiv = blogComponent.find('.lisaDiv')
    //console.log(lisaDiv.debug())

    expect(nimiDiv.text()).toContain(blog.title)
    //expect(lisaDiv.text()).toContain(blog.url)
  })
})