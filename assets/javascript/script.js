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

//retrieves item from local storage
if (localStorage.getItem('8')) {
  $('#div8').show()
  $('#div8').text(`${localStorage.getItem('8')}`)
}

$('.save').on('click', function (event) {
  event.preventDefault()
  localStorage.setItem('9', JSON.stringify($('.eventInput').val()))
})

//retrieves item from local storage
if (localStorage.getItem('9')) {
  $('#div9').show()
  $('#div9').text(`${localStorage.getItem('9')}`)
}

$('.save').on('click', function (event) {
  event.preventDefault()
  localStorage.setItem('10', JSON.stringify($('.eventInput').val()))
})

//retrieves item from local storage
if (localStorage.getItem('10')) {
  $('#div10').show()
  $('#div10').text(`${localStorage.getItem('10')}`)
}
$('.save').on('click', function (event) {
  event.preventDefault()
  localStorage.setItem('10', JSON.stringify($('.eventInput').val()))
})

//retrieves item from local storage 
if (localStorage.getItem('11')) {
  $('#div11').show()
  $('#di11').text(`${localStorage.getItem('11')}`)
}
$('.save').on('click', function (event) {
  event.preventDefault()
  localStorage.setItem('11', JSON.stringify($('.eventInput').val()))
})

//retrieves item from local storage
if (localStorage.getItem('12')) {
  $('#div12').show()
  $('#div12').text(`${localStorage.getItem('12')}`)
}
$('.save').on('click', function (event) {
  event.preventDefault()
  localStorage.setItem('12', JSON.stringify($('.eventInput').val()))
})

//retrieves item from local storage
if (localStorage.getItem('13')) {
  $('#div13').show()
  $('#div13').text(`${localStorage.getItem('13')}`)
}
$('.save').on('click', function (event) {
  event.preventDefault()
  localStorage.setItem('14', JSON.stringify($('.eventInput').val()))
})

//retrieves item from local storage
if (localStorage.getItem('14')) {
  $('#div14').show()
  $('#div14').text(`${localStorage.getItem('14')}`)
}
$('.save').on('click', function (event) {
  event.preventDefault()
  localStorage.setItem('15', JSON.stringify($('.eventInput').val()))
})

//retrieves item from local storage
if (localStorage.getItem('15')) {
  $('#div15').show()
  $('#div15').text(`${localStorage.getItem('15')}`)
}
$('.save').on('click', function (event) {
  event.preventDefault()
  localStorage.setItem('16', JSON.stringify($('.eventInput').val()))
})

//retrieves item from local storage
if (localStorage.getItem('16')) {
  $('#div16').show()
  $('#div16').text(`${localStorage.getItem('16')}`)
}
$('.save').on('click', function (event) {
  event.preventDefault()
  localStorage.setItem('17', JSON.stringify($('.eventInput').val()))
})

//retrieves item from local storage
if (localStorage.getItem('17')) {
  $('#div17').show()
  $('#div17').text(`${localStorage.getItem('17')}`)
}


