"use client";
import React, { useState, useRef, useEffect } from "react";
import CatalogueButton from "./catalogueButton";
import PrimaryButton from "@/components/primaryButton";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import Image from "next/image";
import axios from "axios";
import { FaMicrophone } from "react-icons/fa";
import { PiNotepad } from "react-icons/pi";

const AddItem = () => {
  const [audio, setAudio] = useState<Blob | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const [showAudio, setShowAudio] = useState(false);
  const [label, setLabel] = useState("Send");

  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    (err) => console.error("Recording error:", err)
  );

  const toggleShowAudio = () => {
    console.log("Toggle show audio");
    setShowAudio(!showAudio);
  };

  const handleSubmit = () => {
    console.log("Sending audio...");
    if (audio) {
      sendBlobOverAPI(audio);
    } else {
      console.error("No audio recorded");
    }
  };

  const sendBlobOverAPI = async (blob: Blob) => {
    try {
      setLabel("Sending...");
      const formData = new FormData();
      formData.append("file", blob, "audio.webm");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_APIURL}/catalogue/speak`,
        formData,
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          // withCredentials: true,
        }
      );
      const responseDataString = JSON.stringify(response.data);
      console.log("Response:", response.data);
      localStorage.setItem("speakData", responseDataString);
      setLabel("Sent!")
    } catch (error) {
      console.error("Error sending audio:", error);
    }
  };

  return (
    <div>
      <h1 className="my-4 text-3xl text-[#211A1D]">
        Add items in your catalogue
      </h1>
      <p className="text-[#211A1D] font-montserrat ">
        Incorporate a voice note stating the prices and quantities of your
        products in stock, using your local language.
      </p>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 items-center mt-12">
          <CatalogueButton
            logo={<FaMicrophone />}
            label="Record audio describing item"
            onClick={toggleShowAudio}
          />
          {showAudio && (
            <>
              <AudioRecorder
                onRecordingComplete={(blob) => {
                  console.log(blob);
                  setAudio(blob);
                  if (audioElementRef.current) {
                    audioElementRef.current.src = URL.createObjectURL(blob);
                  }
                }}
                recorderControls={recorderControls}
                showVisualizer={true}
              />
              <div className="flex flex-row gap-2">
                <div
                  className="bg-[#8075FF] text-white font-montserrat h-10 w-[30vw] flex items-center justify-center rounded-[20px] p-2 font-medium text-sm"
                  onClick={handleSubmit}
                >
                  {label}
                </div>
              </div>
              {audio && (
                <div className="flex flex-row gap-2 items-center justify-center">
                  <audio ref={audioElementRef} controls />
                  <Image
                    src="/assets/images/button/delete.svg"
                    alt="del"
                    height={0}
                    width={0}
                    onClick={() => setAudio(null)}
                    className="h-[25px] w-[25px]"
                  />
                </div>
              )}
            </>
          )}
          {/* <div className="flex flex-row gap-0 w-[80vw] items-center justify-center">
            <div className="w-[45%] h-[1px] bg-black" />
            <div className="mx-2">or</div>
            <div className="w-[45%] h-[1px] bg-black" />
          </div>
          <CatalogueButton
            logo={<PiNotepad />}
            label="Input item description manually"
            onClick={() => {}}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default AddItem;
