$.widget( 'expensify.segmentedControl', {

    _onChangeCallback: null,

    _create: function(){
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
