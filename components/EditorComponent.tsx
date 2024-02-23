"use client";

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import rehypeSanitize from "rehype-sanitize";

const MDEComponent = ({value, setValue}: any) => {


  return (
    <div>
      <MDEditor
        value={value}
        onChange={setValue}
        autoFocus={true}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
        preview='edit'
      />
    </div>
  );
};

export default MDEComponent;
