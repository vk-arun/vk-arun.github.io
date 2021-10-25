
fetch("testdata.json").
then(mydata=> mydata.json())
.then(mydata => {
    console.log(mydata);
}).catch(err => console.log(err));