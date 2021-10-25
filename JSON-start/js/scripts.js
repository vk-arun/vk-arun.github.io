
fetch("testdata.json").
then(mydata=> mydata.json())
.then(mydata => {
    console.log(mydata);
    console.log(mydata.name);
    document.getElementById("txt").innerHTML = mydata.name;

}).catch(err => console.log(err));