const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to selecxt media stream, pass to video elements, then play.

async function selectMediaStream () {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch (error) {
        console.log('woops, thisis error', error)
    }
}

button.addEventListener('click', async () => {
    // disable button
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // reset Button
    button.disabled = false;
})
// onLoad
selectMediaStream(); 