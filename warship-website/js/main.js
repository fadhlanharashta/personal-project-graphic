document.addEventListener("DOMContentLoaded", function () {
    const gunButton = document.getElementById("gun");
    const modelViewer = document.getElementById("myModelViewer");
  
    gunButton.addEventListener("click", function () {
      // Set the camera target to the gun's position
      modelViewer.cameraTarget = { x: 40, y: 0, z: 100 }; // Adjust the position accordingly
  
      // Set the camera orbit to rotate around the gun
      modelViewer.cameraOrbit = "345deg 65deg 0deg"; // Adjust the rotation accordingly
  
      // Set the field of view for zooming
      modelViewer.fieldOfView = "1deg"; // Adjust the field of view for increased zoom
  
      // Disable auto-rotate to prevent camera rotation
      modelViewer.removeAttribute("auto-rotate");
  
      // Apply CSS transformation to simulate zooming
      modelViewer.style.transform = "scale(1.5)"; // Adjust the scale factor for desired zoom level
    });
  });

  
  