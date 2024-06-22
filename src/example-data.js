import uniqid from "uniqid";

const exampleData = {
  personalInfo: {
    fullName: "Nishant Garg",
    email: "nishantgarg0904@gmail.com",
    phoneNumber: "+91 9876543210",
    address: "Punjab, India",
  },

  sections: {
    educations: [
      {
        degree: "B.Tech",
        schoolName: "Dr. B.R. Ambedkar NIT Jalandhar",
        location: "Jalandhar, Punjab",
        startDate: "11/2022",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        degree: "Master's Degree in Math",
        schoolName: "Hidden University",
        location: "Jalandhar, Punjab",
        startDate: "11/2022",
        endDate: "present",
        isCollapsed: true,
        isHidden: true,
        id: uniqid(),
      },
    ],

    experiences: [
      {
        companyName: "Google",
        positionTitle: "UX & UI Designer",
        location: "Jalandhar, Punjab",
        description:
          "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
        startDate: "11/2022",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        companyName: "Amazon",
        positionTitle: "UX Research Assistant",
        location: "Hyderabad, India",
        description:
          "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
        startDate: "04/2018",
        endDate: "02/2019",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
    ],
  },
};

export default exampleData;
