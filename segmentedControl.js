$.widget( 'expensify.segmentedControl', {

    _onChangeCallback: null,

    _validate: function(){
        var elem = this.element;
        if( elem.prop( 'tagName' ) !== 'UL' && elem.prop( 'tagName' ) !== 'OL' ){
            throw new Error( 'Can\'t create segmented control non-list element' );

        }

        if( elem.children( 'LI' ).length === 0 ){
            throw new Error( 'Can\'t create segmented control non-list element' );
        }

        elem.children( 'LI' ).each( function( index, elem ){
            if( !$( elem ).attr( 'data-value' ) ){
                throw new Error( 'LI must have a data-value data attribute' );
            }
        });
    },

    _create: function(){
        this._validate();

        this.element.find( 'li:first-child' ).addClass( 'active' );

        this._on({
            click: this._onClick
        });
    },

    _onClick: function( event ){
        event.preventDefault();

        // Do nothing if this control is disabled
        if( this.element.hasClass( 'disabled' ) ){
            return;
        }

        var $clickedItem = $(event.target);

        // Do nothing if the active element is clicked
        if( $clickedItem.hasClass( 'active' ) ){
            return;
        }

        // "Activate" the new item
        this.element.find( 'li.active' ).removeClass( 'active' );
        $clickedItem.addClass( 'active' );

        // Invoke the callback if we have one
        if( typeof this._onChangeCallback === 'function' ){
            this._onChangeCallback();
        }
    },

    _destroy: function(){
        this.element.find( 'li' ).removeClass( 'active' );
        this._off( this.element, 'click' );
    },

    getValue: function(){
        return this.element.find( 'li.active' ).attr( 'data-value' );
    },

    getActiveLabel: function(){
        return this.element.find( 'li.active' ).text();
    },

    setValue: function( newValue ){
        if( this.element.find( 'li[data-value="' + newValue + '"]' ).length === 0 ){
            throw new Error( 'Value must be in the the data attribute of one of the LI elements' );
        }
        this.element.find( 'li' ).removeClass( 'active' );
        this.element.find( 'li[data-value="' + newValue + '"]' ).addClass( 'active' );
    },

    setOnChange: function( callback ){
        this._onChangeCallback = callback;
    }
});
