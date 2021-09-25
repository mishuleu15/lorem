const lorem = [
  `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
  `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
  `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
  `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,
  `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
  I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
  `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
  `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
  `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
  `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia leo vel ante aliquet, sed hendrerit justo fringilla. Curabitur vel velit nec arcu porta viverra et sodales libero. Ut ut consequat ligula, ut hendrerit nibh. Donec odio arcu, varius id lacus eget, sodales tempus lacus. In rutrum neque dolor, at dictum ante porta at. Praesent tempor aliquet congue. Aenean scelerisque congue ligula, in tempus lorem ornare eu. Nunc vehicula nisl in lorem volutpat, eu posuere odio tristique. Proin ligula leo, vulputate et pulvinar in, vehicula id nulla. Mauris vel lectus faucibus, commodo lacus quis, finibus ex. Aenean quis scelerisque ipsum. Phasellus justo nibh, vulputate sit amet vulputate non, porta quis lectus. Nullam vulputate condimentum urna, id interdum diam lobortis ac.`,
];

const input = document.querySelector("[name='searchTxt']");
const loremPara = document.querySelector('.lorem-para');
const btn = document.querySelector('#button');
const button = document.querySelector('button');
const selectLorem = document.querySelector('input[value=startLorem]');
const selectParagraphs = document.querySelector('input[value=paragraphs]');
const selectBytes = document.querySelector('input[value=bytes]');
const selectWords = document.querySelector('input[value=words]');

let arr = [];

let checked = false;

function addLoremPara() {
  for (let i = 0; i < input.value; i++) {
    let randomNumber = Math.floor(Math.random() * lorem.length);
    if (checked) {
      arr.push(lorem[lorem.length - 1]);
      checked = false;
    } else {
      arr.push(lorem[randomNumber]);
    }
    const para = document.createElement('p');
    para.textContent = arr[i];
    para.style.marginBottom = '2rem';
    loremPara.appendChild(para);
  }
  btn.setAttribute('disabled', 'disabled');
}

function addLoremBytes() {
  const arrBytes = [];
  const para = document.createElement('p');
  for (let i = 0; i < input.value; i++) {
    let randomNumber = Math.floor(Math.random() * lorem.length);
    if (checked) {
      arr.push(lorem[lorem.length - 1]);
      checked = false;
    } else {
      arr.push(lorem[randomNumber]);
    }

    arrBytes.push(arr[0][i]);
  }
  para.textContent = arrBytes.join('');
  loremPara.appendChild(para);
  btn.setAttribute('disabled', 'disabled');
}

function addLoremWords() {
  const arrBytes = [];
  const newArr = [];
  const para = document.createElement('p');
  for (let i = 0; i < input.value; i++) {
    let randomNumber = Math.floor(Math.random() * lorem.length);
    if (checked) {
      arr.push(lorem[lorem.length - 1]);
      checked = false;
    } else {
      arr.push(lorem[randomNumber]);
    }

    arrBytes.push(arr[i]);
    newArr.push(arrBytes.join().split(' ')[i]);
  }

  para.textContent = newArr.join(' ');
  loremPara.appendChild(para);
  btn.setAttribute('disabled', 'disabled');
}

function resetLorem() {
  location.reload();
  btn.removeAttribute('disabled', 'enabled');
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (selectParagraphs.checked) {
    addLoremPara();
  } else if (selectBytes.checked) {
    addLoremBytes();
  } else if (selectWords.checked) {
    addLoremWords();
  }
});

selectLorem.addEventListener('change', function () {
  if (this.checked) {
    checked = true;
  }
});

button.addEventListener('click', resetLorem);
