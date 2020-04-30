let now = moment().format('LLLL')
let presentHour = parseInt(moment().format('H'))
let presentTime = parseInt(moment().format('LT'))
let listedHour = parseInt(th.id(value))
let passedHour = listedHour < presentHour
let comingHour = listedHour > presentHour

console.log(moment())

$('#currentDay').html(moment().format('LLLL'))

function changeColor() {
  if (listedHour < presentHour) {
    $('.row').style.backgroundColor = "gray"
    $('.save').classList.add('hide')
  } else if (listedHour > presentHour) {
    $('.row').style.backgroundColor = "yellow"
  } else {
    $('.row').style.backgroundColor = "green"
  }
}

//clicking on an empty "event/task" space would create an input where  a user could type in an event or task
function taskInput() {
  $('.empty').click(function () {
    let taskEnter = $('.empty').html("INPUT")
    taskEnter.setAttribute("type", "text")
    taskEnter.setAttribute("value", " ")
    document.body.appendChild(taskEnter)
  })
}

//clicking on 'save' button will save the text is written in there to localStorage and refreshing the page will not delete the text
// $('.save').on('click', function () {
//   ${ '.input' }
// })


