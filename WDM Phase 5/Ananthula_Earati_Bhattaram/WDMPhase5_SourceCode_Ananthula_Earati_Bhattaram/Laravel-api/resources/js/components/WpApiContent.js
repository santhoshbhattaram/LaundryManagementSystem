/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */

import React from "react";
import parse from "html-react-parser";
import Gist from "super-react-gist";

function WpApiContent(props) {
  return parse(props.content, {
    replace: domNode =>
      domNode.name === "script" &&
      domNode.attribs.src.indexOf("/gist.github.com/") && (
        <Gist url={domNode.attribs.src.replace(".js", "")} />
      )
  });
}

export default WpApiContent;
