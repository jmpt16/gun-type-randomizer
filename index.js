var allofit={
  attributes:["bolt-action","break-action","lever-action","pump-action","double-barrel","bullpup","full-auto","scope-attached","mag-fed","laser","light","heavy","long-barrel","short-barrel","sawed-off","supressed","no-scope","no-stock","rusted","bored-out","rechambered","underslung"],
  types:["smg","shotgun","rifle","revolver","sniper","pistol","machine-gun","minigun","crossbow","flamethrower","grenade-launcher","coilgun","railgun"],
  styles:["futuristic","steampunk","retro-futuristic","low-poly","cowboy","apocalyptic","tacticool", "blacked-out", "antique","modernized","cyberpunk"]
};
var cutter={
  attributes:[],
  types:[],
  styles:[]
};
function stringadd(name) {
  console.log(allofit[name].length);
  if (allofit[name].length!=cutter[name].length) {
    var num=Math.floor(Math.random() * allofit[name].length);
    while(cutter[name].includes(allofit[name][num])){
      num=Math.floor(Math.random() * allofit[name].length);
    }
    document.getElementById("result").innerHTML+=allofit[name][num]+" ";
    cutter[name].push(allofit[name][num]);
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
    stringadd('attributes');
    stringadd('attributes');
    stringadd('types');
    break;
  default:
    stringadd(document.getElementById("op").value);
  }
}
function stringsplit() {
   document.getElementById("result").innerHTML+="| ";
}
function stringreset() {
  cutter={
    attributes:[],
    types:[],
    styles:[]
  };
  document.getElementById("result").innerHTML="Result: ";
}
