import { Button } from "@mui/material";
import Form from "../../components/FormComponents/Form";
import Text from "../../components/FormComponents/Text";
import { useForm } from "react-hook-form";

const TestForm = () => {
  const methods = useForm();
  return (
    <Form methods={methods} onSubmit={(data) => console.log(data)}>
      <Text name="test" label="test" placeholder="testing this shit" required />

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default TestForm;
