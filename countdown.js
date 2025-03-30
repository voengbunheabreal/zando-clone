function startCountdown(targetDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            document.getElementById("countdown").innerHTML = "Expired";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = 
            `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
    }

    updateCountdown(); // Initial call to avoid 1s delay
    setInterval(updateCountdown, 1000);
}

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 4); // Set 4 days countdown
startCountdown(targetDate);