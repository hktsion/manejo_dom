'use strict';
var datos = [
[{"id":"060840","salida":"08:40","sinDevolucion":3,"conDevolucion":14,"normal":2},{"id":"060940","salida":"09:40","sinDevolucion":38,"conDevolucion":1,"normal":23},{"id":"061040","salida":"10:40","sinDevolucion":25,"conDevolucion":3,"normal":45},{"id":"061220","salida":"12:20","sinDevolucion":4,"conDevolucion":8,"normal":1},{"id":"061310","salida":"13:10","sinDevolucion":16,"conDevolucion":11,"normal":29},{"id":"061510","salida":"15:10","sinDevolucion":25,"conDevolucion":1,"normal":18},{"id":"061640","salida":"16:40","sinDevolucion":1,"conDevolucion":3,"normal":5},{"id":"061740","salida":"17:40","sinDevolucion":34,"conDevolucion":2,"normal":22},{"id":"061840","salida":"18:40","sinDevolucion":2,"conDevolucion":20,"normal":23},{"id":"061930","salida":"19:30","sinDevolucion":5,"conDevolucion":28,"normal":44},{"id":"062140","salida":"21:40","sinDevolucion":2,"conDevolucion":30,"normal":42}],
[{"id":"070940","salida":"09:40","sinDevolucion":38,"conDevolucion":0,"normal":34},{"id":"071040","salida":"10:40","sinDevolucion":20,"conDevolucion":22,"normal":7},{"id":"071220","salida":"12:20","sinDevolucion":24,"conDevolucion":5,"normal":6},{"id":"071310","salida":"13:10","sinDevolucion":19,"conDevolucion":5,"normal":44},{"id":"071510","salida":"15:10","sinDevolucion":1,"conDevolucion":0,"normal":7},{"id":"071640","salida":"16:40","sinDevolucion":16,"conDevolucion":3,"normal":19},{"id":"071740","salida":"17:40","sinDevolucion":9,"conDevolucion":20,"normal":43},{"id":"071840","salida":"18:40","sinDevolucion":21,"conDevolucion":19,"normal":37},{"id":"071930","salida":"19:30","sinDevolucion":33,"conDevolucion":3,"normal":24},{"id":"072010","salida":"20:10","sinDevolucion":21,"conDevolucion":9,"normal":21},{"id":"072140","salida":"21:40","sinDevolucion":26,"conDevolucion":12,"normal":43}],
[{"id":"080940","salida":"09:40","sinDevolucion":7,"conDevolucion":4,"normal":21},{"id":"081040","salida":"10:40","sinDevolucion":40,"conDevolucion":0,"normal":22},{"id":"081220","salida":"12:20","sinDevolucion":8,"conDevolucion":33,"normal":35},{"id":"081310","salida":"13:10","sinDevolucion":38,"conDevolucion":7,"normal":2},{"id":"081510","salida":"15:10","sinDevolucion":27,"conDevolucion":5,"normal":36},{"id":"081640","salida":"16:40","sinDevolucion":5,"conDevolucion":33,"normal":15},{"id":"081740","salida":"17:40","sinDevolucion":29,"conDevolucion":6,"normal":26},{"id":"081840","salida":"18:40","sinDevolucion":40,"conDevolucion":2,"normal":35},{"id":"081930","salida":"19:30","sinDevolucion":19,"conDevolucion":23,"normal":12},{"id":"082140","salida":"21:40","sinDevolucion":18,"conDevolucion":1,"normal":32}],
[{"id":"090940","salida":"09:40","sinDevolucion":9,"conDevolucion":23,"normal":31},{"id":"091040","salida":"10:40","sinDevolucion":10,"conDevolucion":34,"normal":44},{"id":"091220","salida":"12:20","sinDevolucion":39,"conDevolucion":2,"normal":2},{"id":"091310","salida":"13:10","sinDevolucion":37,"conDevolucion":0,"normal":28},{"id":"091510","salida":"15:10","sinDevolucion":35,"conDevolucion":4,"normal":9},{"id":"091640","salida":"16:40","sinDevolucion":45,"conDevolucion":0,"normal":1},{"id":"091740","salida":"17:40","sinDevolucion":24,"conDevolucion":15,"normal":45},{"id":"091840","salida":"18:40","sinDevolucion":45,"conDevolucion":0,"normal":21},{"id":"091930","salida":"19:30","sinDevolucion":25,"conDevolucion":10,"normal":34},{"id":"092140","salida":"21:40","sinDevolucion":35,"conDevolucion":0,"normal":43}],
[{"id":"100940","salida":"09:40","sinDevolucion":20,"conDevolucion":23,"normal":6},{"id":"101040","salida":"10:40","sinDevolucion":20,"conDevolucion":23,"normal":31},{"id":"101220","salida":"12:20","sinDevolucion":1,"conDevolucion":26,"normal":27},{"id":"101310","salida":"13:10","sinDevolucion":28,"conDevolucion":11,"normal":22},{"id":"101510","salida":"15:10","sinDevolucion":43,"conDevolucion":2,"normal":28},{"id":"101640","salida":"16:40","sinDevolucion":34,"conDevolucion":4,"normal":0},{"id":"101740","salida":"17:40","sinDevolucion":25,"conDevolucion":19,"normal":33},{"id":"101840","salida":"18:40","sinDevolucion":1,"conDevolucion":35,"normal":40},{"id":"101930","salida":"19:30","sinDevolucion":36,"conDevolucion":7,"normal":12},{"id":"102140","salida":"21:40","sinDevolucion":12,"conDevolucion":32,"normal":43}],
[{"id":"110940","salida":"09:40","sinDevolucion":24,"conDevolucion":15,"normal":6},{"id":"111040","salida":"10:40","sinDevolucion":8,"conDevolucion":8,"normal":21},{"id":"111220","salida":"12:20","sinDevolucion":4,"conDevolucion":0,"normal":29},{"id":"111310","salida":"13:10","sinDevolucion":37,"conDevolucion":1,"normal":36},{"id":"111510","salida":"15:10","sinDevolucion":21,"conDevolucion":15,"normal":21},{"id":"111640","salida":"16:40","sinDevolucion":0,"conDevolucion":17,"normal":12},{"id":"111740","salida":"17:40","sinDevolucion":3,"conDevolucion":21,"normal":15},{"id":"111840","salida":"18:40","sinDevolucion":38,"conDevolucion":0,"normal":45},{"id":"111930","salida":"19:30","sinDevolucion":14,"conDevolucion":11,"normal":0},{"id":"112140","salida":"21:40","sinDevolucion":44,"conDevolucion":1,"normal":23}],
[{"id":"120940","salida":"09:40","sinDevolucion":15,"conDevolucion":14,"normal":32},{"id":"121040","salida":"10:40","sinDevolucion":1,"conDevolucion":11,"normal":39},{"id":"121220","salida":"12:20","sinDevolucion":28,"conDevolucion":17,"normal":41},{"id":"121310","salida":"13:10","sinDevolucion":36,"conDevolucion":3,"normal":24},{"id":"121510","salida":"15:10","sinDevolucion":20,"conDevolucion":14,"normal":24},{"id":"121640","salida":"16:40","sinDevolucion":0,"conDevolucion":44,"normal":19},{"id":"121740","salida":"17:40","sinDevolucion":1,"conDevolucion":0,"normal":22},{"id":"121840","salida":"18:40","sinDevolucion":44,"conDevolucion":0,"normal":41},{"id":"121930","salida":"19:30","sinDevolucion":6,"conDevolucion":32,"normal":39},{"id":"122140","salida":"21:40","sinDevolucion":3,"conDevolucion":7,"normal":42}],
[{"id":"130840","salida":"08:40","sinDevolucion":28,"conDevolucion":10,"normal":39},{"id":"130940","salida":"09:40","sinDevolucion":2,"conDevolucion":39,"normal":9},{"id":"131040","salida":"10:40","sinDevolucion":14,"conDevolucion":26,"normal":12},{"id":"131220","salida":"12:20","sinDevolucion":32,"conDevolucion":11,"normal":15},{"id":"131310","salida":"13:10","sinDevolucion":40,"conDevolucion":3,"normal":35},{"id":"131510","salida":"15:10","sinDevolucion":37,"conDevolucion":7,"normal":3},{"id":"131640","salida":"16:40","sinDevolucion":8,"conDevolucion":7,"normal":38},{"id":"131740","salida":"17:40","sinDevolucion":18,"conDevolucion":20,"normal":41},{"id":"131840","salida":"18:40","sinDevolucion":12,"conDevolucion":18,"normal":27},{"id":"131930","salida":"19:30","sinDevolucion":21,"conDevolucion":21,"normal":43},{"id":"132140","salida":"21:40","sinDevolucion":4,"conDevolucion":33,"normal":19}],
[{"id":"140940","salida":"09:40","sinDevolucion":4,"conDevolucion":27,"normal":37},{"id":"141040","salida":"10:40","sinDevolucion":41,"conDevolucion":2,"normal":0},{"id":"141220","salida":"12:20","sinDevolucion":34,"conDevolucion":9,"normal":4},{"id":"141310","salida":"13:10","sinDevolucion":18,"conDevolucion":8,"normal":18},{"id":"141510","salida":"15:10","sinDevolucion":41,"conDevolucion":0,"normal":18},{"id":"141640","salida":"16:40","sinDevolucion":10,"conDevolucion":9,"normal":41},{"id":"141740","salida":"17:40","sinDevolucion":26,"conDevolucion":6,"normal":26},{"id":"141840","salida":"18:40","sinDevolucion":42,"conDevolucion":3,"normal":35},{"id":"141930","salida":"19:30","sinDevolucion":9,"conDevolucion":17,"normal":40},{"id":"142010","salida":"20:10","sinDevolucion":31,"conDevolucion":3,"normal":28},{"id":"142140","salida":"21:40","sinDevolucion":20,"conDevolucion":1,"normal":0}],
[{"id":"150940","salida":"09:40","sinDevolucion":27,"conDevolucion":6,"normal":29},{"id":"151040","salida":"10:40","sinDevolucion":37,"conDevolucion":7,"normal":13},{"id":"151220","salida":"12:20","sinDevolucion":18,"conDevolucion":23,"normal":35},{"id":"151310","salida":"13:10","sinDevolucion":36,"conDevolucion":4,"normal":44},{"id":"151510","salida":"15:10","sinDevolucion":24,"conDevolucion":10,"normal":1},{"id":"151640","salida":"16:40","sinDevolucion":24,"conDevolucion":19,"normal":38},{"id":"151740","salida":"17:40","sinDevolucion":8,"conDevolucion":11,"normal":15},{"id":"151840","salida":"18:40","sinDevolucion":0,"conDevolucion":38,"normal":0},{"id":"151930","salida":"19:30","sinDevolucion":8,"conDevolucion":8,"normal":17},{"id":"152140","salida":"21:40","sinDevolucion":19,"conDevolucion":21,"normal":5}],
[{"id":"160940","salida":"09:40","sinDevolucion":16,"conDevolucion":18,"normal":1},{"id":"161040","salida":"10:40","sinDevolucion":12,"conDevolucion":16,"normal":33},{"id":"161220","salida":"12:20","sinDevolucion":44,"conDevolucion":0,"normal":8},{"id":"161310","salida":"13:10","sinDevolucion":9,"conDevolucion":19,"normal":43},{"id":"161510","salida":"15:10","sinDevolucion":25,"conDevolucion":0,"normal":7},{"id":"161640","salida":"16:40","sinDevolucion":13,"conDevolucion":31,"normal":20},{"id":"161740","salida":"17:40","sinDevolucion":27,"conDevolucion":0,"normal":23},{"id":"161840","salida":"18:40","sinDevolucion":15,"conDevolucion":28,"normal":0},{"id":"161930","salida":"19:30","sinDevolucion":24,"conDevolucion":13,"normal":6},{"id":"162140","salida":"21:40","sinDevolucion":19,"conDevolucion":6,"normal":30}],
[{"id":"170940","salida":"09:40","sinDevolucion":19,"conDevolucion":12,"normal":30},{"id":"171040","salida":"10:40","sinDevolucion":32,"conDevolucion":8,"normal":33},{"id":"171220","salida":"12:20","sinDevolucion":13,"conDevolucion":28,"normal":26},{"id":"171310","salida":"13:10","sinDevolucion":4,"conDevolucion":17,"normal":22},{"id":"171510","salida":"15:10","sinDevolucion":43,"conDevolucion":1,"normal":13},{"id":"171640","salida":"16:40","sinDevolucion":32,"conDevolucion":4,"normal":29},{"id":"171740","salida":"17:40","sinDevolucion":24,"conDevolucion":6,"normal":0},{"id":"171840","salida":"18:40","sinDevolucion":3,"conDevolucion":11,"normal":43},{"id":"171930","salida":"19:30","sinDevolucion":7,"conDevolucion":15,"normal":35},{"id":"172140","salida":"21:40","sinDevolucion":44,"conDevolucion":0,"normal":30}],
[{"id":"180940","salida":"09:40","sinDevolucion":40,"conDevolucion":0,"normal":3},{"id":"181040","salida":"10:40","sinDevolucion":4,"conDevolucion":17,"normal":40},{"id":"181220","salida":"12:20","sinDevolucion":31,"conDevolucion":10,"normal":25},{"id":"181310","salida":"13:10","sinDevolucion":15,"conDevolucion":26,"normal":19},{"id":"181510","salida":"15:10","sinDevolucion":23,"conDevolucion":17,"normal":13},{"id":"181640","salida":"16:40","sinDevolucion":33,"conDevolucion":3,"normal":18},{"id":"181740","salida":"17:40","sinDevolucion":20,"conDevolucion":25,"normal":11},{"id":"181840","salida":"18:40","sinDevolucion":27,"conDevolucion":16,"normal":42},{"id":"181930","salida":"19:30","sinDevolucion":35,"conDevolucion":5,"normal":43},{"id":"182140","salida":"21:40","sinDevolucion":14,"conDevolucion":23,"normal":1}],
[{"id":"190940","salida":"09:40","sinDevolucion":6,"conDevolucion":15,"normal":27},{"id":"191040","salida":"10:40","sinDevolucion":24,"conDevolucion":12,"normal":31},{"id":"191220","salida":"12:20","sinDevolucion":45,"conDevolucion":0,"normal":16},{"id":"191310","salida":"13:10","sinDevolucion":38,"conDevolucion":0,"normal":12},{"id":"191510","salida":"15:10","sinDevolucion":2,"conDevolucion":17,"normal":3},{"id":"191640","salida":"16:40","sinDevolucion":8,"conDevolucion":13,"normal":12},{"id":"191740","salida":"17:40","sinDevolucion":10,"conDevolucion":9,"normal":21},{"id":"191840","salida":"18:40","sinDevolucion":25,"conDevolucion":6,"normal":13},{"id":"191930","salida":"19:30","sinDevolucion":39,"conDevolucion":1,"normal":8},{"id":"192140","salida":"21:40","sinDevolucion":13,"conDevolucion":18,"normal":36}],
[{"id":"200840","salida":"08:40","sinDevolucion":25,"conDevolucion":17,"normal":37},{"id":"200940","salida":"09:40","sinDevolucion":24,"conDevolucion":17,"normal":18},{"id":"201040","salida":"10:40","sinDevolucion":26,"conDevolucion":1,"normal":24},{"id":"201220","salida":"12:20","sinDevolucion":15,"conDevolucion":9,"normal":19},{"id":"201310","salida":"13:10","sinDevolucion":8,"conDevolucion":27,"normal":0},{"id":"201510","salida":"15:10","sinDevolucion":32,"conDevolucion":3,"normal":40},{"id":"201640","salida":"16:40","sinDevolucion":3,"conDevolucion":35,"normal":36},{"id":"201740","salida":"17:40","sinDevolucion":31,"conDevolucion":5,"normal":44},{"id":"201840","salida":"18:40","sinDevolucion":40,"conDevolucion":2,"normal":29},{"id":"201930","salida":"19:30","sinDevolucion":42,"conDevolucion":2,"normal":26},{"id":"202140","salida":"21:40","sinDevolucion":25,"conDevolucion":12,"normal":33}],
[{"id":"210940","salida":"09:40","sinDevolucion":10,"conDevolucion":1,"normal":24},{"id":"211040","salida":"10:40","sinDevolucion":7,"conDevolucion":23,"normal":35},{"id":"211220","salida":"12:20","sinDevolucion":10,"conDevolucion":27,"normal":32},{"id":"211310","salida":"13:10","sinDevolucion":13,"conDevolucion":21,"normal":23},{"id":"211510","salida":"15:10","sinDevolucion":44,"conDevolucion":1,"normal":8},{"id":"211640","salida":"16:40","sinDevolucion":13,"conDevolucion":12,"normal":29},{"id":"211740","salida":"17:40","sinDevolucion":6,"conDevolucion":6,"normal":18},{"id":"211840","salida":"18:40","sinDevolucion":40,"conDevolucion":3,"normal":24},{"id":"211930","salida":"19:30","sinDevolucion":30,"conDevolucion":5,"normal":40},{"id":"212010","salida":"20:10","sinDevolucion":42,"conDevolucion":0,"normal":42},{"id":"212140","salida":"21:40","sinDevolucion":11,"conDevolucion":2,"normal":18}],
[{"id":"220940","salida":"09:40","sinDevolucion":38,"conDevolucion":4,"normal":12},{"id":"221040","salida":"10:40","sinDevolucion":26,"conDevolucion":12,"normal":19},{"id":"221220","salida":"12:20","sinDevolucion":40,"conDevolucion":5,"normal":28},{"id":"221310","salida":"13:10","sinDevolucion":12,"conDevolucion":14,"normal":32},{"id":"221510","salida":"15:10","sinDevolucion":24,"conDevolucion":16,"normal":42},{"id":"221640","salida":"16:40","sinDevolucion":6,"conDevolucion":18,"normal":17},{"id":"221740","salida":"17:40","sinDevolucion":15,"conDevolucion":23,"normal":24},{"id":"221840","salida":"18:40","sinDevolucion":44,"conDevolucion":0,"normal":25},{"id":"221930","salida":"19:30","sinDevolucion":39,"conDevolucion":5,"normal":41},{"id":"222140","salida":"21:40","sinDevolucion":34,"conDevolucion":5,"normal":31}],
[{"id":"230940","salida":"09:40","sinDevolucion":36,"conDevolucion":8,"normal":41},{"id":"231040","salida":"10:40","sinDevolucion":34,"conDevolucion":7,"normal":34},{"id":"231220","salida":"12:20","sinDevolucion":13,"conDevolucion":4,"normal":23},{"id":"231310","salida":"13:10","sinDevolucion":29,"conDevolucion":0,"normal":37},{"id":"231510","salida":"15:10","sinDevolucion":8,"conDevolucion":4,"normal":27},{"id":"231640","salida":"16:40","sinDevolucion":42,"conDevolucion":0,"normal":34},{"id":"231740","salida":"17:40","sinDevolucion":24,"conDevolucion":13,"normal":36},{"id":"231840","salida":"18:40","sinDevolucion":9,"conDevolucion":0,"normal":41},{"id":"231930","salida":"19:30","sinDevolucion":45,"conDevolucion":0,"normal":14},{"id":"232140","salida":"21:40","sinDevolucion":10,"conDevolucion":14,"normal":27}],
[{"id":"240940","salida":"09:40","sinDevolucion":40,"conDevolucion":4,"normal":36},{"id":"241040","salida":"10:40","sinDevolucion":41,"conDevolucion":0,"normal":12},{"id":"241220","salida":"12:20","sinDevolucion":41,"conDevolucion":0,"normal":13},{"id":"241310","salida":"13:10","sinDevolucion":5,"conDevolucion":25,"normal":34},{"id":"241510","salida":"15:10","sinDevolucion":12,"conDevolucion":32,"normal":12},{"id":"241640","salida":"16:40","sinDevolucion":26,"conDevolucion":7,"normal":23},{"id":"241740","salida":"17:40","sinDevolucion":4,"conDevolucion":40,"normal":37},{"id":"241840","salida":"18:40","sinDevolucion":22,"conDevolucion":21,"normal":19},{"id":"241930","salida":"19:30","sinDevolucion":35,"conDevolucion":9,"normal":30},{"id":"242140","salida":"21:40","sinDevolucion":18,"conDevolucion":11,"normal":37}],
[{"id":"250940","salida":"09:40","sinDevolucion":36,"conDevolucion":1,"normal":2},{"id":"251040","salida":"10:40","sinDevolucion":20,"conDevolucion":9,"normal":4},{"id":"251220","salida":"12:20","sinDevolucion":10,"conDevolucion":23,"normal":31},{"id":"251310","salida":"13:10","sinDevolucion":41,"conDevolucion":0,"normal":35},{"id":"251510","salida":"15:10","sinDevolucion":34,"conDevolucion":8,"normal":0},{"id":"251640","salida":"16:40","sinDevolucion":25,"conDevolucion":2,"normal":31},{"id":"251740","salida":"17:40","sinDevolucion":12,"conDevolucion":12,"normal":12},{"id":"251840","salida":"18:40","sinDevolucion":28,"conDevolucion":11,"normal":40},{"id":"251930","salida":"19:30","sinDevolucion":0,"conDevolucion":5,"normal":18},{"id":"252140","salida":"21:40","sinDevolucion":9,"conDevolucion":14,"normal":12}],
[{"id":"260940","salida":"09:40","sinDevolucion":26,"conDevolucion":19,"normal":10},{"id":"261040","salida":"10:40","sinDevolucion":2,"conDevolucion":33,"normal":22},{"id":"261220","salida":"12:20","sinDevolucion":39,"conDevolucion":2,"normal":19},{"id":"261310","salida":"13:10","sinDevolucion":40,"conDevolucion":5,"normal":1},{"id":"261510","salida":"15:10","sinDevolucion":28,"conDevolucion":10,"normal":24},{"id":"261640","salida":"16:40","sinDevolucion":43,"conDevolucion":0,"normal":1},{"id":"261740","salida":"17:40","sinDevolucion":1,"conDevolucion":0,"normal":5},{"id":"261840","salida":"18:40","sinDevolucion":7,"conDevolucion":35,"normal":25},{"id":"261930","salida":"19:30","sinDevolucion":9,"conDevolucion":7,"normal":18},{"id":"262140","salida":"21:40","sinDevolucion":13,"conDevolucion":12,"normal":19}],
[{"id":"270840","salida":"08:40","sinDevolucion":39,"conDevolucion":6,"normal":30},{"id":"270940","salida":"09:40","sinDevolucion":37,"conDevolucion":2,"normal":5},{"id":"271040","salida":"10:40","sinDevolucion":6,"conDevolucion":29,"normal":24},{"id":"271220","salida":"12:20","sinDevolucion":42,"conDevolucion":2,"normal":19},{"id":"271310","salida":"13:10","sinDevolucion":24,"conDevolucion":13,"normal":14},{"id":"271510","salida":"15:10","sinDevolucion":36,"conDevolucion":7,"normal":0},{"id":"271640","salida":"16:40","sinDevolucion":3,"conDevolucion":5,"normal":10},{"id":"271740","salida":"17:40","sinDevolucion":5,"conDevolucion":40,"normal":28},{"id":"271840","salida":"18:40","sinDevolucion":21,"conDevolucion":9,"normal":40},{"id":"271930","salida":"19:30","sinDevolucion":3,"conDevolucion":4,"normal":20},{"id":"272140","salida":"21:40","sinDevolucion":8,"conDevolucion":29,"normal":21}],
[{"id":"280940","salida":"09:40","sinDevolucion":11,"conDevolucion":20,"normal":21},{"id":"281040","salida":"10:40","sinDevolucion":30,"conDevolucion":1,"normal":40},{"id":"281220","salida":"12:20","sinDevolucion":22,"conDevolucion":4,"normal":10},{"id":"281310","salida":"13:10","sinDevolucion":12,"conDevolucion":1,"normal":28},{"id":"281510","salida":"15:10","sinDevolucion":7,"conDevolucion":30,"normal":21},{"id":"281640","salida":"16:40","sinDevolucion":27,"conDevolucion":10,"normal":18},{"id":"281740","salida":"17:40","sinDevolucion":14,"conDevolucion":4,"normal":5},{"id":"281840","salida":"18:40","sinDevolucion":44,"conDevolucion":0,"normal":22},{"id":"281930","salida":"19:30","sinDevolucion":19,"conDevolucion":22,"normal":35},{"id":"282010","salida":"20:10","sinDevolucion":40,"conDevolucion":3,"normal":39},{"id":"282140","salida":"21:40","sinDevolucion":13,"conDevolucion":12,"normal":3}],
[{"id":"290940","salida":"09:40","sinDevolucion":20,"conDevolucion":14,"normal":16},{"id":"291040","salida":"10:40","sinDevolucion":30,"conDevolucion":4,"normal":9},{"id":"291220","salida":"12:20","sinDevolucion":37,"conDevolucion":2,"normal":31},{"id":"291310","salida":"13:10","sinDevolucion":35,"conDevolucion":1,"normal":1},{"id":"291510","salida":"15:10","sinDevolucion":32,"conDevolucion":9,"normal":15},{"id":"291640","salida":"16:40","sinDevolucion":30,"conDevolucion":11,"normal":2},{"id":"291740","salida":"17:40","sinDevolucion":20,"conDevolucion":12,"normal":20},{"id":"291840","salida":"18:40","sinDevolucion":12,"conDevolucion":9,"normal":3},{"id":"291930","salida":"19:30","sinDevolucion":2,"conDevolucion":40,"normal":2},{"id":"292140","salida":"21:40","sinDevolucion":0,"conDevolucion":45,"normal":0}],
[{"id":"300940","salida":"09:40","sinDevolucion":45,"conDevolucion":0,"normal":11},{"id":"301040","salida":"10:40","sinDevolucion":9,"conDevolucion":30,"normal":17},{"id":"301220","salida":"12:20","sinDevolucion":45,"conDevolucion":0,"normal":26},{"id":"301310","salida":"13:10","sinDevolucion":39,"conDevolucion":5,"normal":23},{"id":"301510","salida":"15:10","sinDevolucion":33,"conDevolucion":2,"normal":36},{"id":"301640","salida":"16:40","sinDevolucion":31,"conDevolucion":1,"normal":43},{"id":"301740","salida":"17:40","sinDevolucion":24,"conDevolucion":1,"normal":12},{"id":"301840","salida":"18:40","sinDevolucion":23,"conDevolucion":2,"normal":28},{"id":"301930","salida":"19:30","sinDevolucion":29,"conDevolucion":5,"normal":21},{"id":"302140","salida":"21:40","sinDevolucion":30,"conDevolucion":1,"normal":14}]
];


