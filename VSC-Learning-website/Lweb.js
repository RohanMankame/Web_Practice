
  
const track = document.getElementById("image-track");

window.onmousedown = e => {
    track.dataset VART = e.clientX;

}

window.onmousemove = e => {
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth/2;

    const persentage = (mouseDelta / maxDelta) * 100
}