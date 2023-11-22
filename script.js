fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let main_data = data.data
    let imgurl;
    console.log(main_data);
    console.log(main_data[0].permalink);

    const main_image_div = document.getElementById('image_main_div');
    main_image_div.innerHTML = " ";

    for (let index = 0; index < main_data.length; index++) {
        imgurl = main_data[index].media_url;

        let img_link = document.createElement("a");
        img_link.href = main_data[index].permalink;
        img_link.target = "_blank"
        let imageDiv = document.createElement("div");
        if(main_data[index].media_type == "IMAGE"  || main_data[index].media_type == "CAROUSEL_ALBUM"  ){
            imageDiv.classList = " w-full aspect-square bg-white rounded bg-cover bg-center "
            imageDiv.style.backgroundImage = `url('${imgurl}')`;
        }
        else{
            img_link.classList = "relative"
            imageDiv.classList = "absolute top-0 left-0 w-full h-full overflow-hidden"
            imageDiv.innerHTML = `<video class="w-full h-full object-cover" autoplay  muted>
            <source src="${imgurl}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          `;
        }

        img_link.appendChild(imageDiv);
        main_image_div.appendChild(img_link);
        
    }
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });


    