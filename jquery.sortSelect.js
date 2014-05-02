;( function( $ ) {
    $.fn.sortSelect = function( options ) {
        var def = $.extend({},{order:'asc'},options);
        var ret = { an: { 'asc': -1, 'desc': 1 }, bn: { 'asc': 1, 'desc': -1 } };
        return this.each( function() {
            var opt = $( this ).find( 'option' ).filter(function() { return this.value != ''; } ).sort( function( a, b ) {
                an = a.value.toLowerCase();
                bn = b.value.toLowerCase();
                if( an < bn ) {
                    return ret.an[def.order];
                } else if( bn < an ) {
                    return ret.bn[def.order];
                } else {
                    return 0;
                }
            })
            .clone();
            $( this ).find( 'option' ).filter(function() { return this.value != ''; } ).remove();
            $( this ).append( opt );
        });
    };
})( jQuery );