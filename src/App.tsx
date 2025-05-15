import { Button, ThemeProvider } from "@mui/material";
import "./App.css";
import { useAppDispatch } from "./utils/hooks";
import { toggleModal } from "./data/features/modalSlice";
import theme from "./utils/theme";
import TestForm from "./data/forms/TestForm";

function App() {
  const dispatch = useAppDispatch();
  return (
    <ThemeProvider theme={theme}>
      <div className="w-screen h-screen flex items-center justify-center">
        <Button
          variant="contained"
          onClick={() =>
            dispatch(
              toggleModal({
                title: "Title",
                // description: "Description",
                content: <TestForm />,
              })
            )
          }
        >
          open modal
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
