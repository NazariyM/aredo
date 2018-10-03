import GoogleMapsApi from '../components/GoogleMapsApi';
import {css} from '../_helpers';

class Contact {
  constructor() {
    this.block = document.querySelector('.contact');

    if (!this.block) return;
    this.addressItems = [...this.block.querySelectorAll('.contact__addr-item')];

    this.init();
  }

  async init() {
    this.getActiveAddr();
    this.buildMap();
    this.gmapApi.load().then(() => {
      this.setMarkers();
      this.goToMarker();
    });
  }

  getActiveAddr() {
    this.activeItem = this.addressItems.filter(x => x.classList.contains(css.active));
  }

  buildMap() {
    this.gmapApi = new GoogleMapsApi();
    this.gmapApi.load().then(() => {
      let mapContainer = this.block.querySelector('.contact__map'),
        zoom = parseInt(mapContainer.getAttribute('data-zoom')),
        lat = parseFloat(this.activeItem[0].getAttribute('data-lat')),
        lng = parseFloat(this.activeItem[0].getAttribute('data-lng')),
        initCoords = {lat, lng};

      this.map = new google.maps.Map(mapContainer, {
        zoom: zoom,
        center: initCoords,
        disableDefaultUI: true
      });
    });

    return this;
  }

  setMarkers() {
    for (const item of this.addressItems) {
      let lat = parseFloat(item.getAttribute('data-lat')),
        lng = parseFloat(item.getAttribute('data-lng')),
        coords = {lat, lng};

      const marker = new google.maps.Marker({
        position: coords,
        map: this.map
      });
    }
  }

  goToMarker() {
    for (const item of this.addressItems) {
      item.addEventListener('click', () => {
        const lat = parseFloat(item.getAttribute('data-lat'));
        const lng = parseFloat(item.getAttribute('data-lng'));
        const itemiblings = Array
          .from(item.parentElement.children)
          .filter(x => x !== item);

        const latLng = new google.maps.LatLng(lat, lng);
        this.map.panTo(latLng);

        for (const item of itemiblings) item.classList.remove(css.active);
        item.classList.add(css.active);
      });
    }
  }
}

const contactMapAPI = new Contact();
