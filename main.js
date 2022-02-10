let latitude = 28.62, longitude = 77.222


mapboxgl.accessToken =
    "pk.eyJ1IjoiYW5jaGl0bCIsImEiOiJja2Y2b2h0OHcwMmVoMnpwbXptenZmNzUzIn0.TZn8hRitroefx-gmIvJcvQ";

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [longitude, latitude],
    zoom: 11,
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
)

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }),
    "top-left"
)

locationList = [
    [77.2388316, 28.6561639], [77.185000, 28.5244801], [77.2756599, 28.6124474], [77.2084009, 28.6260669], [77.2488336, 28.5929693],
    [77.2174907, 28.5931006], [77.227321, 28.6129167], [77.1925721, 28.6147748], [78.0399535, 27.1751496], [77.2566377, 28.5534967]
]

for (var i = 0; i <= locationList.length; i++) {
    console.log(locationList[0])
    img = document.querySelector(`#img${i + 1}`)
    var marker = new mapboxgl.Marker({
        element: img
    })
        .setLngLat(locationList[i])
        .addTo(map)

}