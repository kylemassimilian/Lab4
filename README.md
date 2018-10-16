# lab4

Code Method: 

Under the hood after the user clicks on a gallery, we asynchronously render the gallery template after the fetch request successfully gets us the response data that will give us a list of objects in the gallery clicked upon. We refer to all the objects in this gallery as "data.records" because this returns a JavaScript list object with each object and its variables specific to that gallery.

When the user clicks on an individual object, we implement a get request to go to the route for that object page using its ID. Like with the gallery route, we also fetch all data for that specific object asynchronously. We render the object template we created and pass in all variables from the "data" about this object that we want to display in the template, which includes title, description, accessionyear, provenance, primaryimageurl, and id, all variables specified in the object API.

Express to Vue:

The codebase for this lab is similar to lab2. However, the templates in this lab are created using the Vue framework rather than Express. We created a new Vue template for each page the user can visit: the index page for a list of galleries, the gallery page for all objects in a gallery, and object page for details on a specific object. 

Handling Comments: **

Within the object template, we also use HTML to create a form through which the user can submit comments. When a comment is submitted, we submit a post request to the route '/objects/:object_id' where the latter part of the address is the actual ID of the object for which the comment was submitted. At this commenthandler route, now we push the text of this comment into a larger JavaScript list object that holds all comments. Each object in this JavaScript object has two variables: the text of the comment itself and the ID of the object to which it belongs. We compile one string by getting the text of each individual comment and concatenating it to the string so that we can pass a single string rather than a JavaScript object into the template. We then redirect to the route for the object, which we recreate by using the object_id variable passed into the post request through the URL.

Each time the route for an individual object is reached, we loop through all the comments in our larger JavaScript object list of comments called "comments" and compare the ID of each comment to the ID of the current object whose page we are on. If the IDs match, we add the comment to an individual list for this object called objectcomms and ultimately pass in this individualized list of comments to the rendered object template, where all the comments will be displayed.
