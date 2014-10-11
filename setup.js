// jQuery will throw an error without these
jsdom = require( 'jsdom' ).jsdom;

fs = require( 'fs' );

// This is the markup with which we're testing
document = jsdom( fs.readFileSync( 'index.html' ) );

window = document.parentWindow;
navigator = window.navigator = {};
navigator.userAgent = 'NodeJs JsDom';

chai = require( 'chai' );
spies = require('chai-spies');
assert = chai.assert;
chai.use( spies );
should = chai.should();
$ = require( 'jquery' );
require( 'jquery-ui' );
