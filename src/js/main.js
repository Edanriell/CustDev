import "../sass/main.sass";
import Modal from "./modules/modal";
import Scroll from "./modules/scroll";
import Gallery from "./modules/gallery";

window.addEventListener("DOMContentLoaded", () => {
	const modal = new Modal({
		triggerBtns: ".button",
		modalParent: "body"
	});

	const scroll = new Scroll({
		scrollParent: "main"
	});

	const gallery = new Gallery({
		trigger: ".gallery__image",
		container: "body"
	});

	modal.init();
	scroll.init();
	gallery.init();
});
