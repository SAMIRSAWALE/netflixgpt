const VideoTrailer = ({ nowPlayingData }) => {

  if (!nowPlayingData?.results?.length) return null;

  const onlyTrailer = nowPlayingData.results.filter(
    (item) => item.type === "Trailer"
  );

  const trailerKey = onlyTrailer[0]?.key;

  if (!trailerKey) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <iframe
        className="absolute top-1/2 left-1/2 
                   min-w-full min-h-full 
                   -translate-x-1/2 -translate-y-1/2 
                   scale-150"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}`}
        title="Trailer"
        allowFullScreen
      />
    </div>
  );
};
export default VideoTrailer;