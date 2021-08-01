import React from "react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      year: "2015-2016",
      college: "St Joseph's High School kalamboli",
      university: "SSC",
      grade: "80.80 %",
      degree: "",
    },
    {
      id: 2,
      year: "2016-2018",
      college: "KLE College of Science and commerce",
      university: "HSC",
      grade: "72.15 %",
      degree: "Information technology",
    },
    {
      id: 3,
      year: "2018-present",
      college:
        "Mahatma Education Society's Pillai HOC College Of Education And Research",
      university: "Mumbai University",
      grade: "8.1",
      degree: "Information technology - Pursuing",
    },
  ];

  return (
    <div className="py-10">
      <h2 className="text-5xl font-bold text-center text-fourth">Education</h2>
      {educationData.map((item) => {
        return (
          <div
            className="bg-first p-11 my-10 space-y-2 rounded-xl"
            key={item.id}
          >
            <div className="flex items-center">
              <svg
                className="w-10"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M52.44 10.33H46.89V6.26C46.89 5.66061 46.6519 5.08577 46.228 4.66194C45.8042 4.23811 45.2294 4 44.63 4H39.76C39.1606 4 38.5858 4.23811 38.1619 4.66194C37.7381 5.08577 37.5 5.66061 37.5 6.26V10.33H26.5V6.26C26.5 5.66061 26.2619 5.08577 25.838 4.66194C25.4142 4.23811 24.8394 4 24.24 4H19.36C18.7606 4 18.1858 4.23811 17.7619 4.66194C17.3381 5.08577 17.1 5.66061 17.1 6.26V10.33H11.56C10.3948 10.3326 9.27817 10.7974 8.45518 11.6223C7.63218 12.4471 7.16998 13.5648 7.16998 14.73V55.61C7.17262 56.7735 7.63599 57.8886 8.4587 58.7113C9.28141 59.534 10.3965 59.9974 11.56 60H52.44C53.6035 59.9974 54.7186 59.534 55.5413 58.7113C56.364 57.8886 56.8273 56.7735 56.83 55.61V14.73C56.83 13.5648 56.3678 12.4471 55.5448 11.6223C54.7218 10.7974 53.6052 10.3326 52.44 10.33ZM39.18 6.26C39.18 6.10617 39.2411 5.95865 39.3499 5.84988C39.4586 5.74111 39.6062 5.68 39.76 5.68H44.63C44.7838 5.68 44.9313 5.74111 45.0401 5.84988C45.1489 5.95865 45.21 6.10617 45.21 6.26V16.08C45.21 16.2338 45.1489 16.3814 45.0401 16.4901C44.9313 16.5989 44.7838 16.66 44.63 16.66H39.76C39.6062 16.66 39.4586 16.5989 39.3499 16.4901C39.2411 16.3814 39.18 16.2338 39.18 16.08V6.26ZM18.78 6.26C18.78 6.10617 18.8411 5.95865 18.9499 5.84988C19.0586 5.74111 19.2062 5.68 19.36 5.68H24.24C24.393 5.68257 24.539 5.74451 24.6473 5.85272C24.7555 5.96094 24.8174 6.10698 24.82 6.26V16.08C24.8174 16.233 24.7555 16.3791 24.6473 16.4873C24.539 16.5955 24.393 16.6574 24.24 16.66H19.36C19.2062 16.66 19.0586 16.5989 18.9499 16.4901C18.8411 16.3814 18.78 16.2338 18.78 16.08V6.26ZM8.83998 14.73C8.83867 14.372 8.90805 14.0172 9.04415 13.686C9.18026 13.3549 9.3804 13.0538 9.63311 12.8002C9.88581 12.5466 10.1861 12.3453 10.5168 12.208C10.8474 12.0707 11.2019 12 11.56 12H17.1V16.07C17.1 16.6694 17.3381 17.2442 17.7619 17.6681C18.1858 18.0919 18.7606 18.33 19.36 18.33H24.24C24.8394 18.33 25.4142 18.0919 25.838 17.6681C26.2619 17.2442 26.5 16.6694 26.5 16.07V12H37.5V16.07C37.5 16.6694 37.7381 17.2442 38.1619 17.6681C38.5858 18.0919 39.1606 18.33 39.76 18.33H44.63C45.2294 18.33 45.8042 18.0919 46.228 17.6681C46.6519 17.2442 46.89 16.6694 46.89 16.07V12H52.44C53.1614 12 53.8532 12.2866 54.3633 12.7967C54.8734 13.3068 55.16 13.9986 55.16 14.72V22.24H8.83998V14.73ZM55.16 55.61C55.1573 56.3297 54.8696 57.0189 54.3598 57.5269C53.85 58.0348 53.1596 58.32 52.44 58.32H11.56C10.8403 58.32 10.15 58.0348 9.64018 57.5269C9.13037 57.0189 8.84263 56.3297 8.83998 55.61V23.93H55.16V55.61Z"
                  fill="black"
                />
                <path
                  d="M14.94 39.87H21.54C21.7737 39.87 22.0052 39.8239 22.2212 39.7345C22.4371 39.645 22.6334 39.5139 22.7986 39.3486C22.9639 39.1833 23.095 38.9871 23.1845 38.7711C23.274 38.5552 23.32 38.3237 23.32 38.09V31.49C23.32 31.2562 23.274 31.0247 23.1845 30.8088C23.095 30.5928 22.9639 30.3966 22.7986 30.2313C22.6334 30.066 22.4371 29.9349 22.2212 29.8455C22.0052 29.756 21.7737 29.71 21.54 29.71H14.94C14.467 29.71 14.0132 29.8972 13.6778 30.2307C13.3424 30.5642 13.1526 31.017 13.15 31.49V38.09C13.1526 38.563 13.3424 39.0157 13.6778 39.3492C14.0132 39.6828 14.467 39.87 14.94 39.87ZM14.83 31.49C14.83 31.4608 14.8416 31.4328 14.8622 31.4122C14.8828 31.3916 14.9108 31.38 14.94 31.38H21.54C21.5674 31.3825 21.5929 31.3951 21.6114 31.4155C21.6299 31.4359 21.6401 31.4624 21.64 31.49V38.09C21.6377 38.1157 21.6265 38.1399 21.6082 38.1582C21.5899 38.1764 21.5658 38.1877 21.54 38.19H14.94C14.9131 38.1881 14.8876 38.1772 14.8676 38.159C14.8477 38.1409 14.8344 38.1166 14.83 38.09V31.49ZM28.7 39.87H35.3C35.7721 39.87 36.2248 39.6824 36.5586 39.3486C36.8925 39.0148 37.08 38.562 37.08 38.09V31.49C37.08 31.2562 37.0339 31.0247 36.9445 30.8088C36.855 30.5928 36.7239 30.3966 36.5586 30.2313C36.3934 30.066 36.1971 29.9349 35.9812 29.8455C35.7652 29.756 35.5337 29.71 35.3 29.71H28.7C28.4662 29.71 28.2348 29.756 28.0188 29.8455C27.8029 29.9349 27.6066 30.066 27.4413 30.2313C27.2761 30.3966 27.1449 30.5928 27.0555 30.8088C26.966 31.0247 26.92 31.2562 26.92 31.49V38.09C26.92 38.562 27.1075 39.0148 27.4413 39.3486C27.7752 39.6824 28.2279 39.87 28.7 39.87ZM28.59 31.49C28.59 31.4608 28.6016 31.4328 28.6222 31.4122C28.6428 31.3916 28.6708 31.38 28.7 31.38H35.3C35.3274 31.3825 35.3529 31.3951 35.3714 31.4155C35.3899 31.4359 35.4001 31.4624 35.4 31.49V38.09C35.3977 38.1157 35.3865 38.1399 35.3682 38.1582C35.3499 38.1764 35.3258 38.1877 35.3 38.19H28.7C28.6725 38.1901 28.6459 38.1799 28.6255 38.1614C28.6052 38.1428 28.5925 38.1174 28.59 38.09V31.49ZM42.46 39.87H49.06C49.5321 39.87 49.9848 39.6824 50.3186 39.3486C50.6525 39.0148 50.84 38.562 50.84 38.09V31.49C50.84 31.2562 50.794 31.0247 50.7045 30.8088C50.615 30.5928 50.4839 30.3966 50.3186 30.2313C50.1534 30.066 49.9571 29.9349 49.7412 29.8455C49.5252 29.756 49.2937 29.71 49.06 29.71H42.46C42.2262 29.71 41.9948 29.756 41.7788 29.8455C41.5629 29.9349 41.3666 30.066 41.2013 30.2313C41.0361 30.3966 40.9049 30.5928 40.8155 30.8088C40.726 31.0247 40.68 31.2562 40.68 31.49V38.09C40.68 38.562 40.8675 39.0148 41.2013 39.3486C41.5352 39.6824 41.9879 39.87 42.46 39.87ZM42.35 31.49C42.35 31.4608 42.3616 31.4328 42.3822 31.4122C42.4028 31.3916 42.4308 31.38 42.46 31.38H49.06C49.0874 31.3825 49.1129 31.3951 49.1314 31.4155C49.1499 31.4359 49.1601 31.4624 49.16 31.49V38.09C49.1577 38.1157 49.1465 38.1399 49.1282 38.1582C49.1099 38.1764 49.0858 38.1877 49.06 38.19H42.46C42.4325 38.1901 42.4059 38.1799 42.3855 38.1614C42.3652 38.1428 42.3525 38.1174 42.35 38.09V31.49ZM14.94 54.18H21.54C21.7737 54.18 22.0052 54.1339 22.2212 54.0445C22.4371 53.955 22.6334 53.8239 22.7986 53.6586C22.9639 53.4933 23.095 53.2971 23.1845 53.0811C23.274 52.8652 23.32 52.6337 23.32 52.4V45.8C23.3226 45.5645 23.2785 45.3309 23.1903 45.1126C23.102 44.8944 22.9713 44.6958 22.8058 44.5284C22.6402 44.3609 22.4431 44.228 22.2258 44.1373C22.0085 44.0466 21.7754 43.9999 21.54 44H14.94C14.467 44 14.0132 44.1872 13.6778 44.5207C13.3424 44.8542 13.1526 45.307 13.15 45.78V52.38C13.1487 52.6159 13.194 52.8497 13.2834 53.068C13.3727 53.2864 13.5044 53.4849 13.6707 53.6522C13.8371 53.8194 14.0348 53.9522 14.2527 54.0428C14.4705 54.1333 14.7041 54.18 14.94 54.18ZM14.83 45.8C14.8323 45.7715 14.8446 45.7449 14.8648 45.7247C14.8849 45.7046 14.9116 45.6922 14.94 45.69H21.54C21.5674 45.6925 21.5929 45.7051 21.6114 45.7255C21.6299 45.7459 21.6401 45.7724 21.64 45.8V52.4C21.6377 52.4257 21.6265 52.4499 21.6082 52.4682C21.5899 52.4865 21.5658 52.4977 21.54 52.5H14.94C14.9125 52.5001 14.8859 52.4899 14.8655 52.4714C14.8452 52.4528 14.8325 52.4274 14.83 52.4V45.8ZM28.7 54.18H35.3C35.5337 54.18 35.7652 54.1339 35.9812 54.0445C36.1971 53.955 36.3934 53.8239 36.5586 53.6586C36.7239 53.4933 36.855 53.2971 36.9445 53.0811C37.0339 52.8652 37.08 52.6337 37.08 52.4V45.8C37.0826 45.5645 37.0386 45.3309 36.9503 45.1126C36.862 44.8944 36.7313 44.6958 36.5658 44.5284C36.4002 44.3609 36.2031 44.228 35.9858 44.1373C35.7685 44.0466 35.5354 43.9999 35.3 44H28.7C28.2279 44 27.7752 44.1875 27.4413 44.5213C27.1075 44.8551 26.92 45.3079 26.92 45.78V52.38C26.9173 52.6154 26.9614 52.849 27.0497 53.0673C27.138 53.2856 27.2687 53.4841 27.4342 53.6516C27.5998 53.819 27.7969 53.9519 28.0142 54.0426C28.2314 54.1333 28.4645 54.18 28.7 54.18ZM28.59 45.8C28.59 45.7708 28.6016 45.7428 28.6222 45.7222C28.6428 45.7016 28.6708 45.69 28.7 45.69H35.3C35.314 45.6899 35.3279 45.6928 35.3407 45.6984C35.3536 45.704 35.3651 45.7123 35.3745 45.7227C35.3839 45.7331 35.3911 45.7453 35.3955 45.7586C35.3998 45.7719 35.4014 45.786 35.4 45.8V52.4C35.4 52.4265 35.3895 52.4519 35.3707 52.4707C35.352 52.4894 35.3265 52.5 35.3 52.5H28.7C28.686 52.5014 28.672 52.4998 28.6586 52.4954C28.6453 52.491 28.6331 52.4839 28.6227 52.4745C28.6124 52.465 28.6041 52.4535 28.5984 52.4407C28.5928 52.4279 28.5899 52.414 28.59 52.4V45.8ZM42.46 54.18H49.06C49.2937 54.18 49.5252 54.1339 49.7412 54.0445C49.9571 53.955 50.1534 53.8239 50.3186 53.6586C50.4839 53.4933 50.615 53.2971 50.7045 53.0811C50.794 52.8652 50.84 52.6337 50.84 52.4V45.8C50.8426 45.5645 50.7985 45.3309 50.7103 45.1126C50.622 44.8944 50.4913 44.6958 50.3258 44.5284C50.1602 44.3609 49.9631 44.228 49.7458 44.1373C49.5285 44.0466 49.2954 43.9999 49.06 44H42.46C41.9879 44 41.5352 44.1875 41.2013 44.5213C40.8675 44.8551 40.68 45.3079 40.68 45.78V52.38C40.6773 52.6154 40.7214 52.849 40.8097 53.0673C40.898 53.2856 41.0287 53.4841 41.1942 53.6516C41.3598 53.819 41.5569 53.9519 41.7742 54.0426C41.9914 54.1333 42.2245 54.18 42.46 54.18ZM42.35 45.8C42.35 45.7708 42.3616 45.7428 42.3822 45.7222C42.4028 45.7016 42.4308 45.69 42.46 45.69H49.06C49.0874 45.6925 49.1129 45.7051 49.1314 45.7255C49.1499 45.7459 49.1601 45.7724 49.16 45.8V52.4C49.16 52.4265 49.1495 52.4519 49.1307 52.4707C49.1119 52.4894 49.0865 52.5 49.06 52.5H42.46C42.446 52.5014 42.432 52.4998 42.4186 52.4954C42.4053 52.491 42.3931 52.4839 42.3827 52.4745C42.3724 52.465 42.3641 52.4535 42.3584 52.4407C42.3528 52.4279 42.3499 52.414 42.35 52.4V45.8Z"
                  fill="black"
                />
              </svg>

              <span className="ml-6 text-fourth">{item.year}</span>
            </div>
            <h2 className="text-3xl font-extrabold text-third">
              {item.college}
            </h2>
            <h3 className="text-2xl text-fourth font-bold">
              {item.university}
            </h3>
            <h3 className="text-2xl text-fourth font-medium">{item.degree} </h3>
            <p className="text-xl text-fourth ">{item.grade}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
