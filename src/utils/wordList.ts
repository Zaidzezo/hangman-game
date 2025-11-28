/**
 * Word List Utility
 * Contains all game words and helper function to select random words
 */
const WORDS = [
"apple","banana","orange","grape","mango","melon","lemon","berry","cherry","peach",
"apricot","kiwi","papaya","coconut","plum","pear","lime","date","fig","guava",

"table","chair","window","door","floor","ceiling","carpet","sofa","pillow","blanket",
"mirror","drawer","closet","shelf","candle","curtain","lamp","cupboard","basket","vase",

"river","ocean","island","forest","mountain","valley","desert","canyon","jungle","swamp",
"pond","stream","hill","glacier","volcano","shore","reef","waterfall","cave","beach",

"dog","cat","rabbit","hamster","mouse","lion","tiger","zebra","monkey","giraffe",
"elephant","rhino","hippo","panda","koala","camel","donkey","sheep","goat","horse",

"flower","rose","tulip","daisy","orchid","lily","violet","sunflower","iris","poppy",
"lavender","lotus","jasmine","marigold","hibiscus","peony","clover","fern","ivy","bamboo",

"cloud","storm","thunder","lightning","rainbow","winter","summer","spring","autumn","breeze",
"sunrise","sunset","weather","freeze","blizzard","foggy","windy","humid","stormy","drizzle",

"pizza","burger","fries","pasta","noodle","salad","steak","chicken","turkey","cheese",
"butter","bread","cookie","donut","candy","chocolate","honey","jam","yogurt","sugar",

"camera","phone","tablet","laptop","keyboard","mousepad","charger","battery","router","speaker",
"monitor","printer","scanner","remote","headset","earbuds","console","joystick","engine","robot",

"happy","funny","silly","smart","brave","angry","sleepy","proud","shy","joyful",
"excited","calm","gentle","kind","honest","friendly","polite","loyal","patient","curious",

"planet","earth","mars","venus","jupiter","saturn","uranus","neptune","galaxy","comet",
"meteor","asteroid","rocket","spaceship","gravity","orbit","cosmos","nebula","star","universe",

"music","guitar","piano","violin","drums","trumpet","singer","dancer","artist","actor",
"movie","theater","poetry","writer","story","novel","comic","drawing","painting","sculptor",

"school","teacher","student","pencil","marker","eraser","notebook","folder","binder","lesson",
"library","science","history","math","english","classroom","chalkboard","homework","project","college",

"garden","flowerpot","watering","shovel","rake","seed","soil","grass","branch","leaf",
"twig","roots","stem","vine","harvest","farmer","tractor","orchard","sprout","greenhouse",

"castle","king","queen","prince","princess","knight","dragon","wizard","magic","battle",
"sword","shield","arrow","helmet","kingdom","empire","fortress","village","cottage","palace",

"travel","ticket","airport","suitcase","passport","journey","hotel","hostel","subway","station",
"train","taxi","bus","flight","road","bridge","tunnel","border","harbor","compass",

"friend","family","brother","sister","mother","father","uncle","aunt","cousin","nephew",
"niece","neighbor","partner","child","baby","adult","people","human","stranger","visitor",

"color","red","blue","green","yellow","purple","orange","pink","brown","black",
"white","silver","gold","beige","peach","teal","navy","maroon","ivory","crimson",

"sport","soccer","tennis","basket","volley","boxing","karate","running","skating","swimming",
"cycling","golfing","hockey","wrestling","surfing","diving","climbing","training","fitness","athlete",

"computer","coding","program","software","browser","internet","website","network","password","screen",
"folder","upload","download","storage","server","keyboard","syntax","variable","function","object",

"jacket","tshirt","pants","jeans","socks","shoes","boots","hoodie","sweater","scarf",
"gloves","hat","cap","belt","dress","skirt","shorts","coat","uniform","sandals",

"circle","triangle","square","rectangle","diamond","puzzle","number","letter","symbol","pattern",
"design","texture","shape","model","figure","diagram","chart","graph","grid","layout",

"energy","battery","charge","power","voltage","electric","solar","windmill","hydro","engineer",
"worker","builder","driver","pilot","doctor","nurse","artist","trainer","farmer","chef",

"morning","evening","midnight","sunlight","shadow","darkness","twilight","moment","second","minute",
"hour","week","month","season","future","past","memory","feeling","dream","story",
];

/**
 * Returns a random word from the word list
 * @returns A random word in lowercase
 */
export function getRandomWord(): string {
  return WORDS[Math.floor(Math.random() * WORDS.length)].toLowerCase()
}