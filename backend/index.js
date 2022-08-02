const express = require('express')
const app = express()
const port = 3000

app.get('/posts', (req, res) => {
  // res.send('I move on Node.js a single day.')
  let posts = [
    {
      photoImages: "https://picsum.photos/512/128?image=660",
      textComents: "If you wake up earliy, you get something you unexpected.",
    },
    {
      photoImages: "https://picsum.photos/512/128?image=660",
      textComents: "If you wake up earliy, you get something you unexpected.",
    }
  ]
  res.send(posts)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})