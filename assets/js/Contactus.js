function myFunction1() {
    var name = document.querySelector(".contact_form").elements[0].value;
    var email = document.querySelector(".contact_form").elements[1].value;
    var msg = document.querySelector(".contact_form").elements[2].value;
    document.getElementById("demo").innerHTML = "DONE";
    console.log(name,email,msg)
  }

  function myFunction() {
    var name = document.querySelector(".contact_form").elements[0].value;
    var email = document.querySelector(".contact_form").elements[1].value;
    var msg = document.querySelector(".contact_form").elements[2].value;
    firebase
      .firestore()
      .collection("Contact")
      .add({
        name,
        email,
        msg
      })
      .then(function () {
        console.log("data sent")
        document.getElementById("demo").innerHTML = name;
      })
      .catch(function () {
        var error = error.message;
        console.log(error);
        document.getElementById("demo").innerHTML = "not done";

      });
  }