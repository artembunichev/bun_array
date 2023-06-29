namespace $ {

	export function $bun_array_overwrite< T >( arr: Readonly< Array< T > >, index: number, new_el: T ): Readonly< Array< T > > {

		var before = arr.slice( 0, index )

		var after = arr.slice( index + 1 )

		return [ ... before, new_el, ... after ]

	}

}
