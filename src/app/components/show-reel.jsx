import React from "react";

const ShowReel = ({ videoId, description }) => {
  console.log(videoId);

  return (
    <div>
      <h2 className="custom-h2">Showreel</h2>
      <div>
        {description && (
          <p className="custom-base text-fontColor-primary font-normal mb-4">
           {description}
          </p>
        )}
        <div className="flex w-full justify-center items-center">
          <iframe
            className="aspect-video mx-auto w-full"
            src={`https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3`}
            title="ShowReel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default ShowReel;
