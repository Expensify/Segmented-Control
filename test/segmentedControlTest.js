// jQuery will throw an error without these
jsdom = require( 'jsdom' ).jsdom;
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
require( '../segmentedControl.js' );

describe( 'Segmented Control', function(){
    var control = $( 'ul' ).segmentedControl();

    it( 'Sets the value to the first LI element in the UL by default', function(){
        assert.equal( control.segmentedControl( 'getValue' ), 'all' );
    });

    it( 'Set value works if given one of the values in the markup', function(){
        control.segmentedControl( 'setValue', 'approvers' );
        assert.equal( control.segmentedControl( 'getValue' ), 'approvers' );
    });
});
