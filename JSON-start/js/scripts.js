
fetch("testdata.json").
then(mydata=> mydata.json())
.then(mydata => {
    console.log(mydata);
    console.log(mydata.name);
    document.getElementById("pop").innerHTML = mydata.name;

}).catch(err => console.log(err));