const prefix = "ai";
let id = 0;

function getID(label = prefix) {
  return label.replace(/ /g, "-") + "-" + ++id;
}

export default getID;
