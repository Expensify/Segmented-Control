require( '../setup.js' );
require( '../segmentedControl.js' );

describe( 'Segmented Control', function(){
    var control = $( 'ul.good' ).segmentedControl();

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

    it( 'Fail when element isn\'t a UL or OL', function(){
        var createControlOnDIV = function(){
            $( 'div' ).segmentedControl();
        };
        assert.throw( createControlOnDIV, Error );
    });

    it( 'Fail when UL has no LI children', function(){
        var createControlOnEmptyUL = function(){
            $( 'ul.bad' ).segmentedControl();
        };
        assert.throw( createControlOnEmptyUL, Error );
    });

    it( 'Fail when LI elements have no data attribute (data-value)', function(){
        var createControlWhenLIHasNoData = function(){
            $( 'ul.nodata' ).segmentedControl();
        };
        assert.throw( createControlWhenLIHasNoData, Error );
    });

    it( 'Set the active class on the active element' );

    it( 'Get the active label' );

    it( 'Call the set callback' );

    it( 'Does nothing when value changes but no callback is set' );

});
