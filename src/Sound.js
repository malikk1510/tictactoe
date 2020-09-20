import Sound from 'react-sound';

function Sound (){
  return(
      <>
          <Sound url="cool_sound.mp3"   playStatus={Sound.status.PLAYING}/>
      </>
  )
}
export default Sound