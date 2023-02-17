var otherDiv = document.getElementById('hid');
var allThing = document.getElementById('example');
var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c')
var d = document.getElementById('d');

const increaseH = 12.5;
const l1H = '0%';
const l2H = increaseH + '%';
const l3H = increaseH*2 + '%';
const l4H = increaseH*3 + '%';
const l5H = increaseH*4 + '%';
const l6H = increaseH*5 + '%';
const l7H = increaseH*6 + '%';

const increaseL = 5.5;
const l1L = '0%';
const l2L = increaseL + '%';
const l3L = increaseL*2 + '%';
const l4L = increaseL*3 + '%';
const l5L = increaseL*4 + '%';
const l6L = increaseL*5 + '%';
const l7L = increaseL*6 + '%';
const l8L = increaseL*7 + '%';
const l9L = increaseL*8 + '%';
const l10L = increaseL*9 + '%';
const l11L = increaseL*10 + '%';
const l12L = increaseL*11 + '%';
const l13L = increaseL*12 + '%';
const l14L = increaseL*13 + '%';
const l15L = increaseL*14 + '%';
const l16L = increaseL*15 + '%';
const l17L = increaseL*16 + '%';
const l18L = increaseL*17 + '%';

const oHInt = 15;
const oHIntInc = 50;
const oH1 = (oHIntInc*0) + oHInt + 'px';
const oH2 = (oHIntInc*1) + oHInt + 40 + 'px';

const oLInt = 15;
const oLIntInc = 75;
const oL1 = (oLIntInc*0) + oLInt + 'px';
const oL2 = (oLIntInc*1) + oLInt + 'px';
const oL3 = (oLIntInc*2) + oLInt + 'px';
const oL4 = (oLIntInc*3) + oLInt + 'px';
const oL5 = (oLIntInc*4) + oLInt + 'px';
const oL6 = (oLIntInc*5) + oLInt + 'px';
const oL7 = (oLIntInc*6) + oLInt + 'px';
const oL8 = (oLIntInc*7) + oLInt + 'px';
const oL9 = (oLIntInc*8) + oLInt + 'px';
const oL10 = (oLIntInc*9) + oLInt + 'px';
const oL11 = (oLIntInc*10) + oLInt + 'px';
const oL12 = (oLIntInc*11) + oLInt + 'px';
const oL13 = (oLIntInc*12) + oLInt + 'px';
const oL14 = (oLIntInc*13) + oLInt + 'px';
const oL15 = (oLIntInc*14) + oLInt + 'px';

