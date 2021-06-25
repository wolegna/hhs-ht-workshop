var rotationSpeed = 0.001;
var myOtherBox = document.getElementById('myOtherBox');
var myBox = document.getElementById('myBox');

function spin() {
	myOtherBox.object3D.rotation.x += rotationSpeed;
	myOtherBox.object3D.rotation.y += rotationSpeed;
	myOtherBox.object3D.rotation.z += rotationSpeed / 2;
	//console.log(myOtherBox.object3D.rotation);
}
setInterval(spin, 10);


myOtherBox.addEventListener('mouseenter', function () {
	rotationSpeed = 0.01;
	console.log('entered');
});

myOtherBox.addEventListener('mouseleave', function () {
	rotationSpeed = 0.001;
	console.log('left');
});



var growspeed = 1.2;

function grow() {
	rotationSpeed = 0.1;
}

myOtherBox.addEventListener('click', function(){ // uses a fuse
grow();
 	console.log('grew');
});
