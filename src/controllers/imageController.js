import fs from "fs";

function postImage(req, res) {
  const { image } = req.body;

  const extension = image.substring(image.indexOf("/") + 1, image.indexOf(";"));

  fs.writeFile(
    `images/image.${extension}`,
    image.split(",")[1],
    "base64",
    (error) => {
      if (error) {
        console.log(error);
        res.send("Fail");
      } else {
        res.send("The image was saved!");
      }
    }
  );
}

export default { postImage };
