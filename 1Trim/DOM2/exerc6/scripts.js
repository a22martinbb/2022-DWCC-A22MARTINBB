let arbore = {
    "Fish": {
        "trout": {},
        "salmon": {}
    },
    "Tree": {
        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "apple tree": {},
            "magnolia": {}
        }
    }
    };

function createTree(data){
    let ul = document.createElement("ul");
    let array = Object.entries(data);
    for([key, value] of array){
        let li = document.createElement("li");
        li.innerHTML = key;

        ul.append(li);

        if(value != ""){
            li.append(createTree(value));

        }
    }
    return ul;   
}

document.body.append(createTree(arbore));