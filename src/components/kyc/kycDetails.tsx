import React, { useEffect, useState } from "react";

const KycDetails = () => {
  const [uploadedFileName, setUploadedFileName] = useState("");

  useEffect(() => {
    const kycDataString = localStorage.getItem("kycData");
    if (kycDataString) {
      const kycData = JSON.parse(kycDataString);
      const documentTypeElement = document.getElementById(
        "documentType"
      ) as HTMLInputElement;
      if (documentTypeElement) {
        documentTypeElement.value = kycData.documentType;
      }
      setUploadedFileName(kycData.documentUpload);
    }
  }, []);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
    }
  };

  return (
    <div>
      <div className="mx-auto items-start flex flex-col mt-8 w-[80vw] h-fit justify-around">
        <h1 className="self-start text-3xl font-semibold">KYC Details</h1>
        <div className="items-center flex flex-col ">
          <div className="my-2">
            <p className="text-[#8075FF] mb-1">Document Type</p>
            <select
              id="documentType"
              className="h-12 w-[80vw] bg-[#F1F1F1] rounded-lg p-2"
              defaultValue="- select -"
            >
              <option>- select -</option>
              <option>PAN Card</option>
              <option>GST CERTIFICATE</option>
            </select>
          </div>
          <div className="my-2">
            <p className="text-[#8075FF] mb-1">Document Upload</p>
            <input
              id="documentUpload"
              type="file"
              className="h-12 w-[80vw] bg-[#F1F1F1] flex py-auto rounded-lg p-2"
              onChange={handleFileChange}
            />
            {uploadedFileName && (
              <p className="text-sm mt-1">Uploaded file: {uploadedFileName}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycDetails;
