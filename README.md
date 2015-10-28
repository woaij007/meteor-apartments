# meteor-apartments

meteor-apartments is based on meteor framework with mongo database. 

## How to build system

1. Install meteor from www.meteor.com
2. Clone the source code from github.
3. run the command `meteor --settings settings.json` 


## File Structure

    client/                                 Code files only load on the client end. 
    client/index.html                       Main entry file, usually use main.html in meteor.
    client/index.css                        CSS code for whole site.
    client/index.js                         JS set up juliancwirko:s-alert package on client side
    client/layout.html                      Layout template, must have {{> sAlert}} inside to make it work
    client/loading.html                     Loading template used to display loading page, need sacha:spin package
    
    client/templates                        All the client template and javascript code in this folder.
    client/templates/apartmentList.html     Template to display apartment list in pages
    client/templates/apartmentList.js       Helpers and events for apartmentList template 
    client/templates/apartment.html         Single apartment template will show in apartmentList
    client/templates/apartment.js           Helpers for apartment template
    client/templates/apartmentDetail.html   Template to show detail of each apartment and also can edit the information
    client/templates/apartmentDetail.js     AutoForm hook to tell you succeed in update or not

    
    lib/  						            common code like collections and utilities
	lib/apartments.js				        Define apartments collection, the schemas and the pages setting of apartmentList
    lib/router.js				            Router code
    
	public/                                 I put all the pictures client need to use here

    server/startup.js 		                Use data from settings.json to init apartments collection
    
    settings.json                           configuration data to be passed to meteor --settings, we put our json data here


## UNDO

- Since this is just a prototyping project, i didn't remove autopublish and insecure packages 
- In real project, we need to remove autopublish and use Meteor.publish and Meteor.subscribe
- And for insecure, we need to use Meteor.mothods or Meteor.allow/Meteor.deny to replace it

## TODO
- I just insert the original apartment json data 3 times to apartments collection, some of the 12 apartments have same information, you can go to the apartment detail page edit them and play with the sorting functions in apartmentList page
- About the packages used in this project, please refer to /.meteor/packages