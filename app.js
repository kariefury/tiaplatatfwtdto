// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// [START gae_flex_quickstart]
const express = require('express');
const fs = require('fs');
var request = require('request').defaults({ encoding: null });
var http = require('http');
const app = express();

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
console.log(PORT);
console.log(`Server running at http://localhost:8080/`);
var server = app.listen(PORT);
var io = require('socket.io')(server);

const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/see_this.html'));
  //__dirname : It will resolve to your project folder.
});

app.use(express.static(__dirname + '/public'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/img'));


app.use('/', router);
 
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  
  socket.on('whatisthis', (msg) => {
    console.log('message: ' + msg);
	addToGraphIfNotFound(msg);
	socket.emit("new_graph","x");
  });

});

function add14ToGraph(new_words,the_graph) {
	try {

	} catch {

	}
	return the_graph;
}
function addToGraphIfNotFound(msg) {
	console.log(msg);
		try {
	var this_buffer = fs.readFileSync('public/assets/json/this_backup2.json','utf8');
	var this_graph = JSON.parse(this_buffer);
	var str = JSON.stringify(this_graph, null, 2);
	console.log(str);
	var new_words = msg.split(" ");
	console.log(new_words);
	var i = 0;
	var depth = 1;
	// Assume 14 words maximum
	var found = new Array(14);

	for(i = 0; i < 14; i++) {
		found[i] = -1; // -1 is not found
	}
	console.log(found);
	for (i = 0; i < new_words.length; i++) {
		if (new_words[i] == this_graph.name) {
			console.log("advance to children");
			found[0] = i;
		} 
	}
	console.log(found);
	//console.log("Found a match", found[0], new_words[found[0]], this_graph.name);
	if (found[0] > -1) {
		for (i = 0; i < this_graph.children.length; i++) {
			if (new_words[found[0]+1] == this_graph.children[i].name) {
				console.log("advance to children");
				found[1] = i;
			} 
		}
			console.log(found);	
		if ( (found[1] > -1) &&  this_graph.children[found[1]].children) {
			for (i = 0; i < this_graph.children[found[1]].children.length; i++) {
				if (new_words[found[0]+2] == this_graph.children[found[1]].children[i].name) {
					console.log("advance to children");
					found[2] = i;
				} 
			}	
			if ((found[2] > -1) && this_graph.children[found[1]].children[found[2]].children ) {
				for (i = 0; i < this_graph.children[found[1]].children[found[2]].children.length; i++) {
					if (new_words[found[0]+3] == this_graph.children[found[1]].children[found[2]].children[i].name) {
						console.log("advance to children");
						found[3] = i;
					} 
				}
				if (found[3] > -1) {
					for (i = 0; i < this_graph.children[found[1]].children[found[2]].children[found[3]].children.length; i++) {
						if (new_words[found[0]+4] == this_graph.children[found[1]].children[found[2]].children[found[3]].children[i].name) {
							console.log("advance to children");
							found[4] = i;
						} 
					}
					if (found[4] > -1) {
						for (i = 0; i < this_graph.children[found[1]].children[found[2]].children[found[3]].children[found[4]].children.length; i++) {
							if (new_words[found[0]+5] == this_graph.children[found[1]].children[found[2]].children[found[3]].children[found[4]].children[i].name) {
								console.log("advance to children");
								found[5] = i;
							} 
						}
						if (found[5] > -1) {
							for (i = 0; i < this_graph.children[found[1]].children[found[2]].children[found[3]].children[found[4]].children[found[5]].children.length; i++) {
								if (new_words[found[0]+6] == this_graph.children[found[1]].children[found[2]].children[found[3]].children[found[4]].children[found[5]].children[i].name) {
									console.log("advance to children");
									found[6] = i;
								} 
							}
							if (found[6] > -1) {
								for (i = 0; i < this_graph.children[found[1]].children[found[2]].children[found[3]].children[found[4]].children[found[5]].children[found[6]].children.length; i++) {
								if (new_words[found[0]+7] == this_graph.children[found[1]].children[found[2]].children[found[3]].children[found[4]].children[found[5]].children[found[6]].children[i].name) {
									console.log("advance to children");
									found[7] = i;
									} 
								}
								if (found[7] > -1) {
									for (i = 0; i < this_graph.children[found[1]].children[found[2]].children[found[3]].children[found[4]].children[found[5]].children[found[6]].children[found[7]].children.length; i++) {
									if (new_words[found[0]+8] == this_graph.children[found[1]].children[found[2]].children[found[3]].children[found[4]].children[found[5]].children[found[6]].children[found[7]].children[i].name) {
										console.log("advance to children");
										found[8] = i;
										} 
									}
									if (found[8] > -1) {
										for (i = 0; i < this_graph.children[found[1]].children[found[2]].children[found[3]].children[found[4]].children[found[5]].children[found[6]].children[found[7]].children[found[8]].children.length; i++) {
										if (new_words[found[0]+9] == this_graph.children[found[1]].children[found[2]].children[found[3]].children[found[4]].children[found[5]].children[found[6]].children[found[7]].children[found[8]].children[i].name) {
											console.log("advance to children");
											found[9] = i;
											} 
										}
										if (found[9] > -1) {
											for (i = 0; i < this_graph.children[found[1]].children[found[2]].children[found[3]].children[found[4]].children[found[5]].children[found[6]].children[found[7]].children[found[8]].children[found[9]].children.length; i++) {
											if (new_words[found[0]+9] == this_graph.children[found[1]].children[found[2]].children[found[3]].children[found[4]].children[found[5]].children[found[6]].children[found[7]].children[found[8]].children[found[9]].children[i].name) {
												console.log("advance to children");
												found[10] = i;
												} 
											}
											if (found[10] > -1) {
												// if (found[11] > -1) {
												// 	if (found[12] > -1) {
												// 		if (found[13] > -1) {
												 			console.log("stop, this concept already exists. Suppose need to merge urls");
												// 		}
												// 	}
												// }
											} else {
											console.log("Does not contain key phrase", new_words[found[0]+10]);
											var j;
											var new_msg = "";
											var new_words_to_insert = [];
											for (j=found[0]; j < new_words.length; j++) {
												new_words_to_insert.push(new_words[j])
											}
											this_graph = addRestToGraph(new_words_to_insert,this_graph);
											let data = JSON.stringify(this_graph);
											fs.writeFileSync('public/assets/json/this_backup2.json', data);
											}
										} else {
											console.log("Does not contain key phrase", new_words[found[0]+9]);
											var j;
											var new_msg = "";
											var new_words_to_insert = [];
											for (j=found[0]; j < new_words.length; j++) {
												new_words_to_insert.push(new_words[j])
											}
											this_graph = addRestToGraph(new_words_to_insert,this_graph);
											let data = JSON.stringify(this_graph);
											fs.writeFileSync('public/assets/json/this_backup2.json', data);
										}
									} else {
										console.log("Does not contain key phrase", new_words[found[0]+8]);
										var j;
										var new_msg = "";
										var new_words_to_insert = [];
										for (j=found[0]; j < new_words.length; j++) {
											new_words_to_insert.push(new_words[j])
										}
										this_graph = addRestToGraph(new_words_to_insert,this_graph);
										let data = JSON.stringify(this_graph);
										fs.writeFileSync('public/assets/json/this_backup2.json', data);
									}
								} else {
									var j;
									var new_msg = "";
									var new_words_to_insert = [];
									for (j=found[0]; j < new_words.length; j++) {
										new_words_to_insert.push(new_words[j])
									}
									this_graph = addRestToGraph(new_words_to_insert,this_graph);
									let data = JSON.stringify(this_graph);
									fs.writeFileSync('public/assets/json/this_backup2.json', data);
								}
							} else {
								var j;
								var new_msg = "";
								var new_words_to_insert = [];
								for (j=found[0]; j < new_words.length; j++) {
									new_words_to_insert.push(new_words[j])
								}
								this_graph = addRestToGraph(new_words_to_insert,this_graph);
								let data = JSON.stringify(this_graph);
								fs.writeFileSync('public/assets/json/this_backup2.json', data);
							}	
						} else {
							console.log("Does not contain key phrase", new_words[found[0]+5]);
							var j;
							var new_msg = "";
							var new_words_to_insert = [];
							for (j=found[0]; j < new_words.length; j++) {
								new_words_to_insert.push(new_words[j])
							}
							this_graph = addRestToGraph(new_words_to_insert,this_graph);
							let data = JSON.stringify(this_graph);
							fs.writeFileSync('public/assets/json/this_backup2.json', data);
						}	
					} else {
						console.log("Does not contain key phrase", new_words[found[0]+4]);					
						var j;
						var new_msg = "";
						var new_words_to_insert = [];
						for (j=found[0]+3; j < new_words.length; j++) {
							new_words_to_insert.push(new_words[j])
						}
						this_graph = addRestToGraph(new_words_to_insert,this_graph);
						let data = JSON.stringify(this_graph);
						fs.writeFileSync('public/assets/json/this_backup2.json', data);
					}
				} else {
					var j;
					var new_msg = "";
					var new_words_to_insert = [];
					for (j=found[0]+3; j < new_words.length; j++) {
						new_words_to_insert.push(new_words[j])
					}
					this_graph.children[found[1]].children[found[2]].push = addRestToGraph(new_words_to_insert,this_graph.children[found[1]].children[found[2]]);
					let data = JSON.stringify(this_graph);
					fs.writeFileSync('public/assets/json/this_backup2.json', data);
				}
			} else {
				var j;
				var new_msg = "";
				var new_words_to_insert = [];
				for (j=found[0]+2; j < new_words.length; j++) {
					new_words_to_insert.push(new_words[j])
				}
				this_graph.children[found[1]].push(addRestToGraph(new_words_to_insert,this_graph.children[found[1]]));
				let data = JSON.stringify(this_graph);
				fs.writeFileSync('public/assets/json/this_backup2.json', data);
			}
		} else {
			var j;
			var new_msg = "";
			var new_words_to_insert = [];
			for (j=found[0]+1; j < new_words.length; j++) {
				new_words_to_insert.push(new_words[j])
			}
			this_graph = addRestToGraph(new_words_to_insert,this_graph);
			let data = JSON.stringify(this_graph);
			fs.writeFileSync('public/assets/json/this_backup2.json', data);
		}
	} else {
		console.log("Does not contain key phrase of this.", this_graph.name);
	}


	} catch(err) {
	console.log("no this.",err);
}};