class element {
    constructor(name, num, symbol, mass, row, column, group) {
        this.name = name;
        this.num = num;
        this.symbol = symbol;
        this.mass = mass;
        this.row = row;
        this.column = column;
        this.group = group;
        this.width;
        this.height;
    }
    makeDisplay(para) {
        var div = document.createElement('div');
        var elName = document.createElement('p');
        var atNum = document.createElement('p');
        var sym = document.createElement('h1');
        var mss = document.createElement('p');
        
        elName.innerText = this.name;
        atNum.innerText = this.num;
        sym.innerText = this.symbol;
        mss.innerText = this.mass;

        elName.style.display = 'block';
        elName.style.margin = '0px';
        elName.style.fontSize = '12px';

        atNum.style.display = 'block';
        atNum.style.margin = '0px';
        atNum.style.fontSize = '12px';

        sym.style.display = 'block';
        sym.style.margin = '0px';
        sym.style.fontSize = '25px'

        mss.style.display = 'block';
        mss.style.margin = '0px';
        mss.style.fontSize = '12px'

        div.appendChild(elName);
        div.appendChild(atNum);
        div.appendChild(sym);
        div.appendChild(mss);

        div.style.textAlign = 'center';
        div.style.border = '2px black solid'
        div.style.position = 'absolute';
        div.style.top = this.row;
        div.style.left = this.column;
        div.style.borderRadius = '20px';
        var t = this.num;
        div.setAttribute('id', t);

        

        if(para === 1) {
            if(this.group === 'Alkali Metal') {
                div.style.backgroundColor = 'red';
            }
            else if(this.group === 'Alkaline Earth') {
                div.style.backgroundColor = 'orange';
            }
            else if(this.group === 'Transition Metal') {
                div.style.backgroundColor = 'rgb(255, 252, 60)'; 
            }
            else if(this.group === 'Basic Metal') {
                div.style.backgroundColor = 'rgb(57, 225, 20)';
            }
            else if(this.group === 'Semimetal') {
                div.style.backgroundColor = 'skyblue'
            }
            else if(this.group === 'Nonmetal') {
                div.style.backgroundColor = 'rgb(131, 238, 255)';
            }
            else if(this.group === 'Halogen') {
                div.style.backgroundColor = 'rgb(130, 100, 237)';
            }
            else if(this.group === 'Noble Gas') {
                div.style.backgroundColor = 'rgb(70, 80, 205)';
            }
            else if(this.group === 'Lanthanide') {
                div.style.backgroundColor = 'rgb(255, 105, 180)';
            }
            else if(this.group === 'Actinide') {
                div.style.backgroundColor = 'grey';
            }
        }
        if(para === 2) {
            if(this.column === l1L || this.column === l2L) {
                div.style.backgroundColor = 'lightblue'
            }
            if(this.column === l1H && this.row === l18L) {
                div.style.backgroundColor = 'lightblue'
            }
            if(this.column === l3L || this.column === l4L || this.column === l5L || this.column === l6L || this.column === l7L || this.column === l8L || this.column === l9L || this.column === l10L || this.column === l11L || this.column === l12L) {
                div.style.backgroundColor = 'lightgreen'
            }
            if(this.column === l3L) {
                if(this.row === l6H || this.row === l7H) {
                    div.style.backgroundColor = 'red'
                }
            }
            if(this.column === l13L || this.column === l14L || this.column === l15L || this.column === l16L || this.column === l17L || this.column === l18L) {
                div.style.backgroundColor = 'mediumorchid';
            }


            if(this.column === oL1 || this.column === oL2 || this.column === oL3 || this.column === oL4 || this.column === oL5 || this.column === oL6 || this.column === oL7 || this.column === oL8 || this.column === oL9 || this.column === oL10 || this.column === oL11 || this.column === oL12 || this.column === oL13 || this.column === oL14 || this.column === oL15) {
                div.style.backgroundColor = 'red'
            }
        }



        if(this.num <= 56) {
            div.style.zIndex = '1';
            div.setAttribute('class', 'box');
            document.getElementById('test').appendChild(div);
        }
        if(this.num >= 72 && this.num <= 88) {
            div.style.zIndex = '1';
            div.setAttribute('class', 'box');
            document.getElementById('test').appendChild(div);
        }
        if(this.num >= 104 && this.num <= 118) {
            div.style.zIndex = '1';
            div.setAttribute('class', 'box');
            document.getElementById('test').appendChild(div);
        }
        else if(this.num === '57-71' || this.num === '89-103') {
            div.style.zIndex = '1';
            div.setAttribute('class', 'now');
            document.getElementById('test').appendChild(div);
            var asdf = 1; 
            div.addEventListener('click', function() {
                if(asdf === 1) {
                    otherDiv.style.display = 'initial';
                    asdf++;
                }
                else if(asdf === 2) {
                    otherDiv.style.display = 'none';
                    asdf--;
                }
            });
        }
        else if(this.num >= 57 && this.num <= 71) {
            div.setAttribute('class', 'oof');
            otherDiv.appendChild(div);
        }
        else if(this.num >= 89 && this.num <= 103) {
            div.setAttribute('class', 'oof');
            otherDiv.appendChild(div);
        }


        if(this.elName === 'Nonmetals' || this.elName === 'Noble Gasses' || this.elName === 'Alkali Metals' || this.elName === 'Alkaline Earths' || this.elName === 'Basic Metals' || this.elName === 'Semimetals' || this.elName === 'Halogens' || this.elName === 'Transition Metals' || this.elName === 'Lanthanides' || this.elName === 'Actinides') {
            document.getElementById('identify').appendChild(div);
        }

        var v = 0;
        if((this.num/1) === this.num) {
            div.addEventListener('click', function() {
                if(v === 0) {
                }
            })
        }

        if(div.getAttribute('class') === 'box' || div.getAttribute('class') === 'now') {
            div.style.width = 5.35 + '%';
            div.style.height = 12.3 + '%';
        }
        if(div.getAttribute('class') === 'oof') {
            div.style.width = 8.5 + '%';
            div.style.height = 38 + '%';
        }
        
        div.addEventListener('mouseover', function() {
            var p = document.getElementById(div.getAttribute('id'));
            if(div.getAttribute('class') === 'box') {
                a.innerText = div.firstChild.innerText;
                b.innerText = div.children.item(1).innerText;
                c.innerText = div.children.item(2).innerText;
                d.innerText = div.lastChild.innerText;
                allThing.style.color = 'black';
                allThing.style.backgroundColor = div.style.backgroundColor;
                p.style.width = 7.13 + '%';
                p.style.height = 16.4 + '%';
                p.style.zIndex = '100';
            }
            if(div.getAttribute('class') === 'oof') {
                a.innerText = div.firstChild.innerText;
                b.innerText = div.children.item(1).innerText;
                c.innerText = div.children.item(2).innerText;
                d.innerText = div.lastChild.innerText;
                allThing.style.color = 'black';
                allThing.style.backgroundColor = div.style.backgroundColor;
                p.style.width = 8.5 + '%';
                p.style.height = 50 + '%';
                p.style.zIndex = '100';
            } 
        });
        div.addEventListener('mouseleave', function() {
            a.innerText = 'Element Name';
            b.innerText = 'Atomic Number';
            c.innerText = 'Atomic Symbol';
            d.innerText = 'Atomic Mass';
            allThing.style.backgroundColor = 'black'
            allThing.style.color = 'white'
            var l = document.getElementsByClassName('box');
            var pk = document.getElementsByClassName('now');
            var o = document.getElementsByClassName('oof');
            for(var i = 0; i < l.length; i++) { 
                l[i].style.width = 5.35 + '%';
                l[i].style.height = 12.3 + '%';
                l[i].style.zIndex = '1';
            }
            for(var r = 0; r < pk.length; r++) { 
                pk[r].style.width = 5.35 + '%';
                pk[r].style.height = 12.3 + '%';
                pk[r].style.zIndex = '1';
            }
            for(var m = 0; m < o.length; m++) {
                o[m].style.width = 6.3 + '%';
                o[m].style.height = 38 + '%';
                o[m].style.zIndex = '1';
            }
        })
    }
    getWidth() {
        alert(this.width)
    }
    getHeight() {
        alert(this.height);
    }
    getTop() {
        return(this.column);
    }
}

