namespace $ {

	export function $bun_array_move_with< T >( arr: Readonly< Array< T > >, ind1: number, ind2: number ) {
		var len = arr.length

		if ( ( ind1 < 0 || ind1 >= len ) || ( ind2 < 0 || ind2 >= len ) ) {
			return arr
		}

		var new_arr = arr.slice()

		new_arr[ ind1 ] = arr[ ind2 ]
		new_arr[ ind2 ] = arr[ ind1 ]

		return new_arr
	}

	export function $bun_array_move_up< T >( arr: Readonly< Array< T > >, ind: number ) {
		return $bun_array_move_with( arr, ind, ind - 1 )
	}

	export function $bun_array_move_down< T >( arr: Readonly< Array< T > >, ind: number ) {
		return $bun_array_move_with( arr, ind, ind + 1 )
	}

	export function $bun_array_move_top< T >( arr: Readonly< Array< T > >, ind: number ) {
		var new_arr = arr.slice()

		var item = new_arr.splice( ind, 1 )[ 0 ]
		new_arr.unshift( item )

		return new_arr
	}

	export function $bun_array_move_bottom< T >( arr: Readonly< Array< T > >, ind: number ) {
		var new_arr = arr.slice()

		var item = new_arr.splice( ind, 1 )[ 0 ]
		new_arr.push( item )

		return new_arr
	}

}
