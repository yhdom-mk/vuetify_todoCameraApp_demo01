const express = require('express');
const busboy = require('connect-busboy');
let path = require('path');
let os = require('os');
let fs = require('fs');

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
  // res.set('Access=Control-Allow-Origin', '*')
  // db.collection('posts').orderBy().get().then(snapshot => {
  //   posts.push(doc.data())
  // });
  res.send(posts)
})

app.post('/createPost', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')

  let busboy = new Busboy({ Headers: req.headers })
  let field = {}
  busboy.on('file', function(fieldname, filename, file, encoding, mimetype) {
    console.log('File[' + fieldname + ']: filename:' + filename + 'encoding:' + encoding + 'mimetype:' + mimetype);
    file.on('data', function(data) {
      console.log('data:' + data)
    })
    file.on('end', function() {
      console.log('Finished:')
    })
  });
  busboy.on('field', function(fieldname, val, filename) {
    console.log('Field' + fieldname + 'value:' + inspect(val));
    field[filename] = val
  })
  busboy.on('finish', function(fieldname, val) {
    // db.collection('posts', doc(field.id).set({
    //   id: field.id,
    //   imageurl: ''
    // }))
    res.writeHead(303, { Connection: 'close' })
    res.end()
  })
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