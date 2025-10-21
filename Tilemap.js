import loadImage from Images.js
export function Tilemap(Context,Tileset,Tilemap) {
	Let Map
	Let Set = await loadImage(Tileset)
	fetch(Tilemap)
    .then((response) => response.json())
    .then((json) => Map=json);
	return ([Map,Set])
}
