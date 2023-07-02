namespace $ {

	export function $bun_array_overwrite< T >( arr: Readonly< Array< T > >, index: number, new_el: T ) {

		var res = arr.slice()

		res[ index ] = new_el

		return res

	}

}
