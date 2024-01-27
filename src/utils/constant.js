export const taskFormFields = [
  {
    label: "Title",
    name: "title",
    type: "text",
    isRequired: true,
    placeholder: "Enter task title",
  },
  {
    label: "Description",
    name: "description",
    type: "textarea",
    isRequired: true,
    placeholder: "Enter task description...",
    rows: 5,
  },
  {
    label: "Tags",
    name: "tags",
    type: "text",
    isRequired: true,
    placeholder: "Enter tags (ex: Python,Javascript)",
    isInputGroup: true,
  },
  {
    label: "Priority",
    name: "priority",
    type: "select",
    isRequired: true,
    placeholder: "Select Priority",
    isInputGroup: true,
    options: [],
  },
];

export const tableFields = {
  heads: [
    { name: "Title", width: "w-[300px]" },
    { name: "Description", width: "w-full" },
    { name: "Tags", width: "md:w-[350px]" },
    { name: "Priority", width: "md:w-[100px]" },
    { name: "Options", width: "md:w-[100px]" },
  ],
  rows: ["title", "description", "tags", "priority", "options"],
};
