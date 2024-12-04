export function Awards() {
  const awards = [
    {
      id: 1,
      title: "Best Indian AdFilm Maker",
      by: "CEO Insights",
      year: "2023",
      description:
        "Created and executed social media plan for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads.",
    },
    {
      id: 2,
      title: "Best Indian AdFilm Maker",
      by: "CEO Insights",
      year: "2022",
      description:
        "Created and executed social media plan for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads.",
    },
    {
      id: 3,
      title: "Best Indian AdFilm Maker",
      by: "CEO Insights",
      year: "2022",
      description:
        "Created and executed social media plan for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads.",
    },
    // {
    //   id: 4,
    //   title: "Best Indian AdFilm Maker",
    //   by: "CEO Insights",
    //   year: "2022",
    //   description:
    //     "Created and executed social media plan for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads.",
    // },
    // {
    //   id: 5,
    //   title: "Best Indian AdFilm Maker",
    //   by: "CEO Insights",
    //   year: "2022",
    //   description:
    //     "Created and executed social media plan for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads.",
    // },
  ];

  return (
    <div>
      <h2 className="custom-h2 text-fontColor-sub-heading">Honours & Awards</h2>
      <div className="space-y-8 border p-10 overflow-y-auto scrollable h-[800px]  lg:h-[650px]">
        {awards.map((award, i) => (
          <div key={award.id} className="flex gap-6">
            <div>
              <h3 className="custom-h3 font-semibold bg-brand-subtle text-brand-secondary rounded-full w-10 h-10 flex justify-center items-center ">
                {i + 1}
              </h3>
            </div>
            <div>
              <h5 className="custom-h5 font-semibold text-fontColor-secondary">
                {award.title}
              </h5>
              <p className="custom-base  font-medium mb-2">
                by{" "}
                <span className="custom-base text-fontColor-muted">
                  {award.by}
                </span>
              </p>
              <p className="custom-base text-fontColor-subtle font-semibold mb-1">
                {award.year}
              </p>

              <p className="custom-base font-normal text-fontColor-secondary">
                {award.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
