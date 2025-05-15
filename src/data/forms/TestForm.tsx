import { useForm } from "react-hook-form";
import {
  Button,
  Form,
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
        name="name"
        values={[{ label: "Ten", value: 10 }]}
      />
      <Button type="submit" label="Submit" startIcon />
    </Form>
  );
};

export default TestForm;
