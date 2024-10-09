export const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
            children: [
              {
                label: "City",
                to: "city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
            children: [
              {
                label: "Random data",
                to: "random",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Languages",
    to: "/languages",
    children: [
      {
        label: "Java",
        to: "Java",
      },
      {
        label: "C++",
        to: "c++",
      },
      {
        label: "Python",
        to: "Python",
      },
      {
        label: "JavaScript",
        to: "javaScript",
        children: [
          {
            label: "Node",
            to: "node",
          },
          {
            label: "React",
            to: "react",
            children: [
              {
                label: "Components",
                to: "components",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Articles",
    to: "/articles",
    children: [
      {
        label: "Services",
        to: "services",
      },
      {
        label: "Travels",
        to: "travels",
        children: [
          {
            label: "Scheduler",
            to: "scheduler",
          },
          {
            label: "Airports",
            to: "airports",
            children: [
              {
                label: "Flights",
                to: "flights",
              },
            ],
          },
        ],
      },
    ],
  },
];
