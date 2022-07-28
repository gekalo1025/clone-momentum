
const playListContainer =document.querySelector('.play-list')

export function createElementPlaylist (playlist) {

    playlist.forEach(el => {
        let li = document.createElement('li');
        li.classList.add('play-item')
        li.textContent= `${el.title}`
        playListContainer.append(li)
      })
    
}