const hydrogen = new element("Hydrogen", 1,  "H", 1.01, l1H, l1L, 'Nonmetal');
const javenium = new element("Javenium", 1.5, 'Ja', 254.07, l1H, l2L, 'Noble Gas')
const helium = new element("Helium", 2, "He", 4.00, l1H, l18L, 'Noble Gas');
const lithium = new element("Lithium", 3, "Li", 6.94, l2H, l1L, 'Alkali Metal');
const beryllium = new element("Beryllium", 4, "Be", 9.01, l2H, l2L, 'Alkaline Earth') ;
const boron = new element("Boron", 5, "B", 10.81, l2H, l13L, 'Semimetal');
const carbon = new element("Carbon", 6, "C", 12.01, l2H, l14L, 'Nonmetal');
const nitrogen = new element("Nitrogen", 7, "N", 14.01, l2H, l15L, 'Nonmetal');
const oxygen = new element("Oxygen", 8, "O", 16.00, l2H, l16L, 'Nonmetal');
const flourine = new element("Flourine", 9, "F", 18.998, l2H, l17L, 'Halogen');
const neon = new element("Neon", 10, "Ne", 20.180, l2H, l18L, 'Noble Gas');
const soduim = new element("Sodium", 11, "Na", 22.990, l3H, l1L, 'Alkali Metal');
const magnesium = new element("Magnesium", 12, "Mg", 24.305, l3H, l2L, 'Alkaline Earth');
const aluminum = new element("Aluminum", 13, "Al", 26.982, l3H, l13L, 'Basic Metal');
const silicon = new element("Silicon", 14, "Si", 28.086, l3H, l14L, 'Semimetal');
const phosphorus = new element("Phosphorus", 15, "P", 30.974, l3H, l15L, 'Nonmetal');
const sulfur = new element("Sulfur", 16, "S", 32.066, l3H, l16L, 'Nonmetal');
const chlorine = new element("Chlorine", 17, "Cl", 35.453, l3H, l17L, 'Halogen');
const argon = new element("Argon", 18, "Ar", 39.948, l3H, l18L, 'Noble Gas');
const potassium = new element("Potassium", 19, "K", 39.098, l4H, l1L, 'Alkali Metal');
const calcium = new element("Calcium", 20, "Ca", 40.078, l4H, l2L, 'Alkaline Earth');
const scandium = new element("Scandium", 21, "Sc", 44.956, l4H, l3L, 'Transition Metal');
const titanium = new element("Titanium", 22, "Ti", 47.867, l4H, l4L, 'Transition Metal');
const vanadium = new element("Vanadium", 23, "V", 50.942, l4H, l5L, 'Transition Metal');
const chromium = new element("Chromium", 24, "Cr", 51.996, l4H, l6L, 'Transition Metal');
const manganese = new element("Manganese", 25, "Mn", 54.938, l4H, l7L, 'Transition Metal');
const iron = new element("Iron", 26, "Fe", 55.845,  l4H, l8L, 'Transition Metal');
const cobalt = new element("Cobalt", 27, "Co", 58.933, l4H, l9L, 'Transition Metal');
const nickel = new element("Nickel", 28, "Ni", 58.693, l4H, l10L, 'Transition Metal');
const copper = new element("Copper", 29, "Cu", 63.546, l4H, l11L, 'Transition Metal');
const zinc = new element("Zinc", 30, "Zn", 65.38, l4H, l12L, 'Transition Metal');
const gallium = new element("Gallium", 31, "Ga", 69.723, l4H, l13L, 'Basic Metal');
const germanium = new element("Germanium", 32, "Ge", 72.631, l4H, l14L, 'Semimetal');
const arsenic = new element("Arsenic", 33, "As", 74.922, l4H, l15L, 'Semimetal');
const selenium = new element("Selenium", 34, "Se", 78.972, l4H, l16L, 'Nonmetal');
const bromine = new element("Bromine", 35, "Br", 79.904, l4H, l17L, 'Halogen');
const krypton = new element("Krypton", 36, "Kr", 83.798, l4H, l18L, 'Noble Gas');
const rubidium = new element("Robidium", 37, "Rb", 85.468, l5H, l1L, 'Alkali Metal');
const strontium = new element("Strontium", 38, "Sr", 87.62, l5H, l2L, 'Alkaline Earth');
const yttrium = new element("Yttrium", 39, "Y", 88.906, l5H, l3L, 'Transition Metal');
const zirconium = new element("Zirconium", 40, "Zr", 91.224, l5H, l4L, 'Transition Metal');
const niobium = new element("Niobium", 41, "Nb", 92.906, l5H, l5L, 'Transition Metal');
const molybdenum = new element("Molybdenum", 42, "Mo", 95.95, l5H, l6L, 'Transition Metal');
const technetium = new element("Technetium", 43, "Tc", 98.907, l5H, l7L, 'Transition Metal');
const ruthenium = new element("Ruthenium", 44, "Ru", 101.07, l5H, l8L, 'Transition Metal');
const rhodium = new element("Rhodium", 45, "Rh", 102.906, l5H, l9L, 'Transition Metal');
const palladium = new element("Palladium", 46, "Pd", 106.42, l5H, l10L, 'Transition Metal');
const silver = new element("Silver", 47, "Ag", 107.868, l5H, l11L, 'Transition Metal');
const cadmium = new element("Cadmium", 48, "Cd", 112.411, l5H, l12L, 'Transition Metal');
const indium = new element("Indium", 49, "In", 114.818, l5H, l13L, 'Basic Metal');
const tin = new element("Tin", 50, "Sn", 118.711, l5H, l14L, 'Basic Metal');
const antimony = new element("Antimony", 51, "Sb", 121.760, l5H, l15L, 'Semimetal');
const tellurium = new element("Tellurium", 52, "Te", 127.6, l5H, l16L, 'Semimetal');
const iodine = new element("Iodine", 53, "I", 126.904, l5H, l17L, 'Halogen');
const xenon = new element("Xenon", 54, "Xe",131.294 , l5H, l18L, 'Noble Gas');
const cesium = new element("Cesium", 55, "Cs", 132.906, l6H, l1L, "Alkali Metal");
const barium = new element("Barium", 56, "Ba", 137.328, l6H, l2L, "Alkaline Earth");
const francium = new element("Francium", 87, "Fr", 223.020, l7H, l1L, "Alkali Metal");
const radium = new element("Radium", 88, "Ra", 226.025, l7H, l2L, "Alkaline Earth");
const empty = new element("", '57-71', " ", 'Click Me!', l6H, l3L, "Lanthanide");
const empty2 = new element(" ", '89-103', "", 'Click Me!', l7H, l3L, "Actinide");
const lanthanum = new element("Lanthanum", 57, "La", 138.9055, oH1, oL1, 'Lanthanide');
const cerium = new element("Cerium", 58, "Ce", 140.116, oH1, oL2, "Lanthanide");
const praseodymium = new element("Praseodymium", 59, "Pr", 140.908, oH1, oL3, "Lanthanide");
const neodymium = new element("Neodymium", 60, "Nd", 144.243, oH1, oL4, "Lanthanide");
const promethium = new element("Promethium", 61, "Pm", 144.913, oH1, oL5, "Lanthanide");
const samarium = new element("Samarium", 62, "Sm", 150.36, oH1, oL6, "Lanthanide");
const europium = new element("Europium", 63, "Eu", 151.964, oH1, oL7, "Lanthanide");
const gadolinium = new element("Gadolinium", 64, "Gd", 157.25, oH1, oL8, "Lanthanide");
const terbium = new element("Terbium", 65, "Tb", 158.925, oH1, oL9, "Lanthanide");
const dysprosium = new element("Dysprosium", 66, "Dy", 162.500, oH1, oL10, "Lanthanide");
const holmium = new element("Holmium", 67, "Ho", 164.930, oH1, oL11, "Lanthanide");
const erbium = new element("Erbium", 68, "Er", 167.259, oH1, oL12, "Lanthanide");
const thulium = new element("Thulium", 69, "Tm", 168.934, oH1, oL13, "Lanthanide");
const ytterbium = new element("Ytterbium", 70, "Yb", 173.055, oH1, oL14, "Lanthanide");
const lutetium = new element("Lutetium", 71, "Lu", 174.967, oH1, oL15, "Lanthanide");
const hafnium = new element("Hafnium", 72, "Hf", 178.49, l6H, l4L, "Transition Metal");
const tantalum = new element("Tantalum", 73, "Ta", 180.948, l6H, l5L, "Transition Metal");
const tungsten = new element("Tungsten", 74, "W", 183.84, l6H, l6L, "Transition Metal");
const rhenium = new element("Rhenium", 75, "Re", 186.207, l6H, l7L, "Transition Metal");
const osmium = new element("Osmium", 76, "Os", 190.23, l6H, l8L, "Transition Metal");
const iridium = new element("Iridium", 77, "Ir", 192.217, l6H, l9L, "Transition Metal");
const platinum = new element("Platinum", 78, "Pt", 195.085, l6H, l10L, "Transition Metal");
const gold = new element("Gold", 79, "Au", 196.967, l6H, l11L, "Transition Metal");
const mercury = new element("Mercury", 80, "Hg", 200.592, l6H, l12L, "Transition Metal");
const thallium = new element("Thallium", 81, "Tl", 204.383, l6H, l13L, "Basic Metal");
const lead = new element("Lead", 82, "Pb", 207.2, l6H, l14L, "Basic Metal");
const bismuth = new element("Bismuth", 83, "Bi", 208.980, l6H, l15L, "Basic Metal");
const polonium = new element("Polonium", 84, "Po", 208.982, l6H, l16L, "Semimetal");
const astatine = new element("Astatine", 85, "At", 209.987, l6H, l17L, "Halogen");
const radon = new element("Radon", 86, "Rn", 222.018, l6H, l18L, "Noble Gas");
const actinium = new element("Actinium", 89, "Ac", 227.028, oH2, oL1, "Actinide");
const throium = new element("Thorium", 90, "Th", 232.038, oH2, oL2, "Actinide");
const protactinium = new element("Protactinium", 91, "Pa", 231.036, oH2, oL3, "Actinide");
const uranium = new element("Uranium", 92, "U", 238.029, oH2, oL4, "Actinide");
const neptunium = new element("Neptunium", 93, "Np", 237.048, oH2, oL5, "Actinide");
const plutonium = new element("Plutonium", 94, "Pu", 244.064, oH2, oL6, "Actinide");
const americium = new element("Americium", 95, "Am", 243.061, oH2, oL7, "Actinide");
const curium = new element("Curium", 96, "Cm", 247.070, oH2, oL8, "Actinide");
const berkelium = new element("Berkelium", 97, "Bk", 247.070, oH2, oL9, "Actinide");
const californium = new element("Californium", 98, "Cf", 251.080, oH2, oL10, "Actinide");
const einsteinium = new element("Einsteinium", 99, "Es", [254], oH2, oL11, "Actinide");
const fermium = new element("Fermium", 100, "Fm", 257.095, oH2, oL12, "Actinide");
const mendelevium = new element("Mendelevium", 101, "Md", 258.1, oH2, oL13, "Actinide");
const nobelium = new element("Nobelium", 102, "No", 259.101, oH2, oL14, "Actinide");
const lawrencium = new element("Lawrencium", 103, "Lr", [262], oH2, oL15, "Actinide");
const rutherfordium = new element("Rutherfordium", 104, "Rf", [261], l7H, l4L, "Transition Metal");
const dubnium = new element("Dubnium", 105, "Db", [262], l7H, l5L, "Transition Metal");
const seaborgium = new element("Seaborgium", 106, "Sg", [266], l7H, l6L, "Transition Metal");
const bohrium = new element("Bohrium", 107, "Bh", [264], l7H, l7L, "Transition Metal");
const hassium = new element("Hassium", 108, "Hs", [269], l7H, l8L, "Transition Metal");
const meltnerium = new element("Meltnerium", 109, "Mt", [278], l7H, l9L, "Transition Metal");
const darmstadtium = new element("Darmstadtium", 110, "Ds", [281], l7H, l10L, "Transition Metal");
const roentgenium = new element('Roentgenium', 111, 'Rg', [280], l7H, l11L, 'Transition Metal');
const copernicium = new element('Copernicium', 112, 'Cn', [285], l7H, l12L, 'Transition Metal');
const nihonium = new element('Nihonium', 113, 'Nh', [286], l7H, l13L, 'Basic Metal');
const flerovium = new element('Flerovium', 114, 'Fl', [289], l7H, l14L, 'Basic Metal');
const moscovium = new element('Moscovium', 115, 'Mc', [286], l7H, l15L, 'Basic Metal');
const livermorium = new element('Livermorium', 116, 'Lv', [293], l7H, l16L, 'Basic Metal');
const tennessine = new element('Tennessine', 117, 'Ts', [294], l7H, l17L, 'Halogen');
const oganesson = new element('Oganesson', 118, 'Og', [294], l7H, l18L, 'Noble Gas');
const one = new element('Nonmetals', 1000, '', '', '40px', '215px', 'Nonmetal');
const two = new element('Noble Gasses', 1001, '', '', '40px', '290px', 'Noble Gas');
const three = new element('Alkali Metals', 1002, '', '', '40px', '366px', 'Alkali Metal');
const four = new element('Alkaline Earths', 1003, '', '', '40px', '441px', 'Alkaline Earth');
const five = new element('Semimetals', 1004, '', '', '40px', '516px', 'Semimetal');
const six = new element('Basic Metals', 1005, '', '', '118px', '215px', 'Basic Metal');
const seven = new element('Halogens', 1006, '', '', '118px', '290px', 'Halogen');
const eight = new element('Transition Metals', 1007, '', '', '118px', '366px', 'Transition Metal');
const nine = new element('Lanthanide', 1008, '', '', '118px', '441px', 'Lanthanide');
const ten = new element('Actinide', 1009, '', '', '118px', '516px', 'Actinide');
var bob = 1;