const CONSTDOM = {'h2': 'DÍA', 'root_route': 'body > div:first-of-type', 'caption' : 'TRENES DEL DÍA ', 'ntrenes': 'NÚMERO DE TRENES'}
const CONSTSTYLE = {'textAlign_center': 'center', 'section_with': '28em', }
let sectiondom = new Object();

let dom = {
	acumDOM: CONSTDOM.root_route,

	load: function () {
		document.addEventListener('DOMContentLoaded', () => { 
			
			this.addToDOM();
			this.addProperties();
			this.addListerner();

		}, true);
	},

	addToDOM: function(){
		sectiondom = table.appendDOM(this.acumDOM, 'section');
		this.acumDOM += (' ' + sectiondom.nodeName.toLowerCase()) ;
		table.appendDOM(this.acumDOM, 'h2').innerHTML = CONSTDOM.h2;
	},

	addProperties: function(){
		sectiondom.style.width = CONSTSTYLE.section_with;
		sectiondom.children[0].style.textAlign = CONSTSTYLE.textAlign_center;
	},

	insertButton:  function(){
		let btns = new Array();
		for (var i = 0; i < datos.length; i++) {
			let btn = table.appendDOM(this.acumDOM, 'button');
			btn.innerHTML = (datos[i][0].id).substr(0,2);
			btns.push(btn);
		};
		return btns;
	},

	addListerner: function(){
		let btns = this.insertButton();
		let tren = null;
		let s = document.querySelector(CONSTDOM.root_route + ' section');

		s.addEventListener('click', function(event){
			for (let i = 0; i < datos.length; i++) {
				for (let j = 0; j < datos[i].length; j++) {
					if((datos[i][j].id).substr(0,2) == event.target.innerText){
						tren = datos[i];
					}
				};
			};

			table.drop();
			table.create(tren);
		}, true);
	},
};



