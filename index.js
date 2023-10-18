      //Making this a function means that I can use a button to prompt.
      function getUserInformation() {
        // Prompt the user for name, age, and favorite color
        var name = prompt("Please enter your name:");
        var age = prompt("Please enter your age:");
        var color = prompt("Please enter your favorite color:");

        // Format a string with the user's information
        let userInfo =
          "Name: " + name + "<br>Age: " + age + "<br>Favorite Color: " + color;

        // Display the user's information inside a div tag with the id "user-info"
        // This is best practice because document.write() will just append it to the root of the document.
        document.getElementById("user-info").innerHTML = userInfo;
      }