function change() {
    if(bob === 1) {
        bob = 2;
    }
    else{
        bob = 1;
    }
}
hydrogen.makeDisplay(bob);
javenium.makeDisplay(bob);
helium.makeDisplay(bob);
lithium.makeDisplay(bob);
beryllium.makeDisplay(bob);
boron.makeDisplay(bob);
carbon.makeDisplay(bob);
nitrogen.makeDisplay(bob);
oxygen.makeDisplay(bob);
flourine.makeDisplay(bob);
neon.makeDisplay(bob);
soduim.makeDisplay(bob);
magnesium.makeDisplay(bob);
aluminum.makeDisplay(bob);
silicon.makeDisplay(bob);
phosphorus.makeDisplay(bob);
sulfur.makeDisplay(bob);
chlorine.makeDisplay(bob);
argon.makeDisplay(bob);
potassium.makeDisplay(bob);
calcium.makeDisplay(bob);
scandium.makeDisplay(bob);
titanium.makeDisplay(bob);
vanadium.makeDisplay(bob);
chromium.makeDisplay(bob);
manganese.makeDisplay(bob);
iron.makeDisplay(bob);
cobalt.makeDisplay(bob);
nickel.makeDisplay(bob);
copper.makeDisplay(bob);
zinc.makeDisplay(bob);
gallium.makeDisplay(bob);
germanium.makeDisplay(bob);
arsenic.makeDisplay(bob);
selenium.makeDisplay(bob);
bromine.makeDisplay(bob);
krypton.makeDisplay(bob);
rubidium.makeDisplay(bob);
strontium.makeDisplay(bob);
yttrium.makeDisplay(bob);
zirconium.makeDisplay(bob);
niobium.makeDisplay(bob);
molybdenum.makeDisplay(bob);
technetium.makeDisplay(bob);
ruthenium.makeDisplay(bob);
rhodium.makeDisplay(bob);
palladium.makeDisplay(bob);
silver.makeDisplay(bob);
cadmium.makeDisplay(bob);
indium.makeDisplay(bob);
tin.makeDisplay(bob);
antimony.makeDisplay(bob);
tellurium.makeDisplay(bob);
iodine.makeDisplay(bob);
xenon.makeDisplay(bob);
cesium.makeDisplay(bob);
barium.makeDisplay(bob);
francium.makeDisplay(bob);
radium.makeDisplay(bob);
empty.makeDisplay(bob);
empty2.makeDisplay(bob);
lanthanum.makeDisplay(bob);
cerium.makeDisplay(bob);
praseodymium.makeDisplay(bob);
neodymium.makeDisplay(bob);
promethium.makeDisplay(bob);
samarium.makeDisplay(bob);
europium.makeDisplay(bob);
gadolinium.makeDisplay(bob);
terbium.makeDisplay(bob);
dysprosium.makeDisplay(bob);
holmium.makeDisplay(bob);
erbium.makeDisplay(bob);
thulium.makeDisplay(bob);
ytterbium.makeDisplay(bob);
lutetium.makeDisplay(bob);
hafnium.makeDisplay(bob);
tantalum.makeDisplay(bob);
tungsten.makeDisplay(bob);
rhenium.makeDisplay(bob);
osmium.makeDisplay(bob);
iridium.makeDisplay(bob);
platinum.makeDisplay(bob);
gold.makeDisplay(bob);
mercury.makeDisplay(bob);
thallium.makeDisplay(bob);
lead.makeDisplay(bob);
bismuth.makeDisplay(bob);
polonium.makeDisplay(bob);
astatine.makeDisplay(bob);
radon.makeDisplay(bob);
actinium.makeDisplay(bob);
throium.makeDisplay(bob);
protactinium.makeDisplay(bob);
uranium.makeDisplay(bob);
neptunium.makeDisplay(bob);
plutonium.makeDisplay(bob);
americium.makeDisplay(bob);
curium.makeDisplay(bob);
berkelium.makeDisplay(bob);
californium.makeDisplay(bob);
einsteinium.makeDisplay(bob);
fermium.makeDisplay(bob);
mendelevium.makeDisplay(bob);
nobelium.makeDisplay(bob);
lawrencium.makeDisplay(bob);
rutherfordium.makeDisplay(bob);
dubnium.makeDisplay(bob);
seaborgium.makeDisplay(bob);
bohrium.makeDisplay(bob);
hassium.makeDisplay(bob);
meltnerium.makeDisplay(bob);
darmstadtium.makeDisplay(bob);
roentgenium.makeDisplay(bob);
copernicium.makeDisplay(bob);
nihonium.makeDisplay(bob);
flerovium.makeDisplay(bob);
moscovium.makeDisplay(bob);
livermorium.makeDisplay(bob);
tennessine.makeDisplay(bob);
oganesson.makeDisplay(bob);
one.makeDisplay(bob);
two.makeDisplay(bob);
three.makeDisplay(bob);
four.makeDisplay(bob);
five.makeDisplay(bob);
six.makeDisplay(bob);
seven.makeDisplay(bob);
eight.makeDisplay(bob);
nine.makeDisplay(bob);
ten.makeDisplay(bob);
