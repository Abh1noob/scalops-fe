"use client";
import React, { useState, useRef, useEffect } from "react";
import CatalogueButton from "./catalogueButton";
import PrimaryButton from "@/components/primaryButton";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { getCookie } from "cookies-next";
import Image from "next/image";
import axios from "axios";

const AddItem = () => {
  const [audio, setAudio] = useState<Blob | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const [showAudio, setShowAudio] = useState(false);
  const [cookieValue, setCookieValue] = useState("");

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
      const formData = new FormData();
      formData.append("file", blob, "audio.webm");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_APIURL}/catalogue/speak`,
        formData,
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
            Authorization: `Bearer ${cookieValue}`,
          },
          // withCredentials: true,
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error sending audio:", error);
    }
  };

  useEffect(() => {
    const getCookieValue = async () => {
      try {
        const cookie = getCookie("__session");
        if (typeof cookie === "string") {
          setCookieValue(cookie);
        }
      } catch (error) {
        console.error("Error fetching cookie:", error);
      }
    };
    getCookieValue();
  }, []);

  return (
    <div>
      <h1 className="my-4 text-3xl text-[#211A1D]">
        Add items in your catalogue
      </h1>
      <p className="text-[#211A1D] font-montserrat ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu blandit
        elit, in ligula.
      </p>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 items-center mt-12">
          <CatalogueButton
            icon="/assets/images/button/mic.svg"
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
                <PrimaryButton label="Send" onClick={handleSubmit} />
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
          <div className="flex flex-row gap-0 w-[80vw] items-center justify-center">
            <div className="w-[45%] h-[1px] bg-black" />
            <div className="mx-2">or</div>
            <div className="w-[45%] h-[1px] bg-black" />
          </div>
          <CatalogueButton
            icon="/assets/images/button/notepad.svg"
            label="Input item description manually"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default AddItem;
