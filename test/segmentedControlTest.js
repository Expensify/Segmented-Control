require( '../setup.js' );
require( '../segmentedControl.js' );

describe( 'Segmented Control', function(){
    var control = $( 'ul' ).segmentedControl();

    it( 'Set the value to the first LI element in the UL by default', function(){
        assert.equal( control.segmentedControl( 'getValue' ), 'all' );
    });

    it( 'Set value works if given one of the values in the markup', function(){
        control.segmentedControl( 'setValue', 'approvers' );
        assert.equal( control.segmentedControl( 'getValue' ), 'approvers' );
    });

    it( 'Set value throws error if value doesn\'t match any of the ones in the markup', function(){
        var setInvalidValue = function(){
            control.segmentedControl( 'setValue', 'whatever' );
        };
        assert.throw( setInvalidValue, Error );
    });

    it( 'Fail when element isn\'t a UL or OL' );

    it( 'Fail when UL has no LI children' );

    it( 'Fail when LI elements have no data attribute (data-value)' );

    it( 'Fail when LI elements have no data attribute (data-value)' );
});
