const postComment = document.getElementById("post");
const comBox = document.getElementById("newComment");

postComment.addEventListener('click', function () {
    var commentText = document.getElementById("newComment").value;

    var newDiv = document.createElement("div");

    var newDivCon = document.createElement("div");

    var newDivName = document.createElement("div");
    
    var newDivWhole = document.createElement("div");

    var newContents = document.createTextNode(commentText);

    var newProName = document.createTextNode("Jackleems");

    newDiv.className = "comLeft";

    newDivCon.className = "comLeftCon";

    newDivName.className = "boldIt";

    newDivWhole.className = "flexIt";

    newDivName.appendChild(newProName);

    newDivCon.appendChild(newContents);

    var documentFragment = document.createDocumentFragment();

    documentFragment.appendChild(newDivWhole);

    newDivWhole.appendChild(newDivName);

    newDivWhole.appendChild(newDivCon);

    newDiv.appendChild(documentFragment);
    
    var currentDiv = document.getElementById("newCom"); 

    currentDiv.appendChild(newDiv); 

    console.log(commentText);

    document.getElementById("newComment").value = "";

    console.log(commentText);
});

comBox.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        var commentText = document.getElementById("newComment").value;

        var newDiv = document.createElement("div");

        var newDivCon = document.createElement("div");

        var newDivName = document.createElement("div");
        
        var newDivWhole = document.createElement("div");

        var newContents = document.createTextNode(commentText);

        var newProName = document.createTextNode("Jackleems");

        newDiv.className = "comLeft";

        newDivCon.className = "comLeftCon";

        newDivName.className = "boldIt";

        newDivWhole.className = "flexIt";

        newDivName.appendChild(newProName);

        newDivCon.appendChild(newContents);

        var documentFragment = document.createDocumentFragment();

        documentFragment.appendChild(newDivWhole);

        newDivWhole.appendChild(newDivName);

        newDivWhole.appendChild(newDivCon);

        newDiv.appendChild(documentFragment);
        
        var currentDiv = document.getElementById("newCom"); 

        currentDiv.appendChild(newDiv);

        document.getElementById("newComment").value = "";
    } 
})


