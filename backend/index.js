const express = require('express')
const busboy = require('connect-busboy')

const app = express()
const port = process.env.PORT || 3000

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

app.use(busboy())

//busboy post example
// app.post('/uploadFile', (req, res) => {
//   req.busboy.on('file', function (fieldname, file, filename) {
//     console.log("received file")
//     var fstream = fs.createWriteStream('./uploads/' + filename);
//     file.pipe(fstream);
//     fstream.on('close', function () {
//       res.send('upload succeeded!');
//     });
//   });
//   req.pipe(req.busboy);
// })

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})