import { useEffect, useRef, type FC } from "react";
import * as d3 from "d3";

interface BarChartProps {
  data: number[];
  width?: number;
  height?: number;
}

export const BarChart: FC<BarChartProps> = ({ data, width = 400, height = 200 }) => {
   const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear old content before re-render
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const xScale = d3
      .scaleBand()
      .domain(data.map((_, i) => i.toString()))
      .range([0, width])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data) || 0])
      .range([height, 0]);

    // Bars
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (_, i) => xScale(i.toString()) || 0)
      .attr("y", (d) => yScale(d))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d))
      .attr("fill", "steelblue");

    // X Axis
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    // Y Axis
    svg.append("g").call(d3.axisLeft(yScale));
  }, [data, height, width]);

  return <svg ref={svgRef}></svg>;
}