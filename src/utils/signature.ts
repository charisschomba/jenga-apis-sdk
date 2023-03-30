import { createSign } from "crypto";

export const generateSignature = (rawText, privateKey) => {
  try {
    const sign = createSign("SHA256");
    sign.write(rawText);
    sign.end();
    const signature = sign.sign(privateKey, "base64");
    return signature;
  } catch (error) {
    throw new Error(error.toString());
  }
};
