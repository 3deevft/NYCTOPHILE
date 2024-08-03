document.getElementById("spotify").onclick = function(){
    window.open("https://open.spotify.com/track/7rEot4VjKKM13SGj30cJz2")
}

document.getElementById("submitKey").onclick = function() {
    y= document.getElementById("keyed").value

    if(y=="BOONLA"){
        document.getElementById("showLy").onclick =function(){
            let x = document.getElementById('audio');
            x.play();
            x.currentTime = 0;
            // Array of timestamp and lyrics pairs
            const lyricsAtTimes = [
                { time: 3, text: "#Start" },
                { time:18 , text: "Never to a change, never to a chance Never know what's coming in" },
                { time: 22, text: "Never try to knew, always in a blur Thinking if I'm gonna fall" },
                { time: 32, text: "I don't know why I used to think that I could fly" },
                { time: 41, text: "Every second time is running and it's gonna fly Sitting on the horse ride looking at the summer sky" },
                { time: 48, text: "Every time I wander what I'm thinking every night" },
                { time: 53, text: "When I was younger I never wanna go home tonight" },
                { time: 72, text: "Should I tell the rest, tryin' something new Before everything just flew" },
                { time: 82, text: "Things I left and said, never not forget On the stage of for a time" },
                { time: 90, text: "I don't know why I used to think that I could fly" },
                { time: 95, text: "Every second time is running and it's gonna fly Sitting on the horse ride looking at the summer sky" },
                { time: 104, text: "Every time I wander what I'm thinking every night" },
                { time: 110, text: "When I was younger I never wanna go home All my years of living I'm still taking this in road" },
                { time: 117, text: "It's the road of living I'm just never giving up" },
                { time: 122, text: "Feeling optimistic every time I'm feeling down" },
                { time: 127, text: "When I was younger I never wanna go home tonight" },
                { time: 137, text: "I don't know what I want or I need or believe" },
                { time: 142, text: "I just want to live life and survive in this time" },
                { time: 145, text: "Window shot curtains down Silence now getting loud" },
                { time: 150, text: "Thinking of floating clouds, mysteries now unfyled" },
                { time: 157, text: "Every second time is running and it's gonna fly Sitting on the horse ride looking at the summer sky" },
                { time: 161, text: "Every time I wander what I'm thinking every night" },
                { time: 163, text: "When I was younger I never wanna go home All my years of living I'm still taking this in road" },
                { time: 173, text: "It's the road of living I'm just never giving up" },
                { time: 178, text: "Feeling optimistic every time I'm feeling down" },
                { time: 181, text: "When I was younger I never wanna go home tonight" },
                { time: 200, text: "#End" },];

            // Variable to keep track of the index of the current timestamp
            let currentIndex = 0;

            // Function to update lyrics based on the current time
            const updateLyrics = () => {
                if (currentIndex < lyricsAtTimes.length && x.currentTime >= lyricsAtTimes[currentIndex].time) {
                    document.getElementById('lyrics').textContent = lyricsAtTimes[currentIndex].text;
                    currentIndex++;
                }
            };

            // Set up an event listener to check the current time continuously
            x.addEventListener('timeupdate', updateLyrics);
        };
        
        }
    }
    