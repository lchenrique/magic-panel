import { ReactNode, useCallback, useEffect, useState } from "react";
import "./style.css"
import { cn } from "../../utils";
import { PanelHeader } from "./panel-header";
import { PanelClose } from "./panel-close";

export interface IPanelPropsBase {
  header?: ReactNode
  content?: ReactNode
  children?: ReactNode
  open?: boolean
  onChange?: (isOpen: boolean) => void
  destroyOnClose?: boolean
  width?: number
  height?: number | string
  className?: string
}

export interface IPanelPropsDrawer extends IPanelPropsBase {
  drawer: true;
  /**
   * Define a posição do drawer.
   * Esta propriedade só é relevante quando `drawer` é `true`.
   * @type {"top" | "bottom" | "left" | "right"}
   */
  placement?: "top" | "bottom" | "left" | "right" | false;
}

export interface IPanelPropsNonDrawer extends IPanelPropsBase {
  drawer?: false;
  /**
  * A propriedade placement não é usada quando o drawer está desativado.
  * @type {never}
  */
  placement?: never | false;
}

export type IPanelProps = IPanelPropsDrawer | IPanelPropsNonDrawer;

const MagicPanel = ({ children, open = false, onChange, destroyOnClose, width, height, className, drawer = false, placement }: IPanelProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const placementPosition: Record<string, any> = {
    top: {
      animationIn: "animate__slideInDown",
      animationOut: "animate__slideOutUp",
      width: "100%",
      height: "400px",
      className: "max-h-[calc(100%-55px)]"
    },
    bottom: {
      animationIn: "animate__slideInUp",
      animationOut: "animate__slideOutDown",
      width: "100%",
      height: "400px",
      className: "max-h-[calc(100%-55px)]"
    },
    left: {
      animationIn: "animate__slideInLeft",
      animationOut: "animate__slideOutLeft",
      width: "400px",
      height: "100%",
      className: ""
    },
    right: {
      animationIn: "animate__slideInRight",
      animationOut: "animate__slideOutRight",
      width: "400px",
      height: "100%",
       className: ""
    },
  }

  const animationPanelIn = drawer ? placementPosition[placement || "right"].animationIn : "animate__zoomIn"
  const animationPanelOut = drawer ? placementPosition[placement || "right"].animationOut : "animate__zoomOut"
  const isDrawer = drawer ? "drawer" : "modal"

  const [animation, setAnimation] = useState(animationPanelIn)
  const [opacity, setOpacity] = useState(0)
  const [display, setDisplay] = useState("none")

  
  const toggle = useCallback((value: boolean) => {
    if (open) {
      setDisplay("flex")
      setOpacity(1)
      setAnimation(animationPanelIn)
      onChange && onChange(value)

      document.body.style.overflow = "hidden"

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          document.body.classList.add("magic-panel-scroll-mobile")

          return
        }
        else{
          document.body.classList.add("magic-panel-scroll")

        }

      const time = setTimeout(() => {
        clearTimeout(time)
      }, 300)

      return
    }

    setOpacity(0)
    setAnimation(animationPanelOut)

    const time = setTimeout(() => {
      setDisplay("none")
      onChange && onChange(false)
      document.body.style.overflow = ""
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          document.body.classList.remove("magic-panel-scroll-mobile")
          return
        }
      document.body.classList.remove("magic-panel-scroll")

      clearTimeout(time)
    }, 150)

  }, [animationPanelIn, animationPanelOut, onChange, open])

  useEffect(() => {
    toggle(open)
  }, [animationPanelIn, open, toggle])


  const panel = (
    <div id="panel" data-open={open} className={cn("magic-panel-wrapper transition-all", isDrawer, placement ? `placement-${placement}` : "")} style={{ display, opacity }}>
      <div className="magic-overlay opacity-100 " onClick={() => toggle(false)} />
      <div
        className={
          cn(`magic-panel-content content--${isDrawer} animate__animated animate__faster`,
            animation,
            `placement-content-${placement}`,
            "border border-border", !drawer   ? "max-h-[calc(100%-92px)]":  placementPosition[placement || "right"].className , className)}
        style={{
          maxWidth: width || placementPosition[placement || "right"].width,
          height:   drawer ?  (height || placementPosition[placement || "right"].height) :  500
        }}
      >
        {children}
      </div>
    </div>
  )

  if (destroyOnClose) {
    return open && panel
  }

  return panel

};

MagicPanel.Header = PanelHeader
MagicPanel.Close = PanelClose

export { MagicPanel };