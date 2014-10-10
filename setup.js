// jQuery will throw an error without these
jsdom = require( 'jsdom' ).jsdom;

// This is the markup with which we're testing
document = jsdom('<html><head><script></script></head><body>\
                    <ul id="people_filter_type" class="segmented-control">\
                        <li data-value="all" class="active">All</li>\
                        <li data-value="approvers">Approvers</li>\
                        <li data-value="admins">Administrators</li>\
                    </ul>\
                </body></html>');

window = document.parentWindow;
navigator = window.navigator = {};
navigator.userAgent = 'NodeJs JsDom';

chai = require( 'chai' );
assert = chai.assert;
$ = require( 'jquery' );
require( 'jquery-ui' );

