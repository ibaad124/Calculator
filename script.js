// Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'AC'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})
function bounceTitle() {
    let title = document.querySelector('.text-center');
    let duration = 5000; // 5 seconds
    let startTime = Date.now();

    function animate() {
        let elapsedTime = Date.now() - startTime;
        if (elapsedTime >= duration) return; // Stop after 5 seconds

        let x = Math.random() * (window.innerWidth - title.clientWidth);
        let y = Math.random() * (window.innerHeight - title.clientHeight);

        title.style.transform = `translate(${x}px, ${y}px)`;

        requestAnimationFrame(animate);
    }

    animate();
}