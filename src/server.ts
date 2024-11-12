import { Server } from "http";
import app from "./app";

const port = process.env.PORT || 5000;

async function main() {
  try {
    const server: Server = app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
}

main();
