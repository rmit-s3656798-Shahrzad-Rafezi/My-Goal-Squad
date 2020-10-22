// Global variables
var select_year = null;
var select_month = null;
var select_week = null;
var select_type = null;
var get_id = null;

// This is for selection, tabs, modal element in HTML file (CSS Materialize)
document.addEventListener('DOMContentLoaded', function () {
  var select = document.querySelectorAll('select');
  M.FormSelect.init(select, {});

  const options = {
    duration: 300,
    onShow: null,
    swipeable: true,
    responsiveThreshold: Infinity
  };

  const tabsContainer = document.querySelector("#tabs-swipe-demo");
  M.Tabs.init(tabsContainer, options);

  var modal = document.querySelectorAll('.modal');
  M.Modal.init(modal);
});

const current_week = document.querySelector("#current_week");
const current_month = document.querySelector("#current_month");
const current_this_year = document.querySelector("#current_year");

function search_task() {
  // When user opens the app, it will bring the default goals (Week1, January, current year)
  var user = firebase.auth().currentUser;
  if (select_week == null) {

    const health_tab = document.querySelector('#test-swipe-1');
    health_tab.innerHTML = "";

    const career_tab = document.querySelector('#test-swipe-2');
    career_tab.innerHTML = "";

    const personal_tab = document.querySelector('#test-swipe-3');
    personal_tab.innerHTML = "";

    const financial_tab = document.querySelector('#test-swipe-4');
    financial_tab.innerHTML = "";

    const other_tab = document.querySelector('#test-swipe-5');
    other_tab.innerHTML = "";

    //console.log('test1');
    select_week = 'Week1';
    current_week.innerHTML = select_week;

    if (select_month == null) {
      //console.log('test2');
      select_month = 'January';
      current_month.innerHTML = select_month;

      if (select_year == null) {
        //console.log('test3');
        select_year = current_year.toString();
        current_this_year.innerHTML = select_year;

        //console.log('test4');
        for (var i = 0; i <= types.length - 1; i++) {
          display(user.uid, select_year, select_month, select_week, types[i]);
        }
  //////////////////////////////////////////////////////////////
    // When user chooses different year   
      } else {
        //console.log('test5');
        for (var i = 0; i <= types.length - 1; i++) {
          display(user.uid, select_year, select_month, select_week, types[i]);
        }
      }
    ////////////////////////////////////
    // When user chooses different month
    } else {
      if (select_year == null) {
        //console.log('test6');
        select_year = current_year.toString();
        //console.log('test7');
        for (var i = 0; i <= types.length - 1; i++) {
          display(user.uid, select_year, select_month, select_week, types[i]);
        }
      } else {
        //console.log('test8');
        for (var i = 0; i <= types.length - 1; i++) {
          display(user.uid, select_year, select_month, select_week, types[i]);
        }
      }
    }
    ///////////////////////////////////
    // When user chooses different week
  } else {
    const health_tab = document.querySelector('#test-swipe-1');
    health_tab.innerHTML = "";

    const career_tab = document.querySelector('#test-swipe-2');
    career_tab.innerHTML = "";

    const personal_tab = document.querySelector('#test-swipe-3');
    personal_tab.innerHTML = "";

    const financial_tab = document.querySelector('#test-swipe-4');
    financial_tab.innerHTML = "";

    const other_tab = document.querySelector('#test-swipe-5');
    other_tab.innerHTML = "";

    if (select_month == null) {
      //console.log('test9');
      select_month = 'January';

      if (select_year == null) {
        //console.log('test10');
        select_year = current_year.toString();

        for (var i = 0; i <= types.length - 1; i++) {
          display(user.uid, select_year, select_month, select_week, types[i]);
        }
      } else {
        //console.log('test11');
        for (var i = 0; i <= types.length - 1; i++) {
          display(user.uid, select_year, select_month, select_week, types[i]);
        }
      }
    } else {
      if (select_year == null) {
        //console.log('test12');
        select_year = current_year.toString();

        for (var i = 0; i <= types.length - 1; i++) {
          display(user.uid, select_year, select_month, select_week, types[i]);
        }
      } else {
        //console.log('test13');
        for (var i = 0; i <= types.length - 1; i++) {
          display(user.uid, select_year, select_month, select_week, types[i]);
        }
      }
    }
  }
  ////////////////////////////////////////
}

