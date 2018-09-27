import React from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import NewBlogForm from './components/NewBlogForm'
import loginService from './services/login'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      blogs: [],
      newBlogTitle: '',
      newBlogAuthor: '',
      newBlogUrl: '',
      error: null,
      messu: null,
      username: '',
      password: '',
      user: null,
      mikaKlikattu: ''
    }
  }
  
  klikkaus = () => {
    var mikaTokatty = getSelection().baseNode.nodeValue
    const nimet = this.state.blogs.map(b => b.title)

    console.log(mikaTokatty)



    if (nimet.includes(mikaTokatty)) {
      if (mikaTokatty === this.state.mikaKlikattu) {
        this.setState({
          mikaKlikattu: ''
        })       
      } else {
        this.setState({
          mikaKlikattu: mikaTokatty
        }) 
      }
    }
  } 

  componentWillMount() {
    blogService
      .getAll()
      .then(blogs =>
        this.setState({ blogs })
    )
 
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if ( loggedUserJSON ) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({ user })
      blogService.setToken(user.token)
    }    
  }

  addBlog = async (event) => {
    event.preventDefault()
    try {
      const blogObject = {
        title: this.state.newBlogTitle,
        author: this.state.newBlogAuthor,
        url: this.state.newBlogUrl
      }

      const newBlog = await blogService.create(blogObject)

      this.setState({ messu: 'Uusi blogi ' + this.state.newBlogTitle + ' tekijältä ' + this.state.newBlogAuthor + ' lisätty' })
      setTimeout(() => { this.setState( { messu: null }) }, 5000)

      this.setState({
        blogs: this.state.blogs.concat(newBlog),
        newBlogTitle: '',
        newBlogAuthor: '',
        newBlogUrl: ''
      })      
    } catch ( error ) {
      this.setState({
        error: 'Blogin lisäys ei onnistunut',
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)      
    }
  }

  login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })

      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      blogService.setToken(user.token)
      this.setState({ username: '', password: '', user })
    } catch (exception) {
      this.setState({
        error: 'käyttäjätunnus tai salasana virheellinen',
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }

  handleNewBlogFieldChange = (event) => {  
    this.setState({ [event.target.name]: event.target.value })
  } 

  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  loggauduUlos = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    this.setState({ username: '', password: '', user: null })
  }

  render() {

    const blogStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5
    }

    const loginForm = () => (
      <div>
        <h2>Kirjaudu</h2>
  
        <form onSubmit={this.login}>
          <div>
            käyttäjätunnus
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleLoginFieldChange}
            />
          </div>
          <div>
            salasana
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleLoginFieldChange}
            />
          </div>
          <button>kirjaudu</button>
        </form>
      </div>
    )

    const newBlogForm = () => (
      <Togglable buttonLabel="Lisää uusi blogi">
        <NewBlogForm
          visible={this.state.visible}
          handleSubmit={this.addBlog} 
          handleChange={this.handleNewBlogFieldChange}
          newBlogTitle={this.state.newBlogTitle}
          newBlogAuthor={this.state.newBlogAuthor}
          newBlogUrl={this.state.newBlogUrl}
        />
      </Togglable>
    )
    const lisaRivi = (blog) => (
      <div>
          <ul> {blog.url} </ul>
          <ul> {blog.likes} likes <button name="likeNappi" onClick={console.log('klikattu likeNappia')} >like</button></ul>
          {blog.user !== undefined ? 
            <ul> Added by {blog.user.name}</ul> : <ul>Added by UNKNOWN</ul>
          }
      </div>
    )
    return (      
      <div>
        <h1>Herra Hakkaraisen blogisivut</h1>

         {this.state.error !== null ?
          <Notification message={this.state.error} tyyppi={"error"} /> :
          <Notification message={this.state.messu} tyyppi={"messu"} />
         }

        {this.state.user === null ?
          loginForm() :
          <div>
            <p>{this.state.user.name} logged in <button onClick={this.loggauduUlos}> logOut </button> </p>
            <h2>Blogit</h2>
            <ul>
                {this.state.blogs.map(blog => 
                <ul key= {blog.id} onClick={ this.klikkaus } style={blogStyle}> 
                  <Blog key={blog._id} blog={blog} />
                    {blog.title === this.state.mikaKlikattu ?
                      lisaRivi(blog) : <div></div>
                    }
                </ul>
                )}
            </ul>             
            {newBlogForm()}
          </div>        
        }         
      </div>
    );
  }
}

export default App;