namespace $ {

	export type $bun_array_divide_return< T > = {
		before: Readonly< Array< T > >;
		after: Readonly< Array< T > >;
	}

	export function $bun_array_divide< T >( arr: Readonly< Array< T > >, divider: ( item: T )=> boolean ): $bun_array_divide_return< T > {
		var divide_ind = arr.findIndex( divider )

		return {
			before: arr.slice( 0, divide_ind ),
			after: arr.slice( divide_ind ),
		}
	}

}
