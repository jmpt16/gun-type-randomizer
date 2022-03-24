var allofit={
  attributes:["double-barrel","bullpup","full-auto","scope-attached","mag-fed","laser","light","heavy","long-barrel","short-barrel","sawed-off","supressed","no-scope","no-stock","rusted","bored-out","rechambered","underslung"],
  types:["smg","shotgun","rifle","revolver","sniper","pistol","machine-gun","minigun","crossbow","flamethrower","grenade-launcher"],
  styles:["futuristic","steampunk","retro-futuristic","low-poly","cowboy","apocalyptic","tacticool", "blacked-out", "antique","modernized"]
};

function stringadd(name) {
  if (allofit[name].length>0) {
    var num=Math.floor(Math.random() * allofit[name].length);
    document.getElementById("result").innerHTML+=allofit[name][num]+" ";
    allofit[name].splice(num,1);
  }
}

function liststringadd() {
  switch (document.getElementById("op").value) {
  case 'sat':
    stringadd('styles');
    stringadd('attributes');
    stringadd('types');
    break;
  case 'tt':
    stringadd('types');
    stringadd('types');
    break;
  case 'aat':
    stringadd('styles');
    stringadd('attributes');
    stringadd('types');
    break;
  default:
    stringadd(document.getElementById("op").value);
}
}
