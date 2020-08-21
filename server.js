const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');

// app.use(express.json());
// if (process.env.NODE_ENV === 'development') {
//   app.use(
//     sassMiddleware({
//       /* Options */
//       src: path.join(__dirname),
//       dest: path.join(__dirname),
//       debug: true,
//       outputStyle: 'compressed',
//     })
//   );
// }

app.use('/', require('./controllers/Main'));

// if(process.env.NODE_ENV==="production"){
//   app.get("*",(req,res)=>{
//     res.sendFile(path.join(__dirname,"client","build","index.html"))
//   })
// }
app.use(express.static('public'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('server started');
});
