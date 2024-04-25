import track from "../data/track";

function AudioPlayer() {
  return (
    <div className="audio-player">
          <audio src={track[0].src} controls>
            <track src={track[0].src} kind="captions" />
          </audio>
    </div>
  );
}

export default AudioPlayer;
