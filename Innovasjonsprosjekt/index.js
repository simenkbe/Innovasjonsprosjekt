let score = 0;
let panorama;
var steder = [
  [{ lat: 63.43212599070025, lng: 10.394397916655464 }, { sted: "Moholt" }],
  [{ lat: 63.422683924745336, lng: 10.394334314126588 }, { sted: "Samfundet" }],
  [
    { lat: 63.417007473529985, lng: 10.353378228883695 },
    { sted: "Sverresborg" },
  ],
  [{ lat: 63.34129651075954, lng: 10.44096874103995 }, { sted: "Sorgenfri" }],
  [{ lat: 63.43051108562932, lng: 10.539255369880156 }, { sted: "Ranheim" }],
  [{ lat: 63.353548536410635, lng: 10.355444469876659 }, { sted: "Heimdal" }],
  [{ lat: 63.37482504252019, lng: 10.33914314104149 }, { sted: "Flatåsen" }],
  [{ lat: 63.431770955707755, lng: 10.402253368027255 }, { sted: "Sentrum" }],
  [{ lat: 63.42307118024868, lng: 10.453812592636094 }, { sted: "Steinan" }],
  [{ lat: 63.449559170190874, lng: 10.445404095011261 }, { sted: "Lade" }],
];

let currentPlace = steder[Math.floor(Math.random() * steder.length)];
let coordinates = currentPlace[0];
let sted = currentPlace[1].sted;

 let reconfigure = () => {
                    document.getElementById("score").innerHTML = "Your score is: " + score
                    currentPlace = steder[Math.floor(Math.random()* (steder.length))]
                    coordinates = currentPlace[0]
                    sted = currentPlace[1].sted
                    initialize()
 }

const guess = () => {
  var guess = window.prompt("Where are we?");
  if (guess == sted) {
    score++;
    alert("Riktig! Scoren din er: " + score);
    reconfigure();
  } else {
    score = 0;
    alert("Feil! Scoren din er: " + score);
    reconfigure();
  }
};

function initialize() {
  const fenway = { lat: 42.345573, lng: -71.098326 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: fenway,
    zoom: 14,
  });
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {
      position: coordinates,
      pov: {
        heading: 34,
        pitch: 10,
      },
    }
  );

  map.setStreetView(panorama);
}

window.initialize = initialize;
