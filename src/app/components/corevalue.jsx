import React from "react";

const CoreValues = () => {
  const values = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Empowerment",
      description:
        "We believe in treating our customers with compassion, understanding,",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 14H10V20M4 14V20H10M4 14L10 20"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 10H14V4M20 10V4H14M20 10L14 4"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Excellence",
      description:
        "We are committed to the highest standards of medical excellence. Our dedicated professionals.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 16V12"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8H12.01"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Integrity",
      description:
        "Integrity is the foundation of everything we do. We uphold the highest ethical standards.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Innovation",
      description:
        "We embrace innovation as a means to improve healthcare. We actively seek out technologies.",
    },
  ];

  return (
    <div className="bg-black text-white py-24">
      <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side: Heading and Description */}
        <div>
          <h1 className="text-6xl font-bold mb-6">Our Core Values</h1>
          <p className="text-xl mb-8">
            Lacinia ornare magna
            <br />
            penatibus adipiscing laoreet
            <br />
            tempus.
          </p>
        </div>

        {/* Right side: Value Cards */}
        <div className="grid grid-cols-1 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 flex flex-col sm:flex-row items-start gap-6"
            >
              <div className="bg-yellow-400 p-4 rounded-xl">
                {React.cloneElement(value.icon, { width: 60, height: 60 })}
              </div>
              <div>
                <h3 className="text-black font-bold text-2xl mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-lg">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