function addRestToGraph(new_words,this_graph){
	var current_graph = this_graph;
	var i = 0;
	while( i < new_words.length) {
		current_graph.children.push({'name':new_words[i],'url':new_words[i],'children':[]});
		current_graph = current_graph.children[0];
		i++;
	}
	return current_graph;
};

function addToGraph(msg) {
	// "/assets/json/this.json"
	console.log(msg);
	try {
var this_buffer = fs.readFileSync('public/assets/json/this.json','utf8');
var this_graph = JSON.parse(this_buffer);
var str = JSON.stringify(this_graph, null, 2);
console.log(str);
new_words = msg.split(" ");
console.log(new_words);
var i = 0;
var depth = 1;
// Assume 14 words maximum
var found = new Array(14);
console.log(found);
for (i = 0; i < new_words.length; i++) {
	if (new_words[i] == this_graph.name) {
		console.log("advance to children");
		found[0] = 1;
	} else {
		console.log("not a match, insert new, or ignore... increment until 'this' keyword is found. Maybe strip sentence symbols.");
	}
	i++
	var j = 0;
	for ( j = 0; j < this_graph.children.length; j++) {
		if (new_words[i] == this_graph.children[j].name) {
			console.log("advance to children");
			found[1] = 1;
			var k = 0;
			for (k = 0; k < this_graph.children[j].children[k].length; k++) {
				if (new_words[i] == this_graph.children[j].children[k].name) {
					console.log("advance to children");
					found[2] = 1;
					var m = 0;
					for (m = 0; m < this_graph.children[j].children[k].children[m].length;m++ ) {
						if (new_words[i] == this_graph.children[j].children[k].children[m].name) {
							found[3] = 1;
							console.log("advance to children");
							
						}
						m++
						if (found[3] != 1) {
							 this_graph.children[j].children[k].push({'name':new_words[i],'url':new_words[i]})
						}
						i++
					}
				} 
				k++;
			}
			j++;
		} else {
			console.log("not a match, insert new");
		}	
	}
}

} catch(err) {
	console.log("no this.",err);
}
};

// [END gae_flex_quickstart]


module.exports = app;


