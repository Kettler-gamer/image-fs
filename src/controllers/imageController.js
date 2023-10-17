import fs from "fs";

function postImage(req, res) {
  const { image } = req.body;

  fs.writeFile("images/image.png", image.split(",")[1], "base64", (error) => {
    if (error) {
      console.log(error);
      res.send("Fail");
    } else {
      res.send("The image was saved!");
    }
  });
}

export default { postImage };
