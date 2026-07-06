import { Fragment } from "react";

export default function BrandText({ text }: { text: string }) {
  const parts = text.split(/(ChuraChura。)/g);
  return (
    <>
      {parts.map((part, i) =>
        part === "ChuraChura。" ? (
          <Fragment key={i}>
            ChuraChura。
          </Fragment>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
