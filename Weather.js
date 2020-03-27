const temprature = document.getElementById("temprature");

document.getElementById("button").onclick = () => {
  let city = document.getElementById("city").value;

  let key = "0af36754a846de7560a9d6b3b3ed8c04";

  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`;
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      // console.log(data);
      let temp = data.main

      let cityName = `<ul class="list-group  text-center col-6">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span style ="font:25px">${city} </span> 
                        <span class="badge badge-secondary badge-pill"></span>
                       </ul>`;

      city.innerHTML = cityName;
     

      let tempHtml = "";
      for (const tempv in temp ){
      
        // console.log(`${tempv}:${temp[tempv]}`);

        let tempG = `<ul class="list-group  text-center" col-6">
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span style="font:25px primary">${tempv} </span>
                        <span class="badge badge-primary">${temp[tempv]} </span>
                    </ul>`;
        tempHtml += tempG;
        temprature.innerHTML = tempHtml;
      }
    });
};
