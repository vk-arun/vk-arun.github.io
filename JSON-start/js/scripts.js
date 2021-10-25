
fetch("testdata.json").
then((mydata)=> mydata.json())
.then((mydata) => {
    console.log(mydata);
    console.log(mydata.name);
    document.getElementById("pop").innerHTML = mydata.name;

    let sample = document.createElement("h1");
    sample.textContent = mydata.name;
    document.getElementById("pop").appendChild(sample);

}).catch((err) => console.log(err));