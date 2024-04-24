import track from "../data/track";

function AudioPlayer() {
  return (
    <div className="audio-player">
      <div className="inner">
        {" "}
        <div>
          <audio src={track[0].src} controls>
            <track src={track[0].src} kind="captions" />
          </audio>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
