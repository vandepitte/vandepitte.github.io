
import * as d3 from "https://cdn.skypack.dev/d3@7";
import {colors} from "./colors.js"

export const drawGauge(svg, data) {
    r = 100
    svg.attr("width", r * 2).attr("height", r);

    p = d3.arc()({
      startAngle: 0 - Math.PI / 2,
      endAngle: data.speed / data.maxSpeed * Math.PI - Math.PI / 2,
      innerRadius: r*0.7,
      outerRadius: r
    });

    svg.append('g')
        .attr('transform', `translate(${r},${r})`)
        .append('path')
        .attr('d', p)
        .attr('fill', colors.dark_blue);
}
