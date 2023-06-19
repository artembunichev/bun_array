namespace $ {

	export function $bun_array_split< T >( arr: Readonly< Array< T > >, predicate: ( el: T )=> boolean ) {

		var arr_true: Array< T > = []
		var arr_false: Array< T > = []

		arr.forEach( ( el )=> {

			if ( predicate( el ) ) {
				arr_true.push( el )
			} else {
				arr_false.push( el )
			}

		} )

		return [ arr_true, arr_false ]

	}

}
