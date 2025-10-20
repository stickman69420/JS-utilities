async function loadImage (src) {
	return await Promise (resolve => {
		let img = new Image ();
		img. onload = () => resolve (img);
		img.onerror = () => resolve(false);
	});
}