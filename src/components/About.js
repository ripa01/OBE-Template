import React from "react";

export default function About() {
  return (
    <div className="items-center justify-between mx-20 p-4">
      <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          About Us
        </h1>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Welcome to <strong>TextToolBox</strong>, my first React app!
          <br />
          <br />
          <strong>TextToolBox</strong> is a versatile utility designed to help
          you manipulate text in various ways, offering a range of features to
          suit your text editing needs. With <strong>TextToolBox</strong>, you
          can effortlessly:
        </p>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400">
          <li>
            <strong>Convert Text to Uppercase</strong>: Transform all your text
            to uppercase letters with a single click, making it perfect for
            headings or emphasizing certain sections.
          </li>
          <li>
            <strong>Convert Text to Lowercase</strong>: Easily change your text
            to lowercase, ideal for creating uniform text formats.
          </li>
          <li>
            <strong>Clear Text</strong>: Quickly clear all the text in your
            input field, giving you a fresh start for new content.
          </li>
          <li>
            <strong>Copy Text</strong>: Copy your text to the clipboard
            effortlessly, allowing you to paste it wherever you need it.
          </li>
          <li>
            <strong>Remove Extra Spaces</strong>: Clean up your text by removing
            unnecessary spaces, ensuring a neat and tidy output.
          </li>
          <li>
            <strong>Count Words</strong>: Get an accurate word count for your
            text, useful for meeting word limits in documents or articles.
          </li>
          <li>
            <strong>Count Characters</strong>: Keep track of the number of
            characters in your text, essential for writing within character
            limits.
          </li>
          <li>
            <strong>Count Sentences</strong>: Easily count the number of
            sentences, helping you analyze the structure and readability of your
            text.
          </li>
          <li>
            <strong>Count Paragraphs</strong>: Determine the number of
            paragraphs in your text, useful for organizing your writing.
          </li>
          <li>
            <strong>Estimate Reading Time</strong>: Get an estimated reading
            time for your text, helping you gauge how long it will take readers
            to go through your content.
          </li>
          <li>
            <strong>Preview Text</strong>: See a live preview of your formatted
            text, allowing you to make adjustments as needed.
          </li>
        </ul>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          TextToolBox aims to simplify text manipulation tasks, providing you
          with a powerful toolset to enhance your writing process. Whether
          you're preparing a professional document, crafting an article, or
          simply editing text, <strong>TextToolBox</strong> has got you covered.
          <br />
          <br />
          Thank you for choosing <strong>TextToolBox</strong>. Happy text
          editing!
        </p>
      </div>
    </div>
  );
}
