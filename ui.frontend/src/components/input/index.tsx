import React from "react";
import { IconType } from "react-icons/lib";
import "./style.css";

export default function Input({
  children,
  label,
  type = "text",
  onChange,
  value,
}: any) {
  return (
    <div>
      <div className="inputNew">
        <div className="label-float">
          <input
            type={type}
            placeholder=" "
            value={value}
            onChange={({ target }) => onChange(target.value)}
          />
          <label>{label}</label>
        </div>
        {children}
      </div>
    </div>
  );
}
