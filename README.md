

# uID [![Build Status](https://travis-ci.com/tonyfreed/uID.svg?branch=master)](https://travis-ci.com/tonyfreed/uID)
> uID generator

Install
-------

<pre>
npm i tf-uid
</pre>

Usage
-------

<pre>
const uID = require('tf-uid');
const myID = uID.getRandom();
</pre>

By default uID.getRandom() returns a string of 12 chars that consists from letters and digits.

### Specify uID length
<pre>
uID.getRandom(12);
</pre>

### Get digits only uID
<pre>
uID.getRandomNumbers();
</pre>

### Get letters only uID
<pre>
uID.getRandomText();
</pre>

License
-------

MIT © [Tony Freed](https://tonyfreed.com/)