// Display Years
var year_id = document.getElementById('select_id_year');
year_Fragment = document.createDocumentFragment();
let chosen_year = '';

let years = new Array(3);
let current_year = new Date().getFullYear();

for (i = 0; i <= 3; i++) {
  years[i] = current_year + i;
}

for (var i = 0; i <= years.length - 1; i++) {
  var option = document.createElement('option');
  option.value = years[i];
  option.appendChild(document.createTextNode(years[i]));
  year_Fragment.appendChild(option);
}
year_id.appendChild(year_Fragment);

// Grabs the year value
year_id.addEventListener('change', function () {
  chosen_year = this.value;
});

// Display Months
var month_id = document.getElementById('select_id_month');
month_Fragment = document.createDocumentFragment();
let chosen_month = '';

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

for (var i = 0; i <= months.length - 1; i++) {
  var option = document.createElement('option');
  option.value = months[i];
  option.appendChild(document.createTextNode(months[i]));
  month_Fragment.appendChild(option);
}
month_id.appendChild(month_Fragment);

// Grabs the Month value
month_id.addEventListener('change', function () {
  chosen_month = this.value;
});

// Display Weeks
var week_id = document.getElementById('select_id_week');
week_fragment = document.createDocumentFragment();
let chosen_week = '';

var weeks = ["Week0", "Week1", "Week2", "Week3", "Week4"];

for (var i = 0; i <= weeks.length - 1; i++) {
  var option = document.createElement('option');
  option.value = weeks[i];
  option.appendChild(document.createTextNode(weeks[i]));
  week_fragment.appendChild(option);
}
week_id.appendChild(week_fragment);

// Grabs the Week value
week_id.addEventListener('change', function () {
  chosen_week = this.value;
});

// Display Types
var type_id = document.getElementById('select_id_type');
type_fragment = document.createDocumentFragment();
let chosen_type = '';

var types = ["Health", "Career", "Personal", "Financial", "Other"];

for (var i = 0; i <= types.length - 1; i++) {
  var option = document.createElement('option');
  option.value = types[i];
  option.appendChild(document.createTextNode(types[i]));
  type_fragment.appendChild(option);
}
type_id.appendChild(type_fragment);

// Grabs the Type value
type_id.addEventListener('change', function () {
  chosen_type = this.value;
});

