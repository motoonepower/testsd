import React from "react";

function Submissions() {
  return (
    <div className="p-4 text-gray-700 text-lg h-full overflow-hidden">
      <h1 className="text-4xl text-center pb-8 text-black">Submissions</h1>
      <br />
      <p className="text-2xl font-semibold text-center">
        Guidelines for Authors
      </p>
      <br />
      <br />
      <p>
        Below are some useful instructions to assist the authors to submit their
        papers for ICRMIR-2023:
      </p>
      <br />
      <div>
        <p className="text-base font-semibold">
          ORIGINALITY OF SUBMITTED PAPERS:
        </p>
        <p>
          Papers submitted to ICRMIR 2023 shall contain original work by the
          author(s) that have not been published or submitted for publication
          elsewhere. The ICRMIR -23 anti- plagiarism policy is applicable to all
          submissions. The author(s) are solely responsible for any plagiarized
          submission.
        </p>
      </div>
      <br />
      <div>
        <span className="text-base font-semibold">PAPER SUBMISSION:</span>
        <p>
          All papers are required to be prepared and submitted in the ICRMIR 23
          conference format of A4 size in English. Papers must be 4-6 pages in
          length, including texts, Figures, photographs and references. The
          first page must include the title of the paper, author(s),
          affiliations, address and text.
        </p>
      </div>
      <br />
      <div>
        <span className="text-base font-semibold">PAPER TEMPLATE:</span>
        <br />
        <br />

        <div className="flex flex-row items-center justify-center cursor-pointer">
          <i className="fas fa-arrow-down text-blue-700"></i>
          <a
            href="https://cdn.discordapp.com/attachments/763396882793758731/1026229709610160229/IEEE_conference-template-a4.docx"
            download="IEEE_Conference_Template_A4"
          >
            <p className=" text-blue-700 text-center pl-2">
              Template for Word A4 Format
            </p>
          </a>
        </div>
      </div>

      <p className="text-sm text-center text-gray-600">
        All paper must be mailed in the PDF format only to the following
        <br /> Email: <b>icrmir2023@ltce.in</b>
      </p>
    </div>
  );
}

export default Submissions;
