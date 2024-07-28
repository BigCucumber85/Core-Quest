import React, { useState } from "react";
import axios from "axios";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

function BountySubmissionForm() {
  const [submissionLink, setSubmissionLink] = useState("");
  const [coreConnectLink, setCoreConnectLink] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("/api/submit-bounty", {
        submissionLink,
        coreConnectLink,
        walletAddress,
      });
    } catch (error) {
      console.error("Error submitting bounty:", error);
    }
  };

  return (
    <div className="flex flex-col px-7 py-10 text-base font-medium bg-white rounded-xl border border-solid border-orange-500 border-opacity-50 max-w-[531px] text-stone-500 max-md:px-5">
      <div className="text-xl font-semibold text-black max-md:max-w-full">
        Bounty Submission Form
      </div>
      <InputField
        label="Link to your submission"
        description="Make sure this link is accessible by everyone!"
        value={submissionLink}
        onChange={setSubmissionLink}
      />
      <InputField
        label="Core Connect Post Link"
        description="This helps sponsors discover your work on Core Connect"
        value={coreConnectLink}
        onChange={setCoreConnectLink}
      />
      <InputField
        label="Your Dynamic wallet address"
        description="Add your Dynamic wallet address here. This is where you will receive your rewards if you win"
        value={walletAddress}
        onChange={setWalletAddress}
      />
      <SubmitButton onClick={handleSubmit} />
    </div>
  );
}

export default BountySubmissionForm;
