var attributes=["double-barrel","bullpup","full-auto","scope-attached","mag-fed","laser","light","heavy","long-barrel","short-barrel","sawed-off","supressed","no-scope","no-stock"];
var types=["smg","shotgun","rifle","revolver","sniper","pistol","machine-gun","minigun","crossbow"];
var styles=["futuristic","steampunk","retro-futuristic","low-poly","cowboy","apocalyptic"];

function attributeadd() {
  if (attributes.length>0) {
    var num=Math.floor(Math.random() * attributes.length);
    document.getElementById("result").innerHTML+=attributes[num]+" ";
    attributes.splice(num,1);
  }
}

function typeadd() {
  if (types.length>0) {
    var num=Math.floor(Math.random() * types.length);
    document.getElementById("result").innerHTML+=types[num]+" ";
    types.splice(num,1);
  }
}

function styleadd() {
  if (styles.length>0) {
    var num=Math.floor(Math.random() * styles.length);
    document.getElementById("result").innerHTML+=styles[num]+" ";
    styles.splice(num,1);
  }
}
