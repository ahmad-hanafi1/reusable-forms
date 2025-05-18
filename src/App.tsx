import { ThemeProvider } from "@mui/material";
import { Button } from "./components/FormComponents";
import "./App.css";
import { useAppDispatch } from "./utils/hooks";
import { toggleModal } from "./data/features/modalSlice";
import theme from "./utils/theme";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

function App() {
  const dispatch = useAppDispatch();
  return (
    <ThemeProvider theme={theme}>
      <div className="w-screen h-screen flex items-center justify-center">
        <Button
          label="open modal"
          onClick={() =>
            dispatch(
              toggleModal({
                title: "Title",
                // description: "Description",
                form: "test",
              })
            )
          }
        ></Button>
        <Button
          variant="contained"
          onClick={() =>
            dispatch(
              toggleModal({
                title: "Title",
                // description: "Description",
                form: "test",
                props: {
                  text: "hello",
                  textAria: "hello",
                  select: { label: "Tenn", value: "120" },
                  multiSelect: ["10", "30"],
                  datePicker: dayjs("2000-01-01"),
                  timePicker: dayjs("12:30PM", "hh:mmA"),
                  checkbox: true,
                },
              })
            )
          }
          label="edit modal"
        ></Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
