import React, { useRef, useState } from "react";
import "../style/typing.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
//@toast-ui/editor/dist/toastui-editor-viewer
import axios from "axios";
import { useNavigate } from "react-router";
function Typing() {
  const [title, setTitle] = useState("");
  const editorRef = useRef();
  const navigate = useNavigate();

  const uploadLetter = async () => {
    const letter = editorRef.current.getInstance().getMarkdown();
    const { data } = await axios
      .post("/api/board/uploadLetter", {
        title: title,
        content: letter,
        serviceType: "서비스타입",
      })
      .then(({ data }) => {
        navigate("/letter/" + data);
      });
  };
  return (
    <div className="type">
      <div class="type_title">
        제목
        <input
          class="title"
          type="text"
          placeholder=" 제목을 작성하세요"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div class="type_txt">
        글작성
        <Editor
          placeholder="내용을 입력해주세요."
          previewStyle="vertical" // 미리보기 스타일 지정
          height="500px" // 에디터 창 높이
          initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
          initialValue="글을 작성하세요"
          ref={editorRef}
          toolbarItems={[
            ["heading", "bold", "italic", "strike"],
            ["hr", "quote"],
            ["ul", "ol", "task", "indent", "outdent"],
            ["table", "image", "link"],
            ["code", "codeblock"],
          ]}
          hooks={{
            addImageBlobHook: async (blob, callback) => {
              console.log(blob);
              const uploadFile = blob;
              const formData = new FormData();
              formData.append("img", uploadFile);
              const { data } = await axios({
                method: "post",
                url: "/api/board/uploadImage",
                data: formData,
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              });
              console.log(data);
              callback(data, "카레유");
            },
          }}
        />
      </div>
      <div class="button_div">
        <input
          class="submit_button"
          onClick={() => {
            uploadLetter();
          }}
          type="submit"
          value="등록하기"
        />
      </div>
    </div>
  );
}
export default Typing;
