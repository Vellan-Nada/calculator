// Animation
$(".hover").click(function(){
  let self = $(this)
  self.css("background-color","#525f46")
  setTimeout(function(){
    self.css("background-color","#889E73")},100)
  })

$(".hover").hover(function(){
  $(this).animate({opacity:'0.7'},10);
}, function(){
  $(this).animate({opacity:'1.0'},10);
},)


// Calculation
let counter = [];

$(".num").click(function(){
  counter.push(Number($(this).text()))

  let val = $(this).text()
  let ans = $(".answer").text()
  $(".answer").text(ans+val)
})

$(".sign").click(function(){
  if(counter[counter.length-1]!=="+" && counter[counter.length-1]!=="-" && counter[counter.length-1]!=="/" && counter[counter.length-1]!=="x"){
    counter.push($(this).text())
    let val = $(this).text()
    let ans = $(".answer").text()
    $(".answer").text(ans+val)
  }
})

$(".del").click(function(){
  let val = $(".answer").text()
  let nval = val.slice(0,-1)
  $(".answer").text(nval)
})

$(".equal").click(function(){
  let express = $(".answer").text().replace(/x/g,"*")
  $(".answer").text(eval(express).toFixed(2))
  counter=[]
})

$(".clear").click(function(){
  $(".answer").text("")
})

