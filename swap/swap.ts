namespace $ {

	export function $bun_array_swap< T >( arr: Array< T >, ind1: number, ind2: number ) {

		var res = arr.slice( 0 )

		var tmp = res[ ind1 ]
		res[ ind1 ] = res[ ind2 ]
		res[ ind2 ] = tmp

		return res

	}

}