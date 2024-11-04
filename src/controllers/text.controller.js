import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import TextModel from "../models/text.modal.js";

// Function to create text
const setText = AsyncHandler(async (req, res) => {
  const { text } = req.body;
  console.log(text);

  if (!text) {
    throw new ApiError(400, "Text is required");
  }

  const createText = await TextModel.create({
    text: text,
  });

  if (!createText) {
    throw new ApiError(400, "Failed to create text");
  }

  return res.status(200).json(
    new ApiResponse(200, createText, "Text created successfully")
  );
});

// Function to get text
const getText = AsyncHandler(async (req, res) => {
  const Gtext = await TextModel.findOne({}); // Added 'await' to ensure proper asynchronous behavior

  console.log(Gtext)
  console.log("Gtext")
  
  if (!Gtext) {
    throw new ApiError(500, "Text not found");
  }

  return res.status(200).json(
    new ApiResponse(200, Gtext, "Text found successfully")
  );
});

export { setText, getText };
