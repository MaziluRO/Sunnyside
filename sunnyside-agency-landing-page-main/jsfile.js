const mainSection = document.querySelector('main');
const navBar = document.querySelector('nav');
const headerBar = document.querySelector('header');

const navHeight = navBar.getBoundingClientRect().height;

const stickyNav = function (entries) {
	const [entry] = entries;

	if (!entry.isIntersecting) navBar.classList.add('sticky');
	else navBar.classList.remove('sticky');
};

const mainObserver = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0,
	rootMargin: `-${navHeight}px`,
});
mainObserver.observe(headerBar);

const allSections = document.querySelectorAll('.section');

//reveal Testimonials
const revealSection = function (entries, observer) {
	const [entry] = entries;
	console.log(entry);
	if (!entry.isIntersecting) return;
	entry.target.classList.remove('section-hidden');
	observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
	root: null,
	threshold: 0.15,
});

allSections.forEach((section) => {
	section.classList.add('section-hidden');
	sectionObserver.observe(section);
});
