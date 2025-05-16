import TestForm from "./TestForm";

const modalContentMap: Record<
  string,
  React.ComponentType<{ props?: Record<string, unknown> }>
> = {
  "test": TestForm,
};

export default modalContentMap;
