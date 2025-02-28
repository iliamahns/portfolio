export type UXProject = {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  link?: string;
};

export const UX_PAGE = {
  intro: {
    title: "UX DESIGN PROJECTS",
    description: "Welcome to my UX Design Portfolio! I recently started my journey into UX Design and am excited to share my work here."
  },
  projects: [
    {
      title: "UFO | Currency Exchange Platform",
      description: "A mobile app designed to simplify currency exchange for international travelers.",
      image: "/images/ux/ufo-project.png",
      link: "/ux/ufo"
    },
    // Add more projects as they come
  ]
}; 