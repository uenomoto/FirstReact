/* eslint react-hooks/exhaustive-deps: off */
import { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
  };

  const onClickFace = () => {
    setFaceShowFlag((prev) => !prev);
  };

  // Too many re-renders.エラーが出たら再レンダリングしすぎって意味だからもっと厳密に分岐してあげる必要がある
  // ↓再レンダリングして欲しくない場合useEffectを使う。今回はnumの場合のみ再レンダリングして欲しかったので第二引数にnumがある
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // フォルスの時だけ
        faceShowFlag || setFaceShowFlag(true);
      } else {
        // トゥルーの時だけ
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="green">お元気でちゅか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気ですわ！！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントup！</button>
      <p>{num}</p>
      <br />
      <button onClick={onClickFace}>
        {faceShowFlag ? "顔を消す" : "顔を出す"}
      </button>
      <br />
      {faceShowFlag && <p>（＾ω＾）</p>}
    </>
  );
};
export default App;
