import styles, { globalStyles } from "./styles";
import { Button, Modal, Text } from "@nextui-org/react";
import { useState } from "react";

export default function AppLayout({ children }) {
  const [visible, setVisible] = useState(false);

  //Funcion abrir modal
  const handler = () => setVisible(true);

  //Funcion de scroll al llegar al limite
  /*Pendiente Checar funcionamiento hacia arriba*/

  const scrollLimitAuto=()=> {
    const container = document.querySelector("main");
    let scrollvalue = container.scrollTop;
    const maxscrollheight = container.scrollHeight;
    const offsetcontainer = container.offsetHeight;
    console.log(container.scrollTop);
    if (scrollvalue < 0) {
      document.querySelector("main").scrollTo({
        top: maxscrollheight,
        behavior: "smooth",
      });
    } else if (
      offsetcontainer + scrollvalue >=
      maxscrollheight - offsetcontainer
    ) {
      document.querySelector("main").scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
  //Funcion cerrar modal
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <>
      <div>
        <main
          onScroll={scrollLimitAuto}
        >
          {children}
          <div className=" sticky w-full bg-slate-900/20 py-2 bottom-0 grid place-content-center">
            <button
              className=" bg-indigo-500 shadow-md shadow-indigo-400/50 px-4 py-2 rounded-full font-semibold"
              onClick={handler}
              id="ModalButton"
            >
              Modal
            </button>
          </div>
          <div
            className={
              visible
                ? "absolute grid place-content-center bg-black/80 overflow-hidden w-full min-h-screen top-0"
                : "hidden"
            }
          >
            <div
              className={
                visible
                  ? "bg-white w-56 max-h-36 rounded-xl shadow-xl grid place-content-center"
                  : "hidden"
              }
            >
              <button
                className={
                  visible
                    ? " bg-red-500 shadow-lg shadow-black/20 font-bold text-white py-3 px-2 rounded-md"
                    : "hidden"
                }
                onClick={closeHandler}
              >
                {" "}
                Cerrar Modal
              </button>
            </div>
          </div>
        </main>
      </div>
      <style jsx>{styles}</style>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
}
