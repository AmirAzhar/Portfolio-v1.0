function openModal(modalName){
    var modal = document.getElementById(modalName);
    modal.style.display = "block";
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  
  function closeModal(modalName){
    var modal = document.getElementById(modalName);
    modal.style.display = "none";
  }