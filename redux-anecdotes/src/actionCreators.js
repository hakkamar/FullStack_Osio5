const generateId = () => (100000*Math.random()).toFixed(0)

const actionFor = {
    anecdoteCreation(content) {
      return {
        type: 'ADD_NEW',
        data: {
          content: content,
          id: generateId(),
          votes: 0
        }
      }
    },
    lisaaAani(id) {
      return {
        type: 'VOTE',
        data: { id }
      }
    }
}

export default actionFor