let score = 0;
let panorama;
var steder = [
  [{ lat: 63.43212599070025, lng: 10.394397916655464 }, { sted: "sentrum" }],
  [{ lat: 63.422683924745336, lng: 10.394334314126588 }, { sted: "samfundet" }],
  [
    { lat: 63.417007473529985, lng: 10.353378228883695 },
    { sted: "sverresborg" },
  ],
  [{ lat: 63.34129651075954, lng: 10.44096874103995 }, { sted: "sorgenfri" }],
  [{ lat: 63.43051108562932, lng: 10.539255369880156 }, { sted: "ranheim" }],
  [{ lat: 63.353548536410635, lng: 10.355444469876659 }, { sted: "heimdal" }],
  [{ lat: 63.37482504252019, lng: 10.33914314104149 }, { sted: "flatåsen" }],
  [{ lat: 63.411298617267214, lng: 10.434674998294298 }, { sted: "moholt" }],
  [{ lat: 63.42307118024868, lng: 10.453812592636094 }, { sted: "steinan" }],
  [{ lat: 63.449559170190874, lng: 10.445404095011261 }, { sted: "lade" }],
];

let currentPlace = steder[Math.floor(Math.random() * steder.length)];
let coordinates = currentPlace[0];
let sted = currentPlace[1].sted;

let reconfigure = () => {
  document.getElementById("score").innerHTML = "Your score is: " + score;
  currentPlace = steder[Math.floor(Math.random() * steder.length)];
  coordinates = currentPlace[0];
  sted = currentPlace[1].sted;

  initialize();
};

const guess = () => {
  var guess = window.prompt("Where are we?").toLowerCase();
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
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById("street-view"),
    {
      position: coordinates,
      pov: {
        heading: 165,
        pitch: 0,
      },
      showRoadLabels: 0,
      disableDefaultUI: true,
    }
  );
}
