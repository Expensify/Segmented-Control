// jQuery will throw an error without these
jsdom = require( 'jsdom' ).jsdom;

// This is the markup with which we're testing
document = jsdom('<html><head><script></script></head><body>\
                    <ul class="good">\
                        <li data-value="all">All</li>\
                        <li data-value="approvers">Approvers</li>\
                        <li data-value="admins">Administrators</li>\
                    </ul>\
                    <div></div>\
                    <ul class="bad"></ul>\
                    <ul class="nodata">\
                        <li>All</li>\
                        <li>Approvers</li>\
                        <li>Administrators</li>\
                     </ul>\
                </body></html>');

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