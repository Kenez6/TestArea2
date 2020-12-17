let Mercury = {
      photo: 'pic/Mercury.jpg',
      title: 'Mercury',
      description: 'Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the planets in the Solar System. It is named after the Greek god Hermes, translated into Latin Mercurius Mercury, god of commerce, messenger of the gods, mediator between gods and mortals.'
    };
  let Venus = {
      photo: 'pic/Venus.jpg',
      title: 'Venus',
      description: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight."
    };
  let Earth = {
      photo: 'pic/Earth.jpg',
      title: 'Earth',
      description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also lakes, rivers and other fresh water, which together constitute the hydrosphere. "
    };
 let Mars = {
     photo: 'pic/Mars.jpg',
     title: 'Mars',
     description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'. The latter refers to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth."
    };
 let Jupiter = {
     photo: 'pic/jupiter.png',
     title: 'Jupiter',
     description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter."
    };
let Saturn = {
    photo: 'pic/saturn.jpg',
    title: 'Saturn',
    description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive. Saturn is named after the Roman god of wealth and agriculture"
    };
let Uranus = {
    photo: 'pic/uranus.jpg',
    title: 'Uranus',
    description: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the grandfather of Zeus (Jupiter) and father of Cronus (Saturn). It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System."
    };
let Neptune = {
    photo: 'pic/neptune.jpg',
    title: 'Neptune',
    description: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere."
    };
let planets = [Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune];

var counter = 0;

function countingUP(){
    if(counter == 7){
        counter=0;
    }
    else {
    counter=counter+1}
    return counter;
}
function countingDown(){
    if(counter == 0){
        counter=7;
    }
    else{
    counter=counter-1}
    return counter;
}

function changeData(){
    $('#planet').attr('src', planets[counter].photo);
    $('#imageTitle').replaceWith('<h1 id="imageTitle">'+planets[counter].title+'</h1>');
    $('#imageDescription').replaceWith('<p id="imageDescription">'+planets[counter].description+'</p>');

};

function highlight(){
    ($('.box').css('transform', 'scale(1)'));
    ($('.planetname').css('visibility', 'hidden')); 
    ($('#'+counter).css('transform', 'scale(1.2)')); 
    ($('#name-'+counter).css('visibility', 'visible')); 
}
$( document ).ready(function() {
    highlight();
});

 $('#left').on('click',() => {
    countingDown();
    changeData();
    highlight();
    
 });
 $('#right').on('click',() => {
    countingUP();
    changeData();
    highlight();
    
})
planets.forEach((item,index) => {
    $('#thumbnails').append(`<div class="box" id="${index}" style="background-image: url('${planets[index].photo}');"><h2 id="name-${index}" class='planetname'>${planets[index].title}</h2></div>`)
    
});

$('.box').on('click',(event)=>{
    counter = parseInt($(event.target).attr('id'));
    changeData();
    highlight();
    return counter;
});




