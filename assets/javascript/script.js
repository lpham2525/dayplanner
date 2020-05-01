//defining the variables
let now = moment().format('LLLL')
let presentHour = parseInt(moment().format('H'))
let presentTime = parseInt(moment().format('LT'))

//puts the current date and time underneath the Work Schedule
$('#currentDay').html(moment().format('LLLL'))

//function to change color of timeblocks according to past, present, and future time
function changeColor(element) {
  const timeId = parseInt(element.children(":first").attr("id"))
  if (timeId < presentHour) {
    element.css('backgroundColor', '#d3d3d3')
    // $('.save').classList.add('hide')
  } else if (timeId > presentHour) {
    element.css('backgroundColor ', '#77dd77')
  } else {
    element.css('backgroundColor', '#ff6961')
  }
}

//function to check the hour of each time block
function checkTimeRow() {
  $('.timeRow').each(function () {
    changeColor($(this))
  })
}

//calls the checkTimeRow function to run every 15 minutes
setInterval(checkTimeRow, 90000)

//shows the input field when the div is clicked
$(".taskDiv").click(function () {
  $(".eventInput").toggle()
})

//function where clicking on an empty "event/task" space would create an input where  a user could type in an event or task
function taskInput() {
  $('.empty').click(function () {
    let taskEnter = $('.empty').html("INPUT")
    taskEnter.setAttribute("type", "text")
    taskEnter.setAttribute("value", " ")
    document.body.appendChild(taskEnter)
  })
}


//clicking on 'save' button will save the text written there to localStorage and refreshing the page will not delete the text
$('.save').on('click', function (event) {
  event.preventDefault()
  localStorage.setItem('8', JSON.stringify($('.eventInput').val()))
})

//hides the divs once clicked
$('#div8').on('click', function () {
  $('#div8').hide()
})

//retrieves item from local storage
if (localStorage.getItem('8')) {
  $('#div8').show()
  $('#div8').text(`${localStorage.getItem('8')}`)
}



