import Select from "react-select";

import makeAnimated from "react-select/animated";

const options = [
  { value: "English", label: "English" },
  { value: "Hindi", label: "Hindi" },
  { value: "Spanish", label: "Spanish" },
  { value: "French", label: "French" },
  { value: "German", label: "German" },
  { value: "Italian", label: "Italian" },
  { value: "Japanese", label: "Japanese" },
  { value: "Korean", label: "Korean" },
  { value: "Russian", label: "Russian" },
  { value: "Portuguese", label: "Portuguese" },
  { value: "Arabic", label: "Arabic" },
  { value: "Turkish", label: "Turkish" },
  { value: "Polish", label: "Polish" },
  { value: "Dutch", label: "Dutch" },
  { value: "Swedish", label: "Swedish" },
  { value: "Danish", label: "Danish" },
  { value: "Norwegian", label: "Norwegian" },
  { value: "Finnish", label: "Finnish" },
  { value: "Czech", label: "Czech" },
  { value: "Greek", label: "Greek" },
  { value: "Romanian", label: "Romanian" },
  { value: "Hungarian", label: "Hungarian" },
  { value: "Vietnamese", label: "Vietnamese" },
  { value: "Indonesian", label: "Indonesian" },
];

export default function DropDown() {
  const animatedComponents = makeAnimated();

  return (
    <Select
      styles={{
        control: (base) => ({
          ...base,
          border: "1px solid #ebebeb",
        }),
      }}
      options={options}
      components={animatedComponents}
      isMulti
      placeholder="Select Your Language...."
    />
  );
}
