/* Nav icon */
const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".header__top-row");

navBtn.onclick = function () {
    navIcon.classList.toggle("nav-icon--active");
    nav.classList.toggle("header__top-row--mobile");
    document.body.classList.toggle("no-scroll");
};

/* Phone Mask */
mask("[data-tel-input]");

// Удаляем '+' если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll("[data-tel-input]");
phoneInputs.forEach((input) => {
    input.addEventListener("input", () => {
        if (input.value == "+") input.value = "";
    });
    input.addEventListener("blur", () => {
        if (input.value == "+") input.value = "";
    });
});

ymaps.ready(init);
function init() {
    // Создание карты.
    var map = new ymaps.Map("map", {
        center: [55.751433699070894, 37.548521561305314],
        zoom: 16,
    });

    var myPlacemark = new ymaps.Placemark(
        [55.751433699070894, 37.548521561305314],
        {
            balloonContent: `
				<div class="balloon">
					<div class="balloon__address">Краснопресненская наб. 14с1</div>
					<div class="balloon__contacts">
						<a href="tel:+74950215433">8 (495) 021-54-33</a>
					</div>
				</div>
			`,
        },
        {
            iconLayout: "default#image",
            iconImageHref: "./img/map/location-pin.svg",
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -40],
        }
    );

    map.controls.remove("geolocationControl"); // удаляем геолокацию
    map.controls.remove("searchControl"); // удаляем поиск
    map.controls.remove("trafficControl"); // удаляем контроль трафика
    map.controls.remove("typeSelector"); // удаляем тип

    map.controls.remove("rulerControl");
    map.behaviors.disable(["scrollZoom"]);

    map.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();
}