let table = {
	appendDOM: function (rootNode, elemNode){
		let b = document.createElement(elemNode);
		let a = document.querySelector(rootNode);
		a.appendChild(b);
		return b;
	},

	drop: function (){
		let t = document.getElementsByTagName('table')[0];
		let auxbtns = document.querySelectorAll('button');
		if(auxbtns[auxbtns.length - 1].nextElementSibling != null){
			auxbtns[auxbtns.length -1].nextElementSibling.remove();
		}
	},

	create: function (tren){

		if(tren instanceof Object && tren != null){

			let tb = this.appendDOM(CONSTDOM.root_route + ' section', 'table');
			tb.style.width = 100 + '%';
			let acum = CONSTDOM.root_route;

			let cap = this.appendDOM(CONSTDOM.root_route + ' table', 'caption');
			cap.innerText = CONSTDOM.caption + ' ' + tren[0].id.substr(0,2);
			acum += ' table';

			let thead = this.appendDOM(acum, 'thead');
			acum += ' thead';
			let trthead = this.appendDOM(acum, 'tr');
			acum += ' tr';
			for (const prop in tren[0]) {
				if (tren[0].hasOwnProperty(prop)) {
					let ththead = this.appendDOM(acum, 'td');
					ththead.innerText = prop;
				} 
			}
			acum = CONSTDOM.root_route;

			let tbody = this.appendDOM(acum + ' table', 'tbody');
			acum += ' tbody';
			for(let i = 0; i < tren.length; i++){
				let trtbody = this.appendDOM(acum, 'tr');
				for (const prop in tren[i]) {
					if (tren[i].hasOwnProperty(prop)) {
						let b = document.createElement('td');
						b.innerText = tren[i][prop];
						trtbody.append(b);
					} 
				}
			}

			let tfoot = this.appendDOM(CONSTDOM.root_route + ' table', 'tfoot');
			let trfoot = this.appendDOM(CONSTDOM.root_route + ' table tfoot', 'tr');
			let tdfoot = this.appendDOM(CONSTDOM.root_route + ' table tfoot tr', 'td');
			tdfoot.colSpan = "5";
			tdfoot.innerHTML = CONSTDOM.ntrenes + ' ' + tren.length;
		}
	}
}

dom.load();