// Get data in real-time based on types
function display(userID, year, month, week, type) {

  if (type == "Health") {
    db.collection('users').doc(userID)
      .collection('Goals').doc('Year')
      .collection(year).doc('Month')
      .collection(month).doc('Week')
      .collection(week).doc('Type')
      .collection(type).onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
          if (change.type === 'added') {
            renderHealth(change.doc.data(), change.doc.id);
          }
          // Update range and then render
          else if (change.type === 'modified') {
            renderRange(change.doc.data(), change.doc.id);
            render_new_goal(change.doc.data(), change.doc.id);
          }
          else if (change.type === 'removed') {
            removeList(change.doc.id);
          }
        });
      });
  }

  if (type == "Career") {
    db.collection('users').doc(userID)
      .collection('Goals').doc('Year')
      .collection(year).doc('Month')
      .collection(month).doc('Week')
      .collection(week).doc('Type')
      .collection(type).onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
          if (change.type === 'added') {
            renderCareer(change.doc.data(), change.doc.id);
          }
          // Update range and then render
          else if (change.type === 'modified') {
            renderRange(change.doc.data(), change.doc.id);
            render_new_goal(change.doc.data(), change.doc.id);
          }
          else if (change.type === 'removed') {
            removeList(change.doc.id);
          }
        });
      });
  }

  if (type == "Personal") {
    db.collection('users').doc(userID)
      .collection('Goals').doc('Year')
      .collection(year).doc('Month')
      .collection(month).doc('Week')
      .collection(week).doc('Type')
      .collection(type).onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
          if (change.type === 'added') {
            renderPersonal(change.doc.data(), change.doc.id);
          }
          // Update range and then render
          else if (change.type === 'modified') {
            renderRange(change.doc.data(), change.doc.id);
            render_new_goal(change.doc.data(), change.doc.id);
          }
          else if (change.type === 'removed') {
            removeList(change.doc.id);
          }
        });
      });
  }

  if (type == "Financial") {
    db.collection('users').doc(userID)
      .collection('Goals').doc('Year')
      .collection(year).doc('Month')
      .collection(month).doc('Week')
      .collection(week).doc('Type')
      .collection(type).onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
          if (change.type === 'added') {
            renderFinancial(change.doc.data(), change.doc.id);
          }
          // Update range and then render
          else if (change.type === 'modified') {
            renderRange(change.doc.data(), change.doc.id);
            render_new_goal(change.doc.data(), change.doc.id);
          }
          else if (change.type === 'removed') {
            removeList(change.doc.id);
          }
        });
      });
  }

  if (type == "Other") {
    db.collection('users').doc(userID)
      .collection('Goals').doc('Year')
      .collection(year).doc('Month')
      .collection(month).doc('Week')
      .collection(week).doc('Type')
      .collection(type).onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
          if (change.type === 'added') {
            renderOther(change.doc.data(), change.doc.id);
          }
          // Update range and then render
          else if (change.type === 'modified') {
            renderRange(change.doc.data(), change.doc.id);
            render_new_goal(change.doc.data(), change.doc.id);
          }
          else if (change.type === 'removed') {
            removeList(change.doc.id);
          }
        });
      });
  }
}

// Delete todo list data
function delete_todo_list(userID, year, month, week, type, docID) {
  db.collection('users').doc(userID)
    .collection('Goals').doc('Year')
    .collection(year).doc('Month')
    .collection(month).doc('Week')
    .collection(week).doc('Type')
    .collection(type).doc(docID).delete();
}

function update_range(userID, year, month, week, type, docID, range) {
  db.collection('users').doc(userID)
    .collection('Goals').doc('Year')
    .collection(year).doc('Month')
    .collection(month).doc('Week')
    .collection(week).doc('Type')
    .collection(type).doc(docID).update({
      range: range
    });
}

// Enable offline data
db.enablePersistence().catch(function (err) {
  if (err.code == 'failed-precondition') {
    // probably multiple tabs open at once
    console.log('persistance failed');
  }
  else if (err.code == 'unimplemented') {
    // lack of browser support for the feature
    console.log('persistance not available');
  }
});

// Render goals insides tabs based on types
const health_tab = document.querySelector('#test-swipe-1');
const renderHealth = (data, id) => {
  const html = `
    <div id="change_colour" class="card-panel todo row" data-id="${id}">
        <div class="todo-details">
          <a data-id="${id}" data-target="modal1" class="modal-trigger">${data.todo}</a>
          <p class="update_range" data-id="${id}">${data.range}%</p>        
        </div>
        <div class="todo-delete">
          <i class="material-icons" data-id="${id}">delete_outline</i>
        </div>
    </div>
  `;
  health_tab.innerHTML += html;
  //Show red, orange and green based on the range
  changeColour(data.range, id);
};

const career_tab = document.querySelector('#test-swipe-2');
const renderCareer = (data, id) => {
  const html = `
  <div id="change_colour" class="card-panel todo row" data-id="${id}">
      <div class="todo-details">
        <a data-id="${id}" data-target="modal1" class="modal-trigger">${data.todo}</a>
        <p class="update_range" data-id="${id}">${data.range}%</p>        
      </div>
      <div class="todo-delete">
        <i class="material-icons" data-id="${id}">delete_outline</i>
      </div>
  </div>
  `;
  career_tab.innerHTML += html;
  //Show red, orange and green based on the range
  changeColour(data.range, id);
};

