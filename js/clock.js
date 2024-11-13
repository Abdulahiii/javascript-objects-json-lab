let myNode;

(function() {
    console.info("Hello JS");
    const digitalClock = document.getElementById("digitalClock");
    myNode = document.createElement("div");
    digitalClock.appendChild(myNode);
    myNode.innerHTML = "Welcome";

    const myDate = new Date();
    console.dir(myDate);
    myNode.innerHTML = myDate.toDateString();
})();

const updateClockHands = (myDate) => {
    const secondHand = document.getElementById("secondHand");
    const minHand = document.getElementById("minHand");
    const hrHand = document.getElementById("hrHand");

    const seconds = myDate.getSeconds();
    const minutes = myDate.getMinutes();
    const hours = myDate.getHours();

    const rotSeconds = seconds * 6 - 90; // 6 degrees per second (360/60)
    const rotMinutes = minutes * 6 - 90; // 6 degrees per minute (360/60)
    const rotHours = (hours % 12) * 30 + (minutes / 2) - 90; // 30 degrees per hour, plus the creeping effect for minutes

    secondHand.style.transform = `rotate(${rotSeconds}deg)`;
    minHand.style.transform = `rotate(${rotMinutes}deg)`;
    hrHand.style.transform = `rotate(${rotHours}deg)`;
};

const updateTime = () => {
    console.info("tick tock");
    const myDate = new Date();
    myNode.innerHTML = myDate.toLocaleTimeString([], { 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit" 
    });
    updateClockHands(myDate);
};

setInterval(updateTime, 1000);
updateTime();
