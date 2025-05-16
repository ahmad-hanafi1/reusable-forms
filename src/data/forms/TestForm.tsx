import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  MultiSelect,
  Select,
  Text,
  TextArea,
} from "../../components/FormComponents";

const TestForm = () => {
  const methods = useForm();
  return (
    <Form methods={methods} onSubmit={(data) => console.log(data)}>
      <Text name="test" label="test" placeholder="testing this shit" required />
      <TextArea name="textAria" label="Area" required />
      <Select
        required
        label="age"
        name="select"
        values={[
          { label: "Tennnn", value: 120 },
          { label: "Twnt", value: 130 },
        ]}
      />
      <MultiSelect
        required
        label="MultiSelect"
        name="multiSelect"
        values={[
          { label: "Ten", value: "10" },
          { label: "Twenty", value: "20" },
          { label: "Thirty", value: "30" },
        ]}
      />
      <Button type="submit" label="Submit" startIcon />
    </Form>
  );
};

export default TestForm;
