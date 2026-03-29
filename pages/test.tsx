import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Head from "next/head";

const TestPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Test Page</title>
      </Head>
      <div className="p-4">
        <h1 className="text-primary font-inter text-3xl">Primary Heading</h1>
        <p className="text-primaryText font-roboto">
          This is a paragraph with primary text color.
        </p>
        <p className="text-secondaryText  !font-poppins">
          This is a paragraph with secondary text color.
        </p>
      </div>
    </ThemeProvider>
  );
};

export default TestPage;
