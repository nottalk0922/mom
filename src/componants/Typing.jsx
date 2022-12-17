import React, { useRef, useState } from "react";
import "../style/typing.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
//@toast-ui/editor/dist/toastui-editor-viewer
import axios from "axios";
import { useNavigate } from "react-router";
import Main_Header from "./main_header";
import Main_footer from "./main_footer";
import EditorLetter from "./editor";
function Typing() {
  const [title, setTitle] = useState("");
  const [service, setService] = useState("");
  const [editorValue, setEditorValue] = useState("");
  const editorRef = useRef();
  const navigate = useNavigate();

  const uploadLetter = async () => {
    console.log(editorValue);
    const { data } = await axios
      .post("/api/board/uploadLetter", {
        title: title,
        content: editorValue,
        markdownContent: "",
        serviceType: service,
      })
      .then(({ data }) => {
        navigate("/letter/" + data);
      });
  };
  return (
    <div className="type">
      <Main_Header />
      <div class="type_title">
        제목
        <input
          class="title1"
          type="text"
          placeholder=" 제목을 작성하세요"
          onChange={(e) => setTitle(e.target.value)}
        />
        서비스 유형
        <br />
        <input
          class="service"
          type="text"
          placeholder=" 서비스 유형을 작성하세요"
          onChange={(a) => setService(a.target.value)}
        />
      </div>
      <div class="type_txt">
        글작성
        <EditorLetter
          editorValue={editorValue}
          setEditorValue={setEditorValue}
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
      <Main_footer />
    </div>
  );
}
export default Typing;
