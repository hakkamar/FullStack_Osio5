import React from 'react'

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

export default NewBlogForm