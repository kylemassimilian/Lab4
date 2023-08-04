const express = require('express');
const expressVue = require('express-vue');
const path = require('path');
require('cross-fetch/polyfill');
const bodyParser = require('body-parser');
const hostname = '127.0.0.1';
const port = 3000;

// Initialize Express
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('static'));

const API_KEY = '';

// Options for express-vue
const vueOptions = {
  head: {
    title: 'Harvard Art Museums',
    metas: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    ],
    styles: [
      {
        style: '/css/styles.css'
      },
      {
        style: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
      }
    ]
  },
  rootPath: path.join(__dirname, '/views')
};


// Initialize express-vue
const expressVueMiddleware = expressVue.init(vueOptions);
app.use(expressVueMiddleware);

// List galleries
app.get('/', (req, res) => {
  const url = `https://api.harvardartmuseums.org/gallery?size=100&apikey=${API_KEY}`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    res.renderVue('index.vue', {galleries: data.records});
  })
});

// List objects
app.get('/gallery/:gallery_id', (req, res) => {
  const ids = `https://api.harvardartmuseums.org/object?gallery=${req.params.gallery_id}&apikey=${API_KEY}`;
  fetch(ids)
  .then(response => response.json())
  .then(data => {
    console.log(data.name);
    res.renderVue('gallery.vue', {objects: data.records});
  })
});

let comments = [];
// Show object
app.get('/object/:object_id', (req, res) => {
  const ids = `https://api.harvardartmuseums.org/object/${req.params.object_id}?apikey=${API_KEY}`;
  fetch(ids)
  .then(response => response.json())
  .then(data =>{
    //JavaScript object that will contain comments pertaining to this individual object
    let objectcomms = [];
    //loops through all comments and checks if a given comment matches the ID of this object
    comments.forEach(comment =>{
    if (comment.id == req.params.object_id)
      {
          //adds it to the list of comments for this object to be displayed
          objectcomms.push(comment.text)
        }
    })
    //creates overall string of all comments to pass in to the template rather than a javascript object
    let commentString = "";
    //numbers the comments
    let commNumber = 1;
    objectcomms.forEach(comment =>{
      commentString += "\n" + commNumber + ". ";
      //converts the comment to a string to add to the overall list
      commentString+= " " + comment.toString() + " ";
      commNumber++;
    })
    //renders template for the individual object with all relevant variables passed in
    res.renderVue('object.vue', {title: data.title, description: data.description, accessionyear: data.accessionyear, primaryimageurl : data.primaryimageurl, commentString: commentString, provenance: data.provenance, object_id : data.id});
   })
});

// Comment on object
//when form is submitted, post request is handled by adding the comment to list using body-parser
app.post('/objects/:object_id/comment', (req, res) => {
  //adds the comment and its object ID to the overall list of comments
  comments.push({text: req.body.comment, id: req.params.object_id});
  //creates and concatenates a string for the redirect URL to go back to object page
  let address = '/object/';
  address+= req.params.object_id;
  //redirects to page for the individual object after adding comment for it
  res.redirect(address);
});

// Listen on socket
app.listen(port, hostname, () => {
  console.log(`Server running on http://${hostname}:${port}/`);
});
