import { createSign } from "crypto";
import { readFileSync } from "fs";

export const generateSignature = (rawText, privateKeyPath) => {
  try {
    const privateKey: any = readFileSync(privateKeyPath, {
      encoding: "utf8",
    });
    // console.log(rawText, privateKeyPath, privateKey);
    const sign = createSign("SHA256");
    sign.write(rawText);
    sign.end();
    const signature = sign.sign(privateKey, "base64");
    // console.log(signature);
    return signature;
  } catch (error) {
    throw new Error(error.toString());
  }
};
