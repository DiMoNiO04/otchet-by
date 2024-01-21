// Метка для карты контактов
const PLACEMARK_CONTACT = {
  lalitude: 53.902134,
  longitude: 27.568653,
};

function removeContent(mainMap) {
  mainMap.controls.remove('geolocationControl');
  mainMap.controls.remove('searchControl');
  mainMap.controls.remove('trafficControl');
  mainMap.controls.remove('typeSelector');
  mainMap.controls.remove('rulesControl');
}

// Код для карты контактов
function initContactsMap() {
  let left;

  if (window.innerWidth >= 1198) {
    left = 0.01;
  } else if (window.innerWidth < 1198 && window.innerWidth >= 768) {
    left = 0.004;
  } else {
    left = 0;
  }

  const contactsMap = new ymaps.Map('map', {
    center: [PLACEMARK_CONTACT.lalitude, PLACEMARK_CONTACT.longitude + left],
    zoom: 16,
  });

  const contactsPlacemark = new ymaps.Placemark(
    [PLACEMARK_CONTACT.lalitude, PLACEMARK_CONTACT.longitude],
    {},
    {
      hideIconOnBalloonOpen: false,
      iconLayout: 'default#image',
      iconImageHref: '../assets/img/map-pin.svg',
      icon_imagesize: [28, 40],
    }
  );

  contactsMap.geoObjects.add(contactsPlacemark);

  removeContent(contactsMap);
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('map')) {
    ymaps.ready(initContactsMap);
  }
});
