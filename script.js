
function tableClickFunction() {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let text1 = document.createTextNode("2");
    td1.appendChild(text1)
    let text2 = document.createTextNode("Bangladesh");
    td2.appendChild(text2)
    let text3 = document.createTextNode("545454");
    td3.appendChild(text3)
    let text4 = document.createTextNode("545");
    td4.appendChild(text4)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    table.appendChild(tr)
}

// function functionName(a,c,dd){

// }




window.onload = async () => {
    let data = await fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': 'api key',
            'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
        }
    }).then(response => response.json()).catch((e) => {
        console.log(e)
    })
    // console.log(data.countries_stat)
    let countries = data.countries_stat
    let table = document.getElementById("table1");

    countries.forEach(element => {
        // console.log(element)
        let tr = document.createElement("tr")
        let c_name = document.createElement("td")
        let t_cases = document.createElement("td")
        let a_cases = document.createElement("td")
        let deaths = document.createElement("td")
        let new_cases = document.createElement("td")
        let t_recovered = document.createElement("td")

        let c_name_textNode = document.createTextNode(element.country_name);
        c_name.appendChild(c_name_textNode)
        let t_cases_textNode = document.createTextNode(element.cases);
        t_cases.appendChild(t_cases_textNode)
        let a_cases_textNode = document.createTextNode(element.active_cases);
        a_cases.appendChild(a_cases_textNode)
        let deaths_textNode = document.createTextNode(element.deaths);
        deaths.appendChild(deaths_textNode)
        let new_cases_textNode = document.createTextNode(element.new_cases);
        new_cases.appendChild(new_cases_textNode)
        let t_recovered_textNode = document.createTextNode(element.total_recovered);
        t_recovered.appendChild(t_recovered_textNode)

        tr.appendChild(c_name)
        tr.appendChild(t_cases)
        tr.appendChild(a_cases)
        tr.appendChild(deaths)
        tr.appendChild(new_cases)
        tr.appendChild(t_recovered)

        table.appendChild(tr)

    });

}
