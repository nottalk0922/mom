import React from "react";
import "../style/typing.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
function Typing() {
  return (
    <div className="type">
      <div class="type_title">
        제목
        <input class="title" type="text" placeholder=" 제목을 작성하세요" />
      </div>
      <div class="type_txt">
        글작성
        <Editor
          placeholder="내용을 입력해주세요."
          previewStyle="vertical" // 미리보기 스타일 지정
          height="500px" // 에디터 창 높이
          initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
          initialValue="글을 작성하세요"
          toolbarItems={[
            ["heading", "bold", "italic", "strike"],
            ["hr", "quote"],
            ["ul", "ol", "task", "indent", "outdent"],
            ["table", "image", "link"],
            ["code", "codeblock"],
          ]}
        />
      </div>
      <div class="button_div">
        <input class="submit_button" type="submit" value="등록하기" />
      </div>
    </div>
  );
}
export default Typing;
