async function fetchData() {
    const loadingtext = document.getElementById("loading")
    const dataText = document.getElementById("data")

    loadingtext.style.display = "block";// show loading message..
    dataText.textContent = "";

    try {
        const response = await new Promise(resolve => {
            setTimeout(() => {
                resolve("Data Loaded Successfully");
            }, 3000);
        });
       ;// hide loading message..
        dataText.textContent = response;

    } catch (error) {
       ;// hide loading message..
        dataText.textContent = "Error fetching data";
    } 
    finally {
        loadingtext.style.display = "none";// hide loading message..
    }
}