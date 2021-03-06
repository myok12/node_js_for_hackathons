# node.js for hackathons

node.js for hackathons - a presentation with its examples: node app, express, mysql, socket.io, twilio API.

Presented at PennApps 2012 and 2013.

## View The Presentation

If all you want is to check out the presentation, you can preview it at [slideshare](http://www.slideshare.net/myok12/nodejs-for-hackathons).

If you cloned the repo, you can see the presentation by simply opening _Presentation.html_ in your browser.

However, the presentation is using some of the example code to set up a
[socket.io](http://socket.io/) server to sync the presenter with the viewers. For that,
follow the installation instructions, then run `node socketio.js` within the
_examples_ folder, then connect to it from your browser using
[http://localhost:8080/Presentation.html](http://localhost:8080/Presentation.html)

## Installation

To make the examples in the _examples_ folder work, you'll need:

1. To have node install, go to [the node.js site](http://nodejs.org/) and download and
install it. To verify it's installed, just run `node -v` and hope it
doesn't explode.

1. Go into the _examples_ folder and run `npm install`. This will
download all the modules required for these examples.

Then, just run `node <anyfile.js>` to see it in action.
