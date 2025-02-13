import { ICourse } from "@/interfaces";
import React from "react";
import { Parser } from "html-to-react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const parser = Parser();

function CourseDescription({ course }: { course: ICourse }) {
  return (
    <div>
      <h1 className="text-xl font-bold mt-5">Description</h1>
      <div className="mt-2 border bg-gray-100 border-primary p-5">
         {/* <div className="text-sm">{parser.parse(course.description)}</div>  */}
         
         <div dangerouslySetInnerHTML={{ __html: course.description }} />
      </div>
    </div>
  );
}

export default CourseDescription;
