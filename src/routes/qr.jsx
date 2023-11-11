import QRCode from "qrcode.react";
import { useState } from "react";
import CustomInput from "../components/Input";
import { QrReader } from "react-qr-reader";

const QrCode = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };
  return (
    <div className="h-screen text-center">
      <div className="max-w-lg mx-auto my-8 p-4 rounded">
        <h1 className="text-2xl font-semibold mb-4">QR Code Creator</h1>
        <div className="flex space-x-2 justify-center">
          <CustomInput
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Create a QR Code"
          />
        </div>
        {text && (
          <div className="flex justify-center items-center pt-6">
            <div className="bg-white p-1 rounded-md">
              <QRCode value={text} renderAs="svg" />
            </div>
          </div>
        )}
      </div>
      <hr />
      <div className="max-w-lg mx-auto my-8 p-4 rounded">
        <h1 className="text-2xl font-semibold mb-4">QR Code Scanner</h1>
        <div className="flex space-x-2 justify-center">
          <QrReader
            onScan={handleScan}
            onError={handleError}
            style={{ width: "100%" }}
          />
          {result && <p className="mt-4">Scanned QR Code: {result}</p>}
        </div>
      </div>
    </div>
  );
};

export default QrCode;