const personal_tab = document.querySelector('#test-swipe-3');
const renderPersonal = (data, id) => {
  const html = `
  <div id="change_colour" class="card-panel todo row" data-id="${id}">
      <div class="todo-details">
        <a data-id="${id}" data-target="modal1" class="modal-trigger">${data.todo}</a>
        <p class="update_range" data-id="${id}">${data.range}%</p>        
      </div>
      <div class="todo-delete">
        <i class="material-icons" data-id="${id}">delete_outline</i>
      </div>
  </div>
  `;
  personal_tab.innerHTML += html;
  //Show red, orange and green based on the range
  changeColour(data.range, id);
};

const financial_tab = document.querySelector('#test-swipe-4');
const renderFinancial = (data, id) => {
  const html = `
  <div id="change_colour" class="card-panel todo row" data-id="${id}">
      <div class="todo-details">
        <a data-id="${id}" data-target="modal1" class="modal-trigger">${data.todo}</a>
        <p class="update_range" data-id="${id}">${data.range}%</p>        
      </div>
      <div class="todo-delete">
        <i class="material-icons" data-id="${id}">delete_outline</i>
      </div>
  </div>
  `;
  financial_tab.innerHTML += html;
  //Show red, orange and green based on the range
  changeColour(data.range, id);
};

const other_tab = document.querySelector('#test-swipe-5');
const renderOther = (data, id) => {
  const html = `
  <div id="change_colour" class="card-panel todo row" data-id="${id}">
      <div class="todo-details">
        <a data-id="${id}" data-target="modal1" class="modal-trigger">${data.todo}</a>
        <p class="update_range" data-id="${id}">${data.range}%</p>        
      </div>
      <div class="todo-delete">
        <i class="material-icons" data-id="${id}">delete_outline</i>
      </div>
  </div>
  `;
  other_tab.innerHTML += html;
  //Show red, orange and green based on the range
  changeColour(data.range, id);
};

const renderRange = (data, id) => {
  document.querySelector(`.update_range[data-id="${id}"]`).innerHTML = `<p class="update_range" data-id="${id}">${data.range}</p>`;
};

const render_new_goal = (data, id) => {
  document.querySelector(`a[data-id="${id}"]`).innerHTML = `<a data-id="${id}" data-target="modal1" class="modal-trigger">${data.todo}</a>`;
  $('a[data-id="' + id + '"]').addClass('whiteText');
};

// This is for closing the modal after submitted
modal = document.querySelector("#modal1");

const update_goal_form = document.querySelector('#update-goal-form');
function update_goal(userID, year, month, week, type, docID, todo) {
  db.collection('users').doc(userID)
    .collection('Goals').doc('Year')
    .collection(year).doc('Month')
    .collection(month).doc('Week')
    .collection(week).doc('Type')
    .collection(type).doc(docID).update({
      todo: todo
    });
    update_goal_form.update_goal.value = '';
}

update_goal_form.addEventListener('submit', (e) => {
  e.preventDefault();

  var user = auth.currentUser;
  update_goal(user.uid, select_year, select_month, select_week, select_type, get_id, update_goal_form.update_goal.value);

  M.Modal.getInstance(modal).close();
});

const submit_range = document.querySelector('#range-form');
submit_range.addEventListener('submit', (e) => {

  e.preventDefault();

  var user = auth.currentUser;
  update_range(user.uid, select_year, select_month, select_week, select_type, get_id, submit_range.range.value);

  //Show red, orange and green based on the submitted range
  changeColour(submit_range.range.value, get_id);

  // popup modal when range has submitted
  if(submit_range.range.value == 100){
    modal_congrats = document.querySelector("#modal_congrats");
    M.Modal.getInstance(modal_congrats).open();
  }

  // popup modal when range has submitted
  if(submit_range.range.value >= 25 && submit_range.range.value <= 95 ){
    modal_awesome = document.querySelector("#modal_awesome");
    M.Modal.getInstance(modal_awesome).open();
  }

  // popup modal when range has submitted
  if(submit_range.range.value < 25){
    modal_keep_going = document.querySelector("#modal_keep_going");
    M.Modal.getInstance(modal_keep_going).open();
  }

  M.Modal.getInstance(modal).close();
});

