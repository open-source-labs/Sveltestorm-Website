const express = require('express');
const path = require('path');
const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {

  // /dist/ folder path
  const DIST_DIR = path.join(__dirname, './dist');
  console.log('server ding');
  // ./dist/index.html file path
  // const HTML_FILE = path.join(DIST_DIR, 'index.html');
  app.use(express.static(DIST_DIR));
  
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, './dist/index.html'));
  });
}

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'index.html'));
// });

// app.use('/build', express.static(path.join(__dirname, '../dist')));

app.listen(3000, () => {
  console.log('listening on Port 3000');
});
