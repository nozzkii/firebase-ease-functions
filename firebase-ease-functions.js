import * as firebase from "firebase/app";

import "firebase/database";

class EaseFunctions {
	constructor() {
 	let num;
 	}

function getDbRef(ref){
  if(ref === undefined){
    return firebase.database().ref();
  }else{
    return firebase.database().ref(ref);
  }
}

function getChildSize(ref){
ref.on('value', function(snapshot) {
   num = snapshot.numChildren();
});
return num;
}

function queryDb(ref){
	getDbRef(ref).once("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});

}

}