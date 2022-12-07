import React from "react";
import Pagination from "@material-ui/lab/Pagination";
// import { ThemeProvider } from "@material-ui/core";

// const darkTheme = createMuiTheme({
//   palette: {
//     type: "dark",
//   },
// });

export default function CustomPagination({ setPage, numOfPages = 10 }) {
  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    console.log(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        // marginTop: "10vh",
        backgroundColor: "#ffc0cb",
        marginBottom:"5vh"
        // padding:"100px",

        // color:"blue"
      }}
    >
        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color="primary"
          hideNextButton
          hidePrevButton
        />
    </div>
  );
}