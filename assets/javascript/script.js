// defining the variables
let now = moment().format('LLLL')
let presentHour = parseInt(moment().format('H'))
let presentTime = parseInt(moment().format('LT'))

// puts the current date and time underneath the Work Schedule
$('#currentDay').html(moment().format('LLLL'))

// function to change color of timeblocks according to past, present, and future time
function changeColor (element) {
  const timeId = parseInt(element.children(":first").attr("id"))
  if (timeId < presentHour) {
    element.css('backgroundColor', '#d3d3d3')
    // $('.save').classList.add('hide')
  } else if (timeId > presentHour) {
    element.css('backgroundColor ', 'lightgreen')
  } else {
    element.css('backgroundColor', '#ff6961')
  }
}

// function to check the hour of each time block
function checkTimeRow () {
  $('.timeRow').each(function () {
    changeColor($(this))
  })
}

// calls the checkTimeRow function to run every 15 minutes
setInterval(checkTimeRow, 90000)

// function where clicking on an empty "event/task" space would create an input where  a user could type in an event or task
function taskInput () {
  $('.empty').click(function () {
    let taskEnter = $('.empty').html("INPUT")
    taskEnter.setAttribute("type", "text")
    taskEnter.setAttribute("value", " ")
    document.body.appendChild(taskEnter)
  })
}

// shows the input field when the div is clicked
$("#div8").click(function () {
  $("#input8").toggle()
})

// clicking on 'save' button will save the text written there to localStorage and refreshing the page will not delete the text
$('.save').on('click', function (event) {
  event.preventDefault()
  localStorage.setItem('8', JSON.stringify($('#input8').val()))
})

// retrieves item from local storage
if (localStorage.getItem('8')) {
  $('#div8').show()
  $('#div8').text(`${localStorage.getItem('8')}`)
}

// shows the input field when the div is clicked
$("#div9").click(function () {
  $("#input9").toggle()
})

$('.save').on('click', function (event) {
  event.preventDefault()
  localStorage.setItem('9', JSON.stringify($('#input9').val()))
})

// retrieves item from local storage
if (localStorage.getItem('9')) {
  $('#div9').show()
  $('#div9').text(`${localStorage.getItem('9')}`)
}

// shows the input field when the div is clicked
$("#div10").click(function () {
  $("#input10").toggle()
})

$('.save').on('click', function (event) {
  event.preventDefault()
  localStorage.setItem('10', JSON.stringify($('#input10').val()))
})

// retrieves item from local storage
if (localStorage.getItem('10')) {
  $('#div10').show()
  $('#div10').text(`${localStorage.getItem('10')}`)
}

// shows the input field when the div is clicked
$("#div11").click(function () {
  $("#input11").toggle()
})

$('.save').on('click', function (event) {
  event.preventDefault()
  localStorage.setItem('11', JSON.stringify($('#input11').val()))
})

// retrieves item from local storage 
if (localStorage.getItem('11')) {
  $('#div11').show()
  $('#div11').text(`${localStorage.getItem('11')}`)
}

// shows the input field when the div is clicked
$("#div12").click(function () {
  $("#input12").toggle()
})

$('.save').on('click', function (event) {
  event.preventDefault()
  localStorage.setItem('12', JSON.stringify($('#input12').val()))
})

// retrieves item from local storage
if (localStorage.getItem('12')) {
  $('#div12').show()
  $('#div12').text(`${localStorage.getItem('12')}`)
}

// shows the input field when the div is clicked
$("#div13").click(function () {
  $("#input13").toggle()
})

$('.save').on('click', function (event) {
  event.preventDefault()
  localStorage.setItem('13', JSON.stringify($('#input13').val()))
})

// retrieves item from local storage
if (localStorage.getItem('13')) {
  $('#div13').show()
  $('#div13').text(`${localStorage.getItem('13')}`)
}

// shows the input field when the div is clicked
$("#div14").click(function () {
  $("#input14").toggle()
})
$('.save').on('click', function (event) {
  event.preventDefault()
  localStorage.setItem('14', JSON.stringify($('#input14').val()))
})

// retrieves item from local storage
if (localStorage.getItem('14')) {
  $('#div14').show()
  $('#div14').text(`${localStorage.getItem('14')}`)
}

// shows the input field when the div is clicked
$("#div15").click(function () {
  $("#input15").toggle()
})

$('.save').on('click', function (event) {
  event.preventDefault()
  localStorage.setItem('15', JSON.stringify($('#input15').val()))
})

// retrieves item from local storage
if (localStorage.getItem('15')) {
  $('#div15').show()
  $('#div15').text(`${localStorage.getItem('15')}`)
}

// shows the input field when the div is clicked
$("#div16").click(function () {
  $("#input16").toggle()
})

$('.save').on('click', function (event) {
  event.preventDefault()
  localStorage.setItem('16', JSON.stringify($('#input16').val()))
})

// retrieves item from local storage
if (localStorage.getItem('16')) {
  $('#div16').show()
  $('#div16').text(`${localStorage.getItem('16')}`)
}

// shows the input field when the div is clicked
$("#div17").click(function () {
  $("#input17").toggle()
})

$('.save').on('click', function (event) {
  event.preventDefault()
  localStorage.setItem('17', JSON.stringify($('#input17').val()))
})

// retrieves item from local storage
if (localStorage.getItem('17')) {
  $('#div17').show()
  $('#div17').text(`${localStorage.getItem('17')}`)
}
