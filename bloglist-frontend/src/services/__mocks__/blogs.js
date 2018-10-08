let token = null

const blogs = [
  {
    id: "5a422bc61b54a676234d17fc",
    user: null,
    likes: 14,
    author: "Robert C. Martin",
    title: "Type wars",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html"
  },
  {
    id: "5b9f6200187a003a48b66a30",
    user: {
      _id: "5b9f60857d879840289e8364",
      username: "hakkamar",
      name: "Hakkis"
    },
    likes: 15,
    author: "Marko A. Hakkarainen",
    title: "Testiä taas ja taas - again...",
    url: "https://www.Mhakkarainen.fi"
  },
  {
    id: "5ba4c21f31373805f88d301d",
    user: {
      _id: "5b9f60857d879840289e8363",
      username: "hakkaraine2m",
      name: "Marko Hakkarainen"
    },
    likes: 11,
    author: "Marko Hakkarainen",
    title: "Testiä ",
    url: "https://www.Hakkarainen.fi"
  },
  {
    id: "5ba8cf1fa73ca31214d2659e",
    user: {
      _id: "5b9f60857d879840289e8364",
      username: "hakkamar",
      name: "Hakkis"
    },
    likes: 10,
    author: "M.A.K Hakkarainen",
    title: "Taas uusi blogi",
    url: "www.makhakkarainen.com"
  },
  {
    id: "5ba8d1cba73ca31214d2659f",
    user: {
      _id: "5b9f60857d879840289e8363",
      username: "hakkaraine2m",
      name: "Marko Hakkarainen"
    },
    likes: 10,
    author: "MH",
    title: "Blogi - again...",
    url: "www.mah.com"
  },
  {
    id: "5bae094cfbaf5a344c3e1db0",
    user: {
      _id: "5b9f60857d879840289e8364",
      username: "hakkamar",
      name: "Hakkis"
    },
    likes: 10,
    author: "Jaska Jokunen",
    title: "viimeisin lisäys",
    url: "http://www.joku.com"
  },
  {
    id: "5bae24b1fbaf5a344c3e1dba",
    user: {
      _id: "5b9f60857d879840289e8363",
      username: "hakkaraine2m",
      name: "Marko Hakkarainen"
    },
    likes: 10,
    author: "Marko Hakkarainen",
    title: "Testiä XXXX",
    url: "https://www.Hakkarainen.fi"
  },
  {
    id: "5bae2893e2ef933e4c058819",
    user: {
      _id: "5b9f60857d879840289e8363",
      username: "hakkaraine2m",
      name: "Marko Hakkarainen"
    },
    likes: 101,
    author: "Marko Hakkarainen",
    title: "Testiä ZZZZZ",
    url: "https://www.Hakkarainen.fi"
  }
]

const getAll = () => {
  return Promise.resolve(blogs)
}

export default { getAll, blogs }