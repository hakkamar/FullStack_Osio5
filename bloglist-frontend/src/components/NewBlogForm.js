import React from 'react'
import PropTypes from 'prop-types'

const NewBlogForm = ( { handleSubmit, handleChange, newBlogTitle, newBlogAuthor, newBlogUrl } ) => (
    <div>
      <h2>Lisää uusi blogi</h2>

      <form onSubmit={handleSubmit}>
        <div>
          title
          <input
            type="text"
            name="newBlogTitle"
            value={newBlogTitle}
            onChange={handleChange}
          />
        </div>
        <div>
          author
          <input
            type="text"
            name="newBlogAuthor"
            value={newBlogAuthor}
            onChange={handleChange}
          />
        </div>
        <div>
          url
          <input
            type="url"
            name="newBlogUrl"
            value={newBlogUrl}
            onChange={handleChange}
          />
        </div>          
        <button type="submit">Luo uusi</button>
      </form>
    </div>
  ) 

  NewBlogForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    newBlogTitle: PropTypes.string.isRequired,
    newBlogAuthor: PropTypes.string.isRequired,
    newBlogUrl: PropTypes.string.isRequired
  }

export default NewBlogForm