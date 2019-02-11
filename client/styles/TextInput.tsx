import React, { useState } from "react";
import styled from "styled-components";

export default function TextInput() {
  const [input, setInput] = useState("");

  return <Input onChange={e => setInput(e.target.value)} />;
}

const Input = styled.input``;
