;( function( $ ) {
	$.fn.sortSelect = function( options ) {
        var def = $.extend( {}, { order: 'asc', use: 'val', ignorecase: true, type: 'alpha' }, options );
		var ret = { an: { 'asc': -1, 'desc': 1 }, bn: { 'asc': 1, 'desc': -1 } };
		return this.each( function() {
			var opt = $( this ).find( 'option' ).filter(function() { return $( this )[def.use]() != '' && this.value != ''; } ).get()
			.sort( function( a, b ) {
				an = $( a )[def.use]();
				bn = $( b )[def.use]();
				if( def.type == 'alpha' ) {
					!def.ignorecase || (function() {
						an = an.toLowerCase();
						bn = bn.toLowerCase();
					})();
					if( an < bn ) {
						return ret.an[def.order];
					} else if( bn < an ) {
						return ret.bn[def.order];
					} else {
						return 0;
					}
				} else if( def.type == 'numeric' ) {
					if( def.order == 'asc' ) {
						return an - bn;
					} else if( def.order == 'desc' ) {
						return bn - an;
					} else {
						return 0;
					}
				}
			});
			$( this ).append( opt );
		});
	};
})( jQuery );