const myObjectArray = [
  {
    name: "Eva Devore",
    character: "Evandra",
    episode: 14,
  },
  {
    name: "Alessia Medina",
    character: "Nixie",
    episode: 15,
  },
  {
    name: "Kendal Drury",
    character: "DM",
    episode: 15,
  },
  {
    name: "Thomas Taufan",
    character: "Antrius",
    episode: 14,
  },
  {
    name: "Alessia Medina",
    character: "Nixie",
    episode: 15,
  },
];

let uniqObjectArray = [...new Map(myObjectArray.map((item) => [item["name"], item])).values()];

console.log(uniqObjectArray);
