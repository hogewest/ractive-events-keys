// TODO can we just declare the keydowhHandler once? using `this`?
function makeKeyDefinition ( code ) {
	return ( node, fire ) => {
		function keydownHandler ( event ) {
			var which = event.which || event.keyCode;

			if ( which === code ) {
				event.preventDefault();

				fire({
					node,
					original: event
				});
			}
		}

		node.addEventListener( 'keydown', keydownHandler, false );

		return {
			teardown () {
				node.removeEventListener( 'keydown', keydownHandler, false );
			}
		};
	};
}

export const enter = makeKeyDefinition( 13 );
export const tab = makeKeyDefinition( 9 );
export const escape = makeKeyDefinition( 27 );
export const space = makeKeyDefinition( 32 );

export const del = makeKeyDefinition( 46 );
export const pageup = makeKeyDefinition( 33 );
export const pagedown = makeKeyDefinition( 34 );

export const leftarrow = makeKeyDefinition( 37 );
export const rightarrow = makeKeyDefinition( 39 );
export const downarrow = makeKeyDefinition( 40 );
export const uparrow = makeKeyDefinition( 38 );
