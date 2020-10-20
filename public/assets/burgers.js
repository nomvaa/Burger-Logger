// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-btn").on("click", function(event) {
      var id = $(this).data("id");
      
      var newDevouredState = {
        devoured: true
      };
      
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          location.reload();
        }
      );
    });
    
    $("#submit").on("click", function(event) {
      event.preventDefault();
      var newBurger = {
        burger_name: $("#submit-burger").val().trim(),
        devoured: false
      };
      console.log(newBurger)
      
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
        
      // Send the DELETE request.
      console.log("deleting.....", id)
      $.ajax(`/api/burgers?id=${id}`, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  