import React from "react"
import { Tween } from "react-gsap"
import HelloStyles from "./hello.module.css"

const Hello = () => {
  return (
    <div className={HelloStyles.container}>
      <Tween
        wrapper={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="100 75 175 60"
            className={HelloStyles.helloSvg}
          >
            <g id="layer1">
              <g aria-label="Hello !" id="flowRoot10"></g>
            </g>
          </svg>
        }
        from={{ svgDraw: [0, 0] }}
        to={{ svgDraw: [1, 0] }}
        duration={1.5}
      >
        <path
          d="m 121,114.66211 h 6.8 l 1.68,-10.72 h 11.68 l -1.72,10.72 h 6.84 l 4.4,-28.000001 h -6.84 l -1.68,10.88 h -11.68 l 1.72,-10.88 h -6.8 z"
          id="path291"
          stroke="white"
          stroke-width="1"
        />

        <path
          d="m 163.95062,94.142109 c -6.68,0 -11.36,4.92 -12.16,10.080001 -1.03999,6.24 3.16,10.92 8.92,10.96 3.64,0.04 7.04001,-1.32 9.4,-3.84 l -3.79999,-3.28 c -1.16001,1.16 -2.92001,1.92 -4.80001,1.92 -1.96,0 -3.72,-1.2 -4.04,-3.44 h 14.88 c 0.16,-0.64 0.28,-1.28 0.32,-1.92 0.44,-6.320001 -3.16,-10.480001 -8.72,-10.480001 z m -5.8,8.320001 c 1.08,-2.32 3.08,-3.360001 5,-3.360001 1.84,0 3.52,1.000001 3.96,3.360001 z"
          id="path293"
          stroke="white"
          stroke-width="1"
        />
        <path
          d="m 182.26437,114.82211 c 1.04,0 2.2,-0.2 3.44,-0.52 l 0.92,-5.6 c -0.44,0.2 -0.96,0.28 -1.48,0.28 -1.88,0 -2.84,-1 -2.6,-2.88 l 3.44,-21.440001 h -6.48 l -3.6,22.680001 c -0.8,4.88 1.68,7.48 6.36,7.48 z"
          id="path295"
          stroke="white"
          stroke-width="1"
        />
        <path
          d="m 195.38937,114.82211 c 1.04,0 2.2,-0.2 3.44,-0.52 l 0.92,-5.6 c -0.44,0.2 -0.96,0.28 -1.48,0.28 -1.88,0 -2.84,-1 -2.6,-2.88 l 3.44,-21.440001 h -6.48 l -3.6,22.680001 c -0.8,4.88 1.68,7.48 6.36,7.48 z"
          id="path297"
          stroke="white"
          stroke-width="1"
        />
        <path
          d="m 210.86875,115.22211 c 6.36,0 11.4,-4.24 12.4,-10.48 0.88,-5.640001 -2.8,-10.600001 -9.04,-10.600001 -6.2,0 -11.4,4.32 -12.4,10.600001 -0.96,6.08 3.52,10.48 9.04,10.48 z m 0.92,-5.88 c -2.36,0 -3.92,-1.96 -3.52,-4.56 0.4,-2.68 2.64,-4.64 5,-4.6 2.36,0 3.96,1.92 3.56,4.6 -0.44,2.6 -2.64,4.6 -5.04,4.56 z"
          id="path299"
          stroke="white"
          stroke-width="1"
        />
        <path
          d="m 237.95875,105.54211 h 6.8 l 3.04,-18.880001 h -6.8 z m 1.92,9.6 c 1.92,0 3.88,-1.56 4.16,-3.6 0.28,-1.84 -1.08,-3.48 -3.04,-3.48 -1.96,0 -3.88,1.64 -4.16,3.48 -0.32,2.04 1.08,3.6 3.04,3.6 z"
          id="path301"
          stroke="white"
          stroke-width="1"
        />
      </Tween>
    </div>
  )
}

export default Hello
