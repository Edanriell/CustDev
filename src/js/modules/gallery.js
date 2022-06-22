export default class Gallery {
	constructor({ trigger, container }) {
		this.images = document.querySelectorAll(trigger);
		this.container = document.querySelector(container);
		this.totalImages = this.images.length;
		this.imageIndex = null;
	}

	init() {
		this.images.forEach(image => {
			image.addEventListener("click", evt => this.#createGallery(evt));
		});
	}

	#createGallery(evt) {
		const currentClientWidth = document.body.clientWidth;
		const gallery = document.createElement("div");
		const galleryBody = document.createElement("div");
		const galleryImage = document.createElement("img");
		const galleryImageWrapper = document.createElement("div");
		const nextBtn = document.createElement("button");
		const prevBtn = document.createElement("button");
		const closeBtn = document.createElement("button");
		const allImages = [...this.images];
		this.imageIndex = allImages.indexOf(evt.target);
		galleryImage.setAttribute("src", this.images[this.imageIndex].src);
		gallery.classList.add("gallery-window", "fade-in");
		galleryBody.classList.add("gallery-window__body", "fade-in");
		galleryImage.classList.add("gallery-window__image");
		galleryImageWrapper.classList.add(".gallery-window__image-wrapper", "fade-in-fwd-element");
		prevBtn.classList.add("gallery-window__btnPrev");
		nextBtn.classList.add("gallery-window__btnNext");
		closeBtn.classList.add("gallery-window__btnClose");
		galleryImageWrapper.append(galleryImage);
		galleryBody.append(galleryImageWrapper);
		gallery.append(galleryBody, closeBtn, prevBtn, nextBtn);
		this.container.append(gallery);
		this.#scrollBarFix(currentClientWidth);
		this.#switchImage();
		this.#removeGallery(gallery, galleryBody);
	}

	#switchImage() {
		const btnNext = document.querySelector(".gallery-window__btnNext");
		const btnPrev = document.querySelector(".gallery-window__btnPrev");
		const image = document.querySelector(".gallery-window__image");
		btnNext.addEventListener("click", () => {
			image.removeAttribute("src");
			if (this.imageIndex === 0) {
				this.imageIndex = this.totalImages;
			}
			this.imageIndex--;
			image.setAttribute("src", this.images[this.imageIndex].src);
		});
		btnPrev.addEventListener("click", () => {
			image.removeAttribute("src");
			this.imageIndex++;
			if (this.imageIndex === this.totalImages) {
				this.imageIndex = 0;
			}
			image.setAttribute("src", this.images[this.imageIndex].src);
		});
	}

	#removeGallery(gallery) {
		const btnClose = document.querySelector(".gallery-window__btnClose");
		btnClose.addEventListener("click", () => {
			setTimeout(() => {
				gallery.classList.remove("fade-in");
				gallery.classList.add("fade-out");
				setTimeout(() => {
					gallery.remove();
					document.body.style.overflow = null;
					document.body.style.paddingRight = 0;
				}, 350);
			}, 300);
		});
	}

	#scrollBarFix(currentClientWidth) {
		document.body.style.overflow = "hidden";
		const { clientWidth } = document.body;
		document.body.style.paddingRight = `${clientWidth - currentClientWidth}px`;
	}
}
