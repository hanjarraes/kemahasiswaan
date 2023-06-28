import React from "react";
import { Chart } from "react-charts";
import { dataDummy } from "./service";

export const ChartCustom = ({
    elementType,
    activeDatumIndex,
    activeSeriesIndex,
    setState,
  }) => {
    const data = dataDummy;
    const interactionMode = "primary";
  
    const heightChart = window.innerHeight - 500
  
    const primaryAxis = React.useMemo(
      () => ({
        getValue: (datum) => datum.primary,
      }),
      []
    );
  
    const secondaryAxes = React.useMemo(
      () => [
        {
          getValue: (datum) => datum.secondary,
          elementType,
        },
      ],
      [elementType]
    );
  
    return (
      <div style={{ height: heightChart, width:'100%' }} className="chart-dashboard">
        <Chart
          options={{
            data,
            interactionMode,
            primaryAxis,
            secondaryAxes,
            getDatumStyle: (datum, status) =>
              activeDatumIndex === datum.index &&
              activeSeriesIndex === datum.seriesIndex
                ? {
                    opacity: 1,
                    circle: {
                      r: 5,
                    },
                    rectangle: {
                      stroke: "black",
                      strokeWidth: 3,
                    },
                  }
                : activeDatumIndex === datum.index
                ? {
                    opacity: 1,
                    circle: {
                      r: 3,
                    },
                    rectangle: {
                      stroke: "black",
                      strokeWidth: 1,
                    },
                  }
                : datum.seriesIndex === activeSeriesIndex
                ? {
                    circle: {
                      r: 3,
                    },
                    rectangle: {
                      stroke: "black",
                      strokeWidth: 1,
                    },
                  }
                : status === "groupFocused"
                ? {
                    circle: {
                      r: 2,
                    },
                    rectangle: {
                      stroke: "black",
                      strokeWidth: 0,
                    },
                  }
                : {
                    circle: {
                      r: 2,
                    },
                    rectangle: {
                      stroke: "black",
                      strokeWidth: 0,
                    },
                  },
            getSeriesStyle: (series) => {
              return {
                color: `url(#${series.index % 4})`,
                opacity:
                  activeSeriesIndex > -1
                    ? series.index === activeSeriesIndex
                      ? 1
                      : 0.3
                    : 1,
              };
            },
            onFocusDatum: (focused) =>
              setState({
                activeSeriesIndex: focused ? focused.seriesIndex : -1,
                activeDatumIndex: focused ? focused.index : -1,
              }),
            renderSVG: () => (
              <defs>
                <linearGradient id="0" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="0%" stopColor="#17EAD9" />
                  <stop offset="100%" stopColor="#6078EA" />
                </linearGradient>
                <linearGradient id="1" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="0%" stopColor="#ff8f10" />
                  <stop offset="100%" stopColor="#ff3434" />
                </linearGradient>
                <linearGradient id="2" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="0%" stopColor="#42E695" />
                  <stop offset="100%" stopColor="#3BB2B8" />
                </linearGradient>
                <linearGradient id="3" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="0%" stopColor="#ffb302" />
                  <stop offset="100%" stopColor="#ead700" />
                </linearGradient>
              </defs>
            ),
          }}
        />
      </div>
    );
  };
  