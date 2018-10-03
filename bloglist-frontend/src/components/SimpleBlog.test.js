import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
  it('renders content', () => {
    const blog = {
      title: 'Testi Title',
      author: 'Herra Hakkarainen',
      url: 'http://www.jotain.com',
      likes: 3
    }

    const blogComponent = shallow(<SimpleBlog blog={blog} />)
    //console.log(blogComponent.debug())
    const blogiDiv = blogComponent.find('.blogi')
    const liketDiv = blogComponent.find('.liket')
    //console.log(liketDiv.debug())

    expect(blogiDiv.text()).toContain(blog.title)
    expect(blogiDiv.text()).toContain(blog.author)
    expect(liketDiv.text()).toContain(blog.likes)
  })
})