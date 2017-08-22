//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog () {
}

var sadie = new Dog()
sadie.status = 'normal'
sadie.color = 'black'
sadie.hungry = false
sadie.owner = 'mason'

var moonshine = new Dog()
moonshine.hungry = true

var atticus = new Dog()


// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human () {
	this.pet = function(dog){
		dog.status = 'happy'
	}
	this.feed = function(dog){
		dog.hungry = false
	}
}

var mason = new Human()
mason.cool = false

var julia = new Human()
julia.cool = true

// Instances of Human
// Needed: mason, julia