function changeColour(range_value, id_value) {
  var change_colours = ["showRed", "showOrange", "showGreen"];

  if (range_value <= 25) {
    //Show red
    for (var i = 0; i <= change_colours.length; i++) {
      $('#change_colour[data-id="' + id_value + '"]').removeClass(change_colours[i]);
      $('#change_colour[data-id="' + id_value + '"]').addClass('showRed');
      $('a[data-id="' + id_value + '"]').addClass('whiteText');
    }
  }

  if (range_value >= 25) {
    //show orange
    for (var i = 0; i <= change_colours.length; i++) {
      $('#change_colour[data-id="' + id_value + '"]').removeClass(change_colours[i]);
      $('#change_colour[data-id="' + id_value + '"]').addClass('showOrange');
      $('a[data-id="' + id_value + '"]').addClass('whiteText');
    }
  }

  if (range_value >= 95) {
    //show green
    for (var i = 0; i <= change_colours.length; i++) {
      $('#change_colour[data-id="' + id_value + '"]').removeClass(change_colours[i]);
      $('#change_colour[data-id="' + id_value + '"]').addClass('showGreen');
      $('a[data-id="' + id_value + '"]').addClass('whiteText');
    }
  }

}

// Remove list from DOM
const removeList = (id) => {
  const todo = document.querySelector(`.todo[data-id="${id}"]`);
  todo.remove();
};

// Checks to see if that user has logged in
auth.onAuthStateChanged((user) => {
  if (user) {
    //console.log(user.email, "has logged in");
    search_task()

    //  Display years in modal
    const year_modal = document.querySelector('#modal_year');
    for (var i = 0; i <= years.length - 1; i++) {
      const html = `
      <div class="card-panel year row">
        <button id="year_num" value="${years[i]}" class="btn-flat" style="margin-left: 50px;">${years[i]}</button>
      </div>
      `;
      year_modal.innerHTML += html;
    }

    // Select year from the modal
    const year = document.querySelectorAll('#year_num');
    for (var i = 0; i < year.length; i++) {
      year[i].addEventListener("click", function () {
        select_year = this.value;
        current_this_year.innerHTML = select_year;
        search_task();
        const modal = document.querySelector("#modal_year");
        M.Modal.getInstance(modal).close();
      });
    }

    // Display months in modal
    const month_modal = document.querySelector('#modal_month');
    for (var i = 0; i <= months.length - 1; i++) {
      const html = `
      <div class="card-panel month row">
        <button id="month_num" value="${months[i]}" class="btn-flat" style="margin-left: 40px;">${months[i]}</button>
      </div>
      `;
      month_modal.innerHTML += html;
    }

    // Select month from the modal
    const month = document.querySelectorAll('#month_num');
    for (var i = 0; i < month.length; i++) {
      month[i].addEventListener("click", function () {
        select_month = this.value;
        current_month.innerHTML = select_month;
        search_task();
        const modal = document.querySelector("#modal_month");
        M.Modal.getInstance(modal).close();
      });
    }

    //Display weeks in modal
    const week_modal = document.querySelector('#modal_week');
    for (var i = 0; i <= weeks.length - 1; i++) {
      const html = `
      <div class="card-panel week row">
        <button id="week_num" value="${weeks[i]}" class="btn-flat" style="margin-left: 35px;">${weeks[i]}</button>
      </div>
      `;
      week_modal.innerHTML += html;
    }

    // Select week from the modal
    const week = document.querySelectorAll('#week_num');
    for (var i = 0; i < week.length; i++) {
      week[i].addEventListener("click", function () {
        select_week = this.value;
        current_week.innerHTML = select_week;
        search_task();
        const modal = document.querySelector("#modal_week");
        M.Modal.getInstance(modal).close();
      });
    }

    // Add todo list data
    const form = document.querySelector('#todo-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      db.collection('users').doc(user.uid)
        .collection('Goals').doc('Year')
        .collection(chosen_year).doc('Month')
        .collection(chosen_month).doc('Week')
        .collection(chosen_week).doc('Type')
        .collection(chosen_type).add({
          todo: form.todo.value,
          range: 0
        });
      form.todo.value = '';
    });

    // Update range from Health tab
    const health_tab = document.querySelector('#test-swipe-1');
    health_tab.addEventListener('click', e => {
      if (e.target.tagName === 'A') {
        const id = e.target.getAttribute('data-id');
        get_id = id;
        select_type = "Health";
      }
    });

    //Update range from Career tab
    const career_tab = document.querySelector('#test-swipe-2');
    career_tab.addEventListener('click', e => {
      if (e.target.tagName === 'A') {
        const id = e.target.getAttribute('data-id');
        get_id = id;
        select_type = "Career";
      }
    });

    // Update range from Personal tab
    const personal_tab = document.querySelector('#test-swipe-3');
    personal_tab.addEventListener('click', e => {
      if (e.target.tagName === 'A') {
        const id = e.target.getAttribute('data-id');
        get_id = id;
        select_type = "Personal";
      }
    });

    // Update range from Financial tab
    const financial_tab = document.querySelector('#test-swipe-4');
    financial_tab.addEventListener('click', e => {
      if (e.target.tagName === 'A') {
        const id = e.target.getAttribute('data-id');
        get_id = id;
        select_type = "Financial";
      }
    });

    // Update range from Other tab
    const other_tab = document.querySelector('#test-swipe-5');
    other_tab.addEventListener('click', e => {
      if (e.target.tagName === 'A') {
        const id = e.target.getAttribute('data-id');
        get_id = id;
        select_type = "Other";
      }
    });

    // Delete the list from Health tab
    const healthContainer = document.querySelector('#test-swipe-1');
    healthContainer.addEventListener('click', e => {
      if (e.target.tagName === 'I') {
        const id = e.target.getAttribute('data-id');
        delete_todo_list(user.uid, select_year, select_month, select_week, "Health", id);
      }
    });

    // Delete the list from Career tab
    const careerContainer = document.querySelector('#test-swipe-2');
    careerContainer.addEventListener('click', e => {
      if (e.target.tagName === 'I') {
        const id = e.target.getAttribute('data-id');
        delete_todo_list(user.uid, select_year, select_month, select_week, "Career", id);
      }
    });

    // Delete the list from Personal tab
    const personalContainer = document.querySelector('#test-swipe-3');
    personalContainer.addEventListener('click', e => {
      if (e.target.tagName === 'I') {
        const id = e.target.getAttribute('data-id');
        delete_todo_list(user.uid, select_year, select_month, select_week, "Personal", id);
      }
    });

    // Delete the list from Financial tab
    const financialContainer = document.querySelector('#test-swipe-4');
    financialContainer.addEventListener('click', e => {
      if (e.target.tagName === 'I') {
        const id = e.target.getAttribute('data-id');
        delete_todo_list(user.uid, select_year, select_month, select_week, "Financial", id);
      }
    });

    // Delete the list from Other tab
    const otherContainer = document.querySelector('#test-swipe-5');
    otherContainer.addEventListener('click', e => {
      if (e.target.tagName === 'I') {
        const id = e.target.getAttribute('data-id');
        delete_todo_list(user.uid, select_year, select_month, select_week, "Other", id);
      }
    });

  } else {
    console.log("user has logged out");
    window.location.href = "../index.html";
  }
});

// Confirm message
var Confirmyear = document.getElementById("select_id_year");
var Confirmmonth = document.getElementById("select_id_month");
var Confirmweek = document.getElementById("select_id_week");
var Confirmtype = document.getElementById("select_id_type");
var Confirmtodo = document.getElementById("todo");

function goalconfirm() {
  document.getElementById("goal-confirm").innerHTML =
    Confirmyear.value + " " +
    Confirmmonth.value + " " +
    Confirmweek.value + " " +
    Confirmtype.value;
  document.getElementById("goal-confirm-text").innerHTML = Confirmtodo.value;
}

