let show_onscreen = document.getElementById("col")


let store_cards;
let item = {}

function showTime() {
    let input1 = document.getElementById('name').value;
    let input2 = document.getElementById('surname').value;
    let input3 = document.getElementById('enter_idea').value;

    if (input1 && input2 && input3) {
        // document.getElementById("col1").innerHTML = input1; 
        
        item.username = input1;
        item.surname = input2;
        item.idea = input3;
        item.selected = false;
        store_cards.push(item)
        console.log(store_cards)

        sessionStorage.setItem("checking", JSON.stringify(store_cards))
    }

}

if (sessionStorage.getItem("checking")) {
    store_cards = JSON.parse(sessionStorage.getItem("checking"))
} else {
    store_cards = []
}

function read_card(){
    
    store_cards.forEach(ele => {
        document.querySelector(".one").innerHTML += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${ele.idea}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Date: </h6>
          <p class="card-text">${ele.idea}</p>
          <a href="#" class="card-link">Collaborators: 0</a>
          <a href="#" class="card-link">Name: ${ele.username} ${ele.surname}</a>
        </div>
      </div>
        `

    });
}

read_card()