import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useMemo, useRef, useState } from "react";
import axios from "axios";

function EditorLetter({ editorValue, setEditorValue }) {
  const quillRef = useRef();

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.addEventListener("change", async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("img", file);
      try {
        const { data } = await axios.post("/api/board/uploadImage", formData);
        const IMG_URL = data;
        const editor = quillRef.current.getEditor(); // 에디터 객체 가져오
        const range = editor.getSelection();
        editor.insertEmbed(range.index, "image", IMG_URL);
      } catch (error) {
        alert("실패했어요ㅠ");
      }
    });
  };
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ["image"],
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "image",
  ];
  return (
    <ReactQuill
      ref={quillRef}
      theme="snow"
      value={editorValue}
      modules={modules}
      formats={formats}
      onChange={(e) => setEditorValue(e)}
    />
  );
}

export default EditorLetter;
