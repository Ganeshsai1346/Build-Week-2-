/** @format */


const loadAlbums = async (query) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Authorization":
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTQ4NjUzOTMsImV4cCI6MTY1NjA3NDk5M30.2OFqiZlYFI8_pway6VuyyVMq_FoFqoK3aOgNgDlGntw",
      },
    };
    const getSongs = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`,
      options
    );

    const response = await getSongs.json();

    const { data } = response
    console.log(data);

    const viewImages = data.slice(0, 12)
    viewImages.forEach((song) => {
      const songs = document.getElementById("menu");
      songs.innerHTML += `<div class="col-2 mb-2 d-flex">
                                    <div class="album-img">
                                        <img class="img-fluid rounded" src="${song.album.cover_medium}" alt="${song.album.title}" width="100%" >
                                      </div>
                                        <div class="col-10 album-name">
                                            <span>${song.artist.name}</span>
                                        </div>
                                </div>`;
    });
  } catch (error) {
    console.log(error);
  }
};



const loadRecently = async (value) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Authorization":
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTQ4NjUzOTMsImV4cCI6MTY1NjA3NDk5M30.2OFqiZlYFI8_pway6VuyyVMq_FoFqoK3aOgNgDlGntw",
      },
    };
    const getSongs = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + value,
      options
    );

    const response = await getSongs.json();

    const { data } = response
    console.log(data);

    const viewImages = data.slice(0, 6)
    viewImages.forEach((song) => {
      const songs = document.getElementById("recentlyViewed");
      songs.innerHTML += `<div class="col-2 mb-2 ">
                                    
                                        <img class="img-fluid rounded" src="${song.album.cover_medium}" alt="${song.album.title}" width="100%">
                                        
                                        <div class="col-10 album-name">
                                            <span>${song.album.title}</span>
                                        
                                </div>`;
    });
  } catch (error) {
    console.log(error);
  }
};



const loadSongsToTry = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Authorization":
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTQ4NjUzOTMsImV4cCI6MTY1NjA3NDk5M30.2OFqiZlYFI8_pway6VuyyVMq_FoFqoK3aOgNgDlGntw",
      },
    };
    const getSongs = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem",
      options
    );

    const response = await getSongs.json();

    const { data } = response
    console.log(data);

    const viewImages = data.slice(0, 6)
    viewImages.forEach((song) => {
      const songs = document.getElementById("tryThis");
      songs.innerHTML += `<div class="col-2 mb-2 ">
                                    
                                        <img class="img-fluid rounded" src="${song.album.cover_medium}" alt="${song.album.title}" width="100%">
                                        
                                        <div class="col-10 album-name">
                                            <span>${song.album.title}</span>
                                        
                                </div>`;
    });
  } catch (error) {
    console.log(error);
  }
};



const favouriteSongs = async (query) => {
  try {
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzNDM5MzdmZmQ0OTAwMTU4YTdhOWMiLCJpYXQiOjE2NTUyMDM2MTMsImV4cCI6MTY1NjQxMzIxM30.ozVgl19lKNBmQ3TeP-LfrHL4ak2PqE9Lj3nhDMHEg0k",
      },
    }

    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`,
      options
    );

    const songs = await response.json();
    console.log(songs)
    const { data } = songs
    const displaySongs = data.slice(0, 12)
    displaySongs.forEach((song) => {
      const popularAlbums = document.getElementById("favourites")
      popularAlbums.innerHTML +=
        `<span><p>${song.artist.name}</p></span>`
    })


  } catch (err) {
    console.log(err)

  };
}


window.onload = async () => {
  loadAlbums("love")
  loadRecently("queen")
  loadSongsToTry()
  favouriteSongs("romantic")
}








