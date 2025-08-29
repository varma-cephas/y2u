const search = document.querySelector("#search");
const button = document.querySelector("#search-button");

// const videoOneThumbnail = document.querySelector("#thumbnail-watchvideo1");
const videoOneThumbnail = document.querySelector("#thumbnail-video1");
const videoOneDuration = document.querySelector("#video1-time")
const videoOneTitle = document.querySelector("#title-video1");
const videoOneDate = document.querySelector("#date-video1")
const videoOneAuthor = document.querySelector("#author-video1");
const videoOneDownload = document.querySelector("#download-video1");
const videoOneDownloadVideo = document.querySelector("#download-video1-video");



button.addEventListener("click", () => {
    if(search.value === ""){
        console.log("Enter a valid input")
    }
    else
    {

        async function processEndPoint(url){
            const request = await fetch(url);
            const response = await request.json();
            return response.results;
        }
        setTimeout(() =>{
            const responseResult = processEndPoint(apiEndPoint);
            console.log("this is the result")
            responseResult.then((value)=>{
                firstVideo = value[0];
                const firstVideoId = firstVideo.id
                console.log(firstVideoId)


                async function downloadLinkAudioEndPoint(url){
                    request = await fetch(url);
                    response = await request.json();
                    return response;
                }

                const videoOneDownloadLink = async () =>{
                   const theAudioDownloadLink =  await downloadLinkAudioEndPoint(downloadLinkEndPoint);
                   return theAudioDownloadLink;
                }

                videoOneDownloadLink().then((link) => {
                    // console.log("the link")
                    // console.log(link);
                    videoOneDownload.setAttribute("href", link.link)
                    videoOneDownload.style.textDecoration = "none";
                    videoOneDownload.style.color = "#000000";
                    videoOneDownload.style.fontSize = "0.8rem";
                })


                const videoOneDownloadLinkVideo = async () => {
                    const theVideoDownloadLink = await downloadLinkAudioEndPoint(downloadVideoEndpoint);
                    return theVideoDownloadLink;
                }

                videoOneDownloadLinkVideo().then((link) => {
                    // console.log("video link")
                    // console.log()
                    // const downloadVideo = async (url, filename) => {
                    //     const videoData = await fetch(url, {
                    //         mode: "no-cors"
                    //     });
                    //     const videoBlob = videoData.blob();
                    //     const videoObjectUrl = URL.createObjectURL(videoBlob);

                        videoOneDownloadVideo.setAttribute("href", link.adaptiveFormats[0].url);
                        videoOneDownloadVideo.setAttribute("download", theLink.link);

                        // videoOneDownloadVideo.click()
                    // }

                    // downloadVideo(link.adaptiveFormats[0].url, firstVideo.title)
                })
                // videoOneDownloadLink.then((theLink) => {
                //     const videoOneAudoDownloadLink = theLink.link;
                //     return videoOneAudoDownloadLink
                // })
                // a function that will get the link from promise the api call returns
                console.log(firstVideo)
                videoOneThumbnail.setAttribute("src", firstVideo.thumbnail.url);
                videoOneTitle.textContent = firstVideo.title;
                videoOneDuration.textContent = firstVideo.duration_formatted;
                videoOneDate.textContent = firstVideo.uploadedAt;
                videoOneAuthor.textContent = firstVideo.channel.name
                videoOneDownload.style.display = "block";
                videoOneDownloadVideo.style.display = "block";
            })
            console.log("this is the end result")
        }, 10000)
    }
})



