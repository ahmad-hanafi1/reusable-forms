import { useForm } from "react-hook-form";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  MultiSelect,
  Select,
  Text,
  TextArea,
  TimePicker,
} from "../../components/FormComponents";
import type { Dayjs } from "dayjs";
import { useAppSelector } from "../../utils/hooks";
import { useEffect } from "react";

export interface FormInputs {
  text: string;
  textAria: string;
  select: { label: string; value: number };
  multiSelect: string[];
  datePicker: Dayjs | null;
  timePicker: Dayjs | null;
  checkbox: boolean;
}
const TestForm = () => {
  const { props } = useAppSelector((state) => state.modal);
  console.log(props);

  const defaultValues = {
    text: (props?.text as string) || "",
    textAria: (props?.textAria as string) || "",
    select: (props?.select as { label: string; value: number }) || "",
    multiSelect: (props?.multiSelect as string[]) || [],
    datePicker: (props?.datePicker as Dayjs) || null,
    timePicker: (props?.timePicker as Dayjs) || null,
    checkbox: (props?.checkbox as boolean) || false,
  };

  const methods = useForm<FormInputs>({
    defaultValues: defaultValues,
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const { reset } = methods;

  useEffect(() => {
    reset(defaultValues);
  }, [props, reset]);
  return (
    <Form methods={methods} onSubmit={(data) => console.log(data)}>
      <Text name="text" label="test" placeholder="testing this shit" required />
      <TextArea name="textAria" label="Area" required />
      <Select
        returnObject
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
      <DatePicker
        label="date"
        name="datePicker"
        required
        onChange={(date) => {
          console.log(date.format("YYYY-MM-DD"));
        }}
      />
      <TimePicker
        label="time"
        name="timePicker"
        required
        onChange={(date) => {
          console.log(date.format("HH:mm"));
        }}
      />
      <Checkbox
        name={"checkbox"}
        label={
          "make this multiline multiline mu make this multiline multiline mu make this multiline multiline mu make this multiline multiline mu?"
        }
      />
      <Button type="submit" label="Submit" startIcon />
    </Form>
  );
};

export default TestForm;
