



// export const fetchAllMembers = () => {

//   return [
//     {
//       id: 1,
//       name: "Jayam Ravi",
//       company: "Kirel Creations",
//       phone: " +91 7306240173",
//       address: { city: "Kochi", state: "Kerala" },
//       avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
//       summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
//       languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
//       showReelId : 'sCQ0VYNCmKw',
//       links :[
//         { platform: 'facebook', url: 'https://facebook.com/member' },
//         { platform: 'instagram', url: 'https://instagram.com/member' },
//         { platform: 'x', url: 'https://x.com/member' },
//         { platform: 'dribble', url: 'https://dribbble.com/member' },
//       ]
//     },

    
//   ];
// };





export const mockFetchMembers =  (name, location) => {
 
  const allMembers = [
    {
      id: 1,
      name: "Jayam Ravi",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 2,
      name: "Jayam Ravi",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 3,
      name: "Jayam Ravi",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 4,
      name: "Jayam Ravi",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 5,
      name: "Dilshad",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 6,
      name: "Dilshad",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 7,
      name: "Dilshad",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 8,
      name: "Dilshad",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 9,
      name: "Dilshad",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 10,
      name: "Dilshad",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 11,
      name: "Dilshad",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 12,
      name: "Dilshad",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 13,
      name: "Dilshad",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 14,
      name: "Dilshad",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 15,
      name: "Dilshad",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 16,
      name: "Dilshad",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 17,
      name: "Dilshad",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 18,
      name: "Dilshad",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 19,
      name: "Dilshad",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 20,
      name: "Dilshad",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 21,
      name: "Dilshad",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 22,
      name: "Dilshad",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 23,
      name: "Dilshad",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 24,
      name: "Dilshad",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },
    {
      id: 25,
      name: "Dilshad",
      company: "Kirel Creations",
      phone: " +91 7306240173",
      address: { city: "Kochi", state: "Kerala" },
      avatar: "https://s3-alpha-sig.figma.com/img/9d8d/80a4/0b3e01c87f4b51bcf08d53ad94411536?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzxPxhUbzkdE5pOmvI6xNuZLvB71XKnfUljHOpt9U9z7byQ9YldgubDCKe-spyZ-4yE1fmDWimk8LnG6kSi2MmSapJTBkltFah8Fzy~GA9fiqc1F3RZhSuyolG43bKnIxJlVjYdGL--oo~7iQRhpL1FwU5sXrKvXjuaCatpeETwXtguvcqv2vnYSwfLrPeKq7VYAtFYlplMT~Ejx7uPJRNWmzJvuvNQ2QSPwgMFVnQkz6hTXSE4fR1cBHXn1b2WHtVZ21DVFbzZnXDQU6CVg-v~InQL7T8VumbzZmCBCirbTYznypeszmQL87NJ-ajqpXD8XQd8P~Y2eUu2B9N8slg__",
      summary: "I'm a professional copywriter with 5 years of experience crafting compelling content for businesses of all sizes. My writing is focused on engaging readers and driving action, whether that means increasing sales, boosting website traffic, or building brand awareness. With a keen eye for detail and a passion for clear communication, I'm dedicated to delivering high-quality work that meets my clients' high expectations.",
      languages : ['English','Arabic','Hindi','Malayalam','Tamil','Telugu'],
      showReelId : 'sCQ0VYNCmKw',
      links :[
        { platform: 'facebook', url: 'https://facebook.com/member' },
        { platform: 'instagram', url: 'https://instagram.com/member' },
        { platform: 'x', url: 'https://x.com/member' },
        { platform: 'dribble', url: 'https://dribbble.com/member' },
      ]
    },



  ];
  return allMembers.filter(
    (member) =>
      (!name || member.name.toLowerCase().includes(name.toLowerCase())) &&
      (!location || member.location === location)
  );
};


export const fetchAllMembers = () => {
  return mockFetchMembers(); // Returns all members
};

export const fetchMemberById = (id) => {

  const allMembers = fetchAllMembers();
  return allMembers.find((member) => member.id === parseInt(id));
};

