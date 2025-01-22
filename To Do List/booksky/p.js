var popupoverlay=document.querySelector(".popupoverlay")
var popbox=document.querySelector(".popbox")
var addbutton=document.getElementById("addpopup-button")
addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popbox.style.display="block"
})
var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var booktittleinput=document.getElementById("booktittleinput")
var bookauthour=document.getElementById("bookauthor")
var bookdescription=document.getElementById("bookdescription")
addbook.addEventListener("click",function(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${booktittleinput.value}<h2>
    <h5>${bookauthour.value}<h5>
    <p>${bookdescription.value}<P>

    <button onclick="deletebook(event)">Delete</button>`
    


    container.append(div)
     popupoverlay.style.display="none"
    popbox.style.display="none"

})
function deletebook(event)

{
    event.target.parentElement.remove()
    
}