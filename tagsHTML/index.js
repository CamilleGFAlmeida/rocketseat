document.addEventListener("DOMContentLoaded"), () => {
    let 
    progress = 0,
    incrementSpeed = 1,
    progressBar = document.getElementById('bar'); 

    let progressInterval = setInterval(() => {
        progress += incrementSpeed;
        progressBar.value = progress;

        if(progress >= 100) {
            clearInterval(progressInterval); 
        }
    }, 100); 